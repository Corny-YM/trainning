import { deleteAccount } from "@/apiCalls";
import { Modal, Text, VerticalStack } from "@shopify/polaris";

import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const DefaultModal = ({
  activator = {},
  showModal = false,
  setShowModal,
}: any) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // TanStack
  const deleteAccountMutation = useMutation({
    mutationFn: () => {
      return deleteAccount(id);
    },
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  const handleDeleteAccount = async () => {
    await deleteAccountMutation.mutate();
  };
  return (
    <Modal
      activator={activator}
      open={showModal}
      onClose={() => setShowModal(false)}
      title="Are you sure you want to delete this account?"
      primaryAction={{
        content: "Delete",
        destructive: showModal,
        outline: showModal,
        onAction: handleDeleteAccount,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: () => setShowModal(false),
        },
      ]}
    >
      <Modal.Section>
        <VerticalStack>
          <Text as={"p"}>This account cannot be restored!</Text>
        </VerticalStack>
      </Modal.Section>
    </Modal>
  );
};

export default DefaultModal;
