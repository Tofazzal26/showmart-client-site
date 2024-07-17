import { Outlet } from "react-router-dom";
import Header from "../../Components/Headers/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="lg:px-0 px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
