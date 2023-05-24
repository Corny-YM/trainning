import { useNavigate } from "react-router-dom";
import { Box, Button, HorizontalStack, Icon, Text } from "@shopify/polaris";
import { ArrowDownMinor, AddMajor } from "@shopify/polaris-icons";

const HeaderVouchers = () => {
  const navigate = useNavigate();
  return (
    <div className="display-flex justify-content-space-between">
      <Text variant="headingXl" as="h3">
        Vouchers Management
      </Text>
      <HorizontalStack gap="4" align="end">
        <div className="center padding-6 cursor-pointer border-radius-4">
          <Icon source={ArrowDownMinor} color="base" />
          <Text fontWeight="bold" as="p">
            Export excel
          </Text>
        </div>
        <div className="center padding-6 cursor-pointer border-radius-4">
          <Text fontWeight="bold" as="p">
            Order sync
          </Text>
        </div>
        <div className="center padding-6 cursor-pointer border-radius-4">
          <Text fontWeight="bold" as="p">
            Product sync
          </Text>
        </div>
        <div className="center padding-6 cursor-pointer border-radius-4">
          <Text fontWeight="bold" as="p">
            Customer sync
          </Text>
        </div>
        <Button
          icon={AddMajor}
          primary
          onClick={() => navigate("/accounts/new")}
        >
          Create a new voucher
        </Button>
      </HorizontalStack>
    </div>
  );
};

export default HeaderVouchers;
