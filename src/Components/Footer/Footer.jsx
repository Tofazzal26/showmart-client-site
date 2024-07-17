import logo from "../../../public/budgeting.png";

const Footer = () => {
  return (
    <div className=" bg-[#162649] text-white p-10">
      <footer className="footer container mx-auto">
        <aside>
          <div className="flex items-center gap-2">
            <img src={logo} width={45} alt="" />
            <h2 className="text-[24px] font-semibold">Financity</h2>
          </div>
          <p className="text-base lg:w-[600px]">
            Financity Industries Ltd.
            <br />
            Financial statements are written records that convey the financial
            activities of a company. Financial statements are often audited by
            government agencies and accountants to ensure accuracy and for tax,
            financing, or investing purposes.
          </p>
        </aside>
        <nav>
          <h6 className="text-lg font-semibold">Quick Links</h6>
          <a className="link link-hover text-[16px]">About Us</a>
          <a className="link link-hover text-[16px]">Contact Us</a>
          <a className="link link-hover text-[16px]">Legal Notice</a>
          <a className="link link-hover text-[16px]">Careers</a>
          <a className="link link-hover text-[16px]">Help Center</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Services</h6>
          <a className="link link-hover text-[16px]">Insurance Tax </a>
          <a className="link link-hover text-[16px]">Financial Planning </a>
          <a className="link link-hover text-[16px]">Audit & Assurancy</a>
          <a className="link link-hover text-[16px]">Business Growth Plan</a>
          <a className="link link-hover text-[16px]">Finance Secure</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Head Office</h6>
          <a className="link link-hover text-[16px]">
            Blue Tower #789, Small building
          </a>
          <a className="link link-hover text-[16px]">
            {" "}
            Uttara 1200, Bangladesh
          </a>

          <h6 className="text-lg font-semibold">Office Hours</h6>
          <a className="link link-hover text-[16px]">
            Monday - Firday : 09.00-17.00
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
