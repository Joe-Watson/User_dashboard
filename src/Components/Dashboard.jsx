import Profile from "./Profile";
import "./Dashboard.css";
import DropItems from "./DropItems";

const DashBoard = () => {
  return (
    <div className="dashboard bg-primary bg-opacity-25 p-0">
      <Profile />
      <div className="group_list">
        <ul className="list">
          <li className="">
            <span className="text-muted border-bottom p-1">Name</span>
            <span className="p-1">Suman kumar</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">Mobile</span>
            <span className="p-1">+91 8851984959</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">Email</span>
            <span className="p-1">sk@gmail.com</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">From</span>
            <span className="p-1">Haryana</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">To</span>
            <span className="p-1">New Delhi</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">GST No.</span>
            <span className="p-1">78GST600</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">Pickup Floor</span>
            <span className="p-1">2nd floor</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">Drop Floor</span>
            <span className="p-1">10th floor</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">Goods Value</span>
            <span className="p-1">120000</span>
          </li>
          <li className="">
            <span className="text-muted border-bottom p-1">
              Your Items list
            </span>
            <span className="p-1">
              <DropItems />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DashBoard;
