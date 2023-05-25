import { Layout } from "@shopify/polaris";
import HeaderVouchers from "./HeaderVouchers";
import ContentVouchers from "./ContentVouchers";

const Vouchers = () => {
  return (
    <HeaderVouchers>
      <ContentVouchers />
    </HeaderVouchers>
  );
};

export default Vouchers;
