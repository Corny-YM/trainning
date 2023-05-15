import { FormLayout, Modal, TextField } from "@shopify/polaris";

const ModalsMarkup = ({
  isShowModal,
  toggleModalActive,
}: {
  isShowModal: boolean;
  toggleModalActive: any;
}) => {
  const [supportSubject, setSupportSubject] = useState("");
  const [supportMessage, setSupportMessage] = useState("");
  const handleSubjectChange = useCallback(
    (value: string) => setSupportSubject(value),
    []
  );
  const handleMessageChange = useCallback(
    (value: string) => setSupportMessage(value),
    []
  );

  return (
    <Modal
      open={isShowModal}
      onClose={toggleModalActive}
      title="Contact support"
      primaryAction={{
        content: "Send",
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
            autoComplete="off"
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            autoComplete="off"
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );
};

const arePropsEqual = (prevProps: any, nextProps: any) => {
  return (
    prevProps.isShowModal === nextProps.isShowModal &&
    prevProps.toggleModalActive === nextProps.toggleModalActive
  );
};

export default memo(ModalsMarkup, arePropsEqual);
