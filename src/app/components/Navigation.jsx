import { FaApple } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const Navigation = () => {
  return (
    <nav className="row-span-1/2 col-span-2 mb-16 flex items-center justify-between">
      <FaApple size={45} />
      <ul className="flex list-none items-center justify-center gap-[30px] text-lg">
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li className="text-iwatch-blue z-[1] cursor-pointer rounded-full bg-white px-[10px]">
          iWatch
        </li>
        <li>Support</li>
      </ul>
      <div className="flex gap-2.5">
        <IoSearch size={22} />
        <span className="h-5 w-0.5 bg-white opacity-50"></span>
        <LuShoppingBag size={22} />
      </div>
    </nav>
  );
};

export default Navigation;
