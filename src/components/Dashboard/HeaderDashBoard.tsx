import { Button, Text } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

const HeaderDashBoard = () => {
  const navigate = useNavigate();
  return (
    <div className="display-flex justify-content-space-between margin-bottom-16">
      <Text variant="headingXl" as="h3">
        Account Management
      </Text>
      <Button primary onClick={() => navigate("/accounts/new")}>
        Create a new account
      </Button>
    </div>
  );
};

export default HeaderDashBoard;
