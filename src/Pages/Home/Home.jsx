import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { TiTick } from "react-icons/ti";
import thumb from "../../../public/thumb.png";
import { GoArrowRight } from "react-icons/go";
const Home = () => {
  const { bulbul } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className="relative lg:pt-[80px] lg:ml-[200px]">
          <h2 className="text-[#4889fa] font-semibold">Traffic</h2>
          <h1 className="text-[30px] lg:text-[40px] lg:w-[450px] font-black font-interFont">
            Product reporting with 50k queries.
          </h1>
          <p className="text-[16px] lg:w-[450px] font-interFont">
            He nicked it tickety boo harry the cras bargy chap mush spiffing
            spend a penny the full monty burke butty.
          </p>
          <div>
            <div className="lg:mt-[40px]">
              <div className="flex lg:flex-row flex-col lg:gap-[100px]">
                <div className="space-y-8">
                  <div className="flex lg:flex-row flex-col gap-2">
                    <div className="bg-[#4889fa] w-[30px] h-[30px] flex justify-center items-center rounded-full">
                      <span className="">
                        <TiTick color="#ffffff" size={20} />
                      </span>
                    </div>
                    <div>
                      <h1 className="text-[20px] font-bold font-interFont">
                        Carefully designed
                      </h1>
                      <p className="text-[15px] lg:w-[210px] font-interFont">
                        Meticulously designed for optimal performance and
                        aesthetic appeal.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-2">
                    <div className="bg-[#f86f5c] w-[30px] h-[30px] flex justify-center items-center rounded-full">
                      <span className="">
                        <TiTick color="#ffffff" size={20} />
                      </span>
                    </div>
                    <div>
                      <h1 className="text-[20px] font-bold font-interFont">
                        Seamless Sync
                      </h1>
                      <p className="text-[15px] lg:w-[210px] font-interFont">
                        Effortlessly synchronize data across devices for a
                        smooth experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex lg:flex-row flex-col gap-2">
                    <div className="bg-[#5ad28a] w-[30px] h-[30px] flex justify-center items-center rounded-full">
                      <span className="">
                        <TiTick color="#ffffff" size={20} />
                      </span>
                    </div>
                    <div>
                      <h1 className="text-[20px] font-bold font-interFont">
                        Choose a Product
                      </h1>
                      <p className="text-[15px] lg:w-[210px] font-interFont">
                        Select from a curated range of products tailored to your
                        needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-2">
                    <div className="bg-[#b058fc] w-[30px] h-[30px] flex justify-center items-center rounded-full">
                      <span className="">
                        <TiTick color="#ffffff" size={20} />
                      </span>
                    </div>
                    <div>
                      <h1 className="text-[20px] font-bold font-interFont">
                        User Interactive
                      </h1>
                      <p className="text-[15px] lg:w-[210px] font-interFont">
                        Engage users with intuitive and dynamic interactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[40px]">
                <button className="flex items-center gap-4 bg-transparent border-2 py-2 px-6 rounded-md font-semibold">
                  Learn More
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:absolute right-0 top-5">
            <img src={thumb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
