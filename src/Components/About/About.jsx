import aboutImage from "../../../public/about image.png";

const About = () => {
  return (
    <div className="my-2">
      <div className="container mx-auto">
        <div className="lg:mt-[100px]">
          <h1 className="lg:text-[55px] lg:leading-[70px] font-black">
            The leading people <br /> Management platform
          </h1>
          <p className="text-[20px] mt-2">
            We offer you a panoply of cutting-edge options
          </p>
        </div>
      </div>

      <div className="bg-[#2a70fb]  lg:mt-[300px]">
        <div className="lg:px-[180px] px-4 lg:py-[200px] relative">
          <div className="absolute lg:right-[180px] lg:top-[-200px]">
            <img src={aboutImage} alt="about" />
          </div>
          <div className="space-y-6 lg:mt-[300px]">
            <h1 className="text-[30px] font-bold text-white">
              Join our team to create the best digital <br /> solutions.
            </h1>
            <p className="text-[16px] lg:w-[770px] text-white font-interFont">
              The ShowMart team is a group of dedicated developers and designers
              focused on delivering a top-notch product showcase experience.
              With expertise in the MERN stack, the team has built a seamless
              and responsive platform for users to explore products
              effortlessly.
            </p>
            <button className="bg-transparent border-2 rounded-lg text-white px-4 py-2  font-semibold">
              View All Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
