import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const DropItems = () => {
  return (
    <div className="dropdown">
      <span
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Items
      </span>
      <ul className="dropdown-menu">
        <li>Items comming</li>
        <li>Another action</li>
        <li>Something else here</li>
      </ul>
    </div>
  );
};
export default DropItems;
