import { Context } from "@/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    setUsername,
    setShowProfile,
    setEmail,
    setPhone,
    setData,
    username,
    email,
    phone,
  } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowProfile(true);
    let users = {
      username,
      email,
      phone,
      id: new Date().getTime(),
    };
    setData((prev) => [...prev, users]);
    setUsername("");
    setEmail("");
    setPhone("");
  };
  

  
  return (
    <>
      <div className="container flex flex-col justify-center items-center pt-20">
        <div>
          <h1 className="text-3xl pb-5 text-white">
            Create User Registration Form
          </h1>
        </div>
        <div className="bg-white p-5 w-[400px] rounded-xl">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-3 outline-none"
          >
            <input
              type="text"
              value={username}
              name=""
              id=""
              className="outline-none text-lg"
              placeholder="User Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              className="outline-none text-lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              value={phone}
              placeholder="Phone"
              className="outline-none text-lg"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
            <button className="bg-blue-500 text-white p-2 text-lg rounded-lg">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
