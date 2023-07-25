import "./Menu.css";
import { BsFillCartFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { TbTrack } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
const Menu = () => {
  return (
    <ul className="Menu_list">
      <li className="shadow">
        <span className="p-1">
          <BsFillCartFill size="20" />
        </span>
        <span>Your order</span>
      </li>
      <li className="shadow">
        <span className="p-1">
          <MdPayment size="20" />
        </span>
        <span>Payment</span>
      </li>
      <li className="shadow">
        <span className="p-1">
          <HiDocumentText size="20" />
        </span>
        <span>Document</span>
      </li>
      <li className="shadow">
        <span className="p-1">
          <TbTrack size="20" />
        </span>
        <span>Track your order</span>
      </li>
      <li className="shadow">
        <span className="p-1">
          <FaHistory size="20" />
        </span>
        <span>Payment History</span>
      </li>
    </ul>
  );
};
export default Menu;
