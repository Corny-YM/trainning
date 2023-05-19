import { Button, Text } from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import DefaultModal from "../Modal";

const NavSection = ({ title, isUpdate }: any) => {
  const [showModal, setShowModal] = useState(false);
  const refBtnDelete = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <DefaultModal
        activator={refBtnDelete}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="display-flex justify-content-space-between">
        <div className="display-flex align-items-center">
          <div className="margin-right-16">
            <Button
              onClick={() => navigate("/dashboard")}
              icon={ArrowLeftMinor}
            ></Button>
          </div>
          <Text variant="headingLg" as="h3" fontWeight="bold">
            {/* can be Email */}
            {title || "loading..."}
          </Text>
        </div>

        {isUpdate && (
          <div ref={refBtnDelete}>
            <Button onClick={() => setShowModal(true)} destructive>
              Delete account
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

const arePropsEqual = (preProps: any, nextProps: any) => {
  return (
    preProps.title === nextProps.title &&
    preProps.isUpdate === nextProps.isUpdate
  );
};

export default memo(NavSection, arePropsEqual);
