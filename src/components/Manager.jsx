import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

function Manager() {
  const ref = useRef();
  const passwordref = useRef();
  const [form, setform] = useState({ site: "", userName: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("text copied to clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordref.current.type = "text";
    if (ref.current.src.includes("icons/close-eye.png")) {
      passwordref.current.type = "password";
      ref.current.src = "icons/eye-solid.png";
    } else {
      passwordref.current.type = "text";
      ref.current.src = "icons/close-eye.png";
    }
  };

  const savePassword = () => {
    console.log(form);
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwods",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log(passwordArray);
  };
  const DeletePassword = (id) => {
    console.log("Deleting password", id);
    setpasswordArray(passwordArray.filter((items) => items.id !== id));
    localStorage.setItem(
      "passwods",
      JSON.stringify(passwordArray.filter((items) => items.id !== id))
    );
    // console.log(passwordArray);
  };

  const editPassword = (id) => {
    console.log("editing password", id);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        transition="Bounce"
      />

      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6c9_100%)]"></div>

      <div className=" mycontainer">
        <h2 className="text-4xl text font-bold text-center">
          <span className="text-green-700"> &lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </h2>
        <p className="text-green-900 text-lg text-center">
          Your Own Password Manager
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-1 "
            type="text"
            placeholder="Enter Website Url"
            name="site"
            id=""
          />
          <div className="flex w-full gap-8 justify-between">
            <input
              value={form.userName}
              onChange={handleChange}
              className="rounded-full border border-green-500 w-full p-4 py-1 "
              type="text"
              placeholder="Enter Username"
              name="userName"
              id=""
            />

            <div className="relative">
              <input
                ref={passwordref}
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-green-500 w-full p-4 py-1 "
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <span className="absolute right-0">
                <img
                  ref={ref}
                  className="p-2 cursor-pointer"
                  onClick={showPassword}
                  width={35}
                  src="icons/eye-solid.png"
                  alt=""
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-500 hover:bg-green-400 rounded-full px-4 py-2 w-fit gap-2 border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>{" "}
            Save Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full ">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 rounded-xl overflow-hidden">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border border-white text-center min-w-32">
                        <div className="flex items-center justify-center ">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="cursor-pointer size-7 "
                            onClick={() => copyText(item.site)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center min-w-32">
                        <div className="flex items-center justify-center ">
                          {item.userName}
                          <div
                            className="cursor-pointer size-7 "
                            onClick={() => copyText(item.userName)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center min-w-32">
                        <div className="flex items-center justify-center ">
                          {item.password}
                          <div
                            className="cursor-pointer size-7"
                            onClick={() => copyText(item.password)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" flex justify-center py-2 border border-white text-center ">
                        <span
                          className="cursor-pointer mx-3"
                          onClick={() => editPassword(item.id)}
                        >
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                              trigger: "hover",
                            }}
                            src="icons/edit.png"
                            alt="abc"
                          />
                        </span>
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => DeletePassword(item.id)}
                        >
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                              trigger: "hover",
                            }}
                            src="icons/delete.png"
                            alt="abc"
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
