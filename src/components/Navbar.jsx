import { BiSignal5, BiNoSignal } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const msgOnClick = () => {
    alert("I am your network Signal. I will be red if your network lost");
  };

  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(!isOnline);
      }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  });

  return (
    <nav className="flex justify-between px-5 py-3 bg-[#79addc]">
      <button onClick={msgOnClick}>
        {
            isOnline ? 
        <BiSignal5 className="text-xl font-bold cursor-pointer text-green-800" />
        : 
        <BiNoSignal className="text-xl font-bold cursor-pointer text-red-600" />
        }
      </button>

      <Link to="/forecast" className="select-none font-bold text-xl font-syne cursor-pointer border rounded-md p-2">
        Forecast
      </Link>
    </nav>
  );
};

export default Navbar;
