import { AlphaCard, Tabs } from "@shopify/polaris";
import Table from "../Table";

const tabs = [
  {
    id: "all voucher",
    content: "All Vouchers",
    accessibilityLabel: "All vouchers",
    panelID: "all voucher",
  },
];

const ContentVouchers = () => {
  return (
    <AlphaCard>
      <Tabs tabs={tabs} selected={0}>
        {/* Custom table */}
        <Table />
      </Tabs>
    </AlphaCard>
  );
};

export default ContentVouchers;
