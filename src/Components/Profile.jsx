import Menu from "./Menu";
import "./Profile.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
const Profile = () => {
  const [left, setLeft] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="menu_container bg-primary"
      onMouseEnter={() => {
        setLeft(true);
      }}
      onMouseLeave={() => {
        setLeft(false);
      }}
      style={
        windowSize.width <= 700
          ? {
              left: `${left ? "0px" : "-190px"}`,
              position: "fixed",
              zIndex: 99,
              top: "0px"
            }
          : { left: "0px" }
      }
    >
      <div className="user_dp_container">
        <span className="click_me">Menu</span>
        <div className="user shadow">
          <BsFillPersonFill size="50" />
        </div>
        <span className="badge user_name text-white">Suman kumar</span>
      </div>

      <Menu />
    </div>
  );
};
export default Profile;
