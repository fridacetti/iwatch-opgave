import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
const PageIndicator = () => {
  return (
    <div className="col-1 row-4 mt-10 flex items-center ">
      <IoIosArrowRoundBack size={30} />
      <p className="text-sm font-medium">1</p>
      <IoIosArrowRoundForward size={30} />
    </div>
  );
};

export default PageIndicator;
