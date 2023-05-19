import { Page } from "@shopify/polaris";
import FilterNav from "./FilterNav";
import Table from "./Table";
import HeaderDashBoard from "./HeaderDashBoard";

const DashBoardTest = () => {
  return (
    <Page>
      <HeaderDashBoard />
      <FilterNav />
      <Table />
    </Page>
  );
};

export default DashBoardTest;
