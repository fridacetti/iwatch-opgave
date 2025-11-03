import { FaApple} from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const Navigation = () => {
  return (
    <nav className="navigation">
      <FaApple size={45} />
      <ul className="menu">
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li className="active" style={{ color: "#c8dce5" }}>
          iWatch
        </li>
        <li>Support</li>
      </ul>
      <div className="icons">
        <IoSearch size={22} />
        <span className="divider"></span>
        <LuShoppingBag size={22} />
      </div>
    </nav>
  );
};

export default Navigation;
