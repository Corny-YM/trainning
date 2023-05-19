import { createAccount } from "@/apiCalls";
import {
  AlphaCard,
  Button,
  Divider,
  FormLayout,
  Layout,
  Select,
  TextField,
  Toast,
} from "@shopify/polaris";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const options = [
  {
    label: "Admin",
    value: "admin",
  },
  { label: "Agent", value: "agent" },
];

const SectionAccount = () => {
  const [showToast, setShowToast] = useState("");
  const [isInput, setIsInput] = useState(false);
  const [selectedRole, setSelectedRole] = useState("agent");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (nameInput && emailInput) {
      setIsInput(true);
      return;
    }
    setIsInput(false);
  }, [nameInput, emailInput]);

  // TanStack
  const queryClient = useQueryClient();
  const createAccountMutation = useMutation({
    mutationFn: () => {
      return createAccount({
        email: emailInput,
        name: nameInput,
        phone: phoneInput,
        role: selectedRole,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["account"]);
      navigate("/dashboard");
    },
  });

  const isValidEmail = (str: string) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(str);
  };

  const handleCreateAccount = async () => {
    if (!isValidEmail(emailInput)) {
      setShowToast("email");
      return;
    }
    await createAccountMutation.mutate();
  };

  return (
    <>
      {showToast == "email" && (
        <Toast content="Email not valid!" onDismiss={() => setShowToast("")} />
      )}
      <Layout.Section>
        <AlphaCard>
          <FormLayout>
            <TextField
              type="text"
              label="Name"
              value={nameInput}
              onChange={(str) => {
                setNameInput(str);
              }}
              autoComplete="off"
            />
            <TextField
              type="email"
              label="Email"
              value={emailInput}
              onChange={(str) => {
                setEmailInput(str);
              }}
              autoComplete="email"
            />
            <TextField
              type="text"
              label="Phone"
              value={phoneInput}
              onChange={(str) => {
                setPhoneInput(str);
              }}
              autoComplete="off"
            />
            <Select
              label="Role"
              options={options}
              onChange={(str) => {
                setSelectedRole(str);
              }}
              value={selectedRole}
            />
          </FormLayout>
        </AlphaCard>
      </Layout.Section>
      <Layout.Section>
        <Divider />
        <div className="display-flex center-end margin-top-16">
          <Button primary onClick={handleCreateAccount} disabled={!isInput}>
            {createAccountMutation.isLoading ? "Loading..." : "Save"}
          </Button>
        </div>
      </Layout.Section>
    </>
  );
};

export default SectionAccount;
