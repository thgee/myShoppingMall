import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Sidebar = ({ toggle, setToggle }) => {
  const [isOpen, setIsOpen] = useState("");

  const sidebarRef = useRef();

  const clickOutside = (e) => {
    if (!sidebarRef.current?.contains(e.target)) {
      console.log("clicked");
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [toggle]);

  useEffect(() => {
    toggle ? setIsOpen("open") : setIsOpen("");
  }, [toggle]);

  return (
    <div className={`Sidebar ${isOpen}`} ref={sidebarRef}>
      <h3>Select</h3>
      <div className="sidebar-cate-wrapper">
        <div>Shirts</div>
        <div>Pants</div>
        <div>Shoes</div>
      </div>
    </div>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState();
  return (
    <div className="Header">
      <h3>TH shop</h3>
      <div className="cate-wrapper">
        <div>Shirt</div>
        <div>Pants</div>
        <div>shoes</div>
      </div>
      <FontAwesomeIcon
        className="barIcon"
        icon={faBars}
        onClick={(e) => {
          setToggle(!toggle);
          e.stopPropagation();
        }}
      />
      <Sidebar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};
export default Header;
