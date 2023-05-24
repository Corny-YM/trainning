import { Layout } from "@shopify/polaris";
import HeaderVouchers from "./HeaderVouchers";
import ContentVouchers from "./ContentVouchers";

const Vouchers = () => {
  return (
    <div className="padding-16-32">
      <Layout>
        <Layout.Section>
          <HeaderVouchers />
        </Layout.Section>
        <Layout.Section>
          <ContentVouchers />
        </Layout.Section>
      </Layout>
    </div>
  );
};

export default Vouchers;
