import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Orders from "./components/Orders";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import "./App.css";
import { Frame, HorizontalGrid } from "@shopify/polaris";

import { logo } from "./components/Logo";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Frame topBar={<Header />} navigation={<SideBar />} logo={logo}>
          <Routes>
            <Route path="/" element={null} />
            <Route path="/dashboard" element={<Account />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Frame>
      </div>
    </BrowserRouter>
  );
};

export default App;
