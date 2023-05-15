import { useNavigate } from "react-router-dom";
import { Navigation } from "@shopify/polaris";
import {
  ArrowLeftMinor,
  HomeMajor,
  OrdersMajor,
  ConversationMinor,
} from "@shopify/polaris-icons";

import ModalsMarkup from "components/Modals/ModalsMarkup";

const SideBar = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModalActive = useCallback(() => {
    setIsShowModal((preIsShowModal) => !preIsShowModal);
  }, []);

  const handleClickNavigation = useCallback((path = "") => {
    navigate(`/${path}`);
  }, []);

  return (
    <Navigation location="/">
      {/* First section */}
      <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor,
            onClick: handleClickNavigation,
          },
        ]}
      />

      {/* Second section */}
      <Navigation.Section
        separator
        title="Jaded Pixel App"
        items={[
          {
            label: "Dashboard",
            icon: HomeMajor,
            onClick: () => handleClickNavigation("dashboard"),
          },
          {
            label: "Jaded Pixel Orders",
            icon: OrdersMajor,
            onClick: () => handleClickNavigation("orders"),
          },
        ]}
        action={{
          icon: ConversationMinor,
          accessibilityLabel: "Contact support",
          onClick: toggleModalActive,
        }}
      />

      <ModalsMarkup
        isShowModal={isShowModal}
        toggleModalActive={toggleModalActive}
      />
    </Navigation>
  );
};

export default SideBar;
