
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Orders from "./components/Orders";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <SideBar />

        <Routes>
          <Route path="/dashboard" element={<Account />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
