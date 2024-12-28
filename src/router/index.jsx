import Layout from "@/pages/layout/Layout";
import Login from "@/pages/login/Login";
import User from "@/pages/user/User";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
