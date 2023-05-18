import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Frame } from "@shopify/polaris";

import { logo } from "components/Logo";
import Orders from "components/Orders";
import Header from "components/Header";
import SideBar from "components/SideBar";
import DashBoard from "components/DashBoard";
import DashBoardTest from "@/components/Dashboard/DashBoardTest";
import InfoAccount from "@/components/InfoAccount";

const LayoutApp = () => {
  return (
    <Frame topBar={<Header />} navigation={<SideBar />} logo={logo}>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/dashboard" element={<DashBoardTest />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/accounts/:id" element={<InfoAccount />} />
      </Routes>
    </Frame>
  );
};

export default LayoutApp;
