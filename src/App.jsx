import { useEffect, useState } from "react";
import { Context } from "./context";
import Login from "./pages/login/Login";
import User from "./pages/user/User";

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const [edit, setEdit] = useState(false);

  return (
    <>
      {/* <Routers /> */}
      <Context.Provider
        value={{
          username,
          setUsername,
          setShowProfile,
          email,
          setEmail,
          phone,
          setPhone,
          data,
          setData,
          edit,
          setEdit,
        }}
      >
        {showProfile ? <User /> : <Login />}
      </Context.Provider>
    </>
  );
};

export default App;
