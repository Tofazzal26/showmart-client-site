import { Outlet } from "react-router-dom";
import Header from "../../Components/Headers/Header";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="lg:px-0 px-2 h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
