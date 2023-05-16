import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

import "@/App.css";
import { Frame, Loading } from "@shopify/polaris";

import { AuthContext } from "@/context/AuthContext";

const Login = lazy(() => import("@/pages/Login"));
const LayoutApp = lazy(() => import("@/pages/LayoutApp"));

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="app h-100">
        <Frame>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/*"
                element={user ? <LayoutApp /> : <Navigate to={"/login"} />}
              />
              <Route
                path="/login/*"
                element={!user ? <Login /> : <Navigate to={"/"} />}
              />
            </Routes>
          </Suspense>
        </Frame>
      </div>
    </BrowserRouter>
  );
};

export default App;
