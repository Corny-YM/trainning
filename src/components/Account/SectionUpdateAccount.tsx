import {
  AlphaCard,
  Button,
  Divider,
  FormLayout,
  Layout,
  Select,
  TextField,
} from "@shopify/polaris";
import { updateAccount } from "@/apiCalls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const options = [
  {
    label: "Admin",
    value: "admin",
  },
  { label: "Agent", value: "agent" },
];

const SectionUpdateAccount = ({
  idAccount,
  name = "",
  phone = "",
  role = "",
}: any) => {

  // TanStack
  const queryClient = useQueryClient();
  const updateAccountMutation = useMutation({
    mutationFn: () => {
      return updateAccount(idAccount, {
        name: nameInput,
        phone: phoneInput,
        role: selectedRole,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["account"]);
    },
  });

  //   console.log(name, phone, role);
  const [isChanged, setIsChanged] = useState(false);
  const [selectedRole, setSelectedRole] = useState(role);
  const [nameInput, setNameInput] = useState(name);
  const [phoneInput, setPhoneInput] = useState(phone);

  useEffect(() => {
    setNameInput(name);
    setPhoneInput(phone);
    setSelectedRole(role);
  }, [name, phone, role]);

  const eventChangeInput = (value: string, compareValue: string) => {
    if (value != compareValue) {
      setIsChanged(true);
      return;
    }
    setIsChanged(false);
  };

  const handleUpdateAccount = () => {
    updateAccountMutation.mutate();
  };

  return (
    <>
      <Layout.Section>
        <AlphaCard>
          <FormLayout>
            <TextField
              type="text"
              label="Name"
              value={nameInput}
              onChange={(str) => {
                setNameInput(str);
                eventChangeInput(str, name);
              }}
              autoComplete="off"
            />
            <TextField
              type="text"
              label="Phone"
              value={phoneInput}
              onChange={(str) => {
                setPhoneInput(str);
                eventChangeInput(str, phone);
              }}
              autoComplete="off"
            />
            <Select
              label="Role"
              options={options}
              onChange={(str) => {
                setSelectedRole(str);
                eventChangeInput(str, role);
              }}
              value={selectedRole}
            />
          </FormLayout>
        </AlphaCard>
      </Layout.Section>
      <Layout.Section>
        <Divider />
        <div className="display-flex center-end margin-top-16">
          <Button primary onClick={handleUpdateAccount} disabled={!isChanged}>
            {updateAccountMutation.isLoading ? "Loading..." : "Save"}
          </Button>
        </div>
      </Layout.Section>
    </>
  );
};

export default SectionUpdateAccount;
