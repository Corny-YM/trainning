import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Frame } from "@shopify/polaris";

import { logo } from "components/Logo";
import Orders from "components/Orders";
import Header from "components/Header";
import SideBar from "components/SideBar";
import DashBoard from "components/DashBoard";

const LayoutApp = () => {
  return (
    <Frame topBar={<Header />} navigation={<SideBar />} logo={logo}>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Frame>
  );
};

export default LayoutApp;
