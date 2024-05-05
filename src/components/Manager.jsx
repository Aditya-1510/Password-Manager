import { useState, useRef, useEffect } from "react";
function Manager() {
  const ref = useRef();
  const [form, setform] = useState({ site: "", userName: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const showPassword = () => {
    alert("Show the password");
    if (ref.current.src.includes("icons/close-eye.png")) {
      ref.current.src = "icons/eye-solid.png";
    } else {
      ref.current.src = "icons/close-eye.png";
    }
  };

  const savePassword = () => {
    console.log(form);
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwods", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
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
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-green-500 w-full p-4 py-1 "
                type="text"
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
            Add Password
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
                </tr>
              </thead>
              <tbody className="bg-green-100 rounded-xl overflow-hidden">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center min-w-32">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                      </td>
                      <td className="py-2 border border-white text-center min-w-32">
                        {item.userName}
                      </td>
                      <td className="py-2 border border-white text-center min-w-32">
                        {item.password}
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
