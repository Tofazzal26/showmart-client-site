import logo from "../../../public/convenience.png";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className=" bg-[#162649] text-white p-10">
      <footer className="footer container mx-auto">
        <aside>
          <div className="flex items-center gap-2">
            <img src={logo} width={45} alt="" />
            <h2 className="text-[24px] font-semibold">ShowMart</h2>
          </div>
          <p className="text-base lg:w-[600px]">
            ShowMart Industries Ltd.
            <br />
            ShowMart is a sleek MERN stack app for browsing products with ease.
            It offers pagination, search, categorization, and sorting features,
            all within a responsive, user-friendly interface. Secure
            authentication is provided via Google and email.
          </p>
        </aside>
        <nav>
          <h6 className="text-lg font-semibold">Company</h6>
          <a className="link link-hover text-[16px]">About Us</a>
          <a className="link link-hover text-[16px]">Service</a>
          <a className="link link-hover text-[16px]">Case Studies</a>
          <a className="link link-hover text-[16px]">Blog</a>
          <a className="link link-hover text-[16px]">Contact</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Support</h6>
          <a className="link link-hover text-[16px]">Community </a>
          <a className="link link-hover text-[16px]">Resources </a>
          <a className="link link-hover text-[16px]">Faqs</a>
          <a className="link link-hover text-[16px]">Privacy Policy</a>
          <a className="link link-hover text-[16px]">Careers</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Get In Touch</h6>
          <a className="link link-hover text-[16px] flex items-center gap-2">
            <MdOutlineMail size={20} />{" "}
            <span>afranislamabir6789@gmail.com</span>
          </a>
          <a className="link link-hover text-[16px] flex items-center gap-2">
            <IoCallOutline size={20} /> <span>+8801306700357</span>
          </a>
          <a className="link link-hover text-[16px] flex items-center gap-2">
            <IoLocationOutline size={20} /> <span>Dhaka, Bangladesh</span>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
