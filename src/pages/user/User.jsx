import { Context } from "@/context";
import { useContext } from "react";

const User = () => {
  const { username, email, phone, data, setData, setEdit } =
    useContext(Context);
  console.log(data);
  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };
  const handleEdit = (user) => {
    setEdit(true);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl text-center text-white p-5">Users</h1>
        <div className="flex gap-5 flex-wrap justify-center">
          {data?.map((user) => (
            <div key={user.id} className="px-5 w-[300px] bg-white rounded-lg">
              <img src="/user.jpg" alt="" />
              <div className="py-5 px-2">
                <h2 className="text-lg">Username: {user.username}</h2>
                <h2 className="text-lg">Email: {user.email}</h2>
                <h2 className="text-lg">Phone: {user.phone}</h2>
                <div className="flex gap-5 pt-3">
                  <button
                    className="px-3 py-1 bg-blue-400 text-white rounded-lg"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-blue-400 text-white rounded-lg"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
