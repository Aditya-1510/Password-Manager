function Footer() {
  return (
    <div className="bg-slate-800 flex flex-col justify-center items-center fixed bottom-0 w-full">
      <div>
        <div className="logo font-bold  text-white text-2xl">
          <span className="text-green-700"> &lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </div>
      </div>
      <div className="flex justify-center items-center text-white">
        @ created by{" "}
        <img className=" w-4 mx-2" src="icons/heart.png" alt="heart" />{" "}
        <span className="text-green-700">Aditya Pare</span>
      </div>
    </div>
  );
}

export default Footer;
