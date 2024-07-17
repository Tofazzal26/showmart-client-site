import { Outlet } from "react-router-dom";
import Header from "../../Components/Headers/Header";

const Root = () => {
  return (
    <div className="lg:px-0 px-2">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
