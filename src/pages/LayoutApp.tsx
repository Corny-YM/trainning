import { Route, Routes } from "react-router-dom";
import { Frame } from "@shopify/polaris";

import { logo } from "components/Logo";
import Orders from "components/Orders";
import Header from "components/Header";
import SideBar from "components/SideBar";
import DashBoardTest from "@/components/Dashboard/DashBoardTest";
import Account from "@/components/Account";
import Vouchers from "@/components/Vouchers";

const LayoutApp = () => {
  return (
    <Frame topBar={<Header />} navigation={<SideBar />} logo={logo}>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/dashboard" element={<DashBoardTest />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/accounts/:id" element={<Account isUpdate={true} />} />
        <Route path="/accounts/new" element={<Account />} />
      </Routes>
    </Frame>
  );
};

export default LayoutApp;
