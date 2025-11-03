import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
const PageIndicator = () => {
  return (
    <div className="pageindicator">
      <IoIosArrowRoundBack size={30} />
      <p>1</p>
      <IoIosArrowRoundForward size={30} />
    </div>
  );
};

export default PageIndicator;
