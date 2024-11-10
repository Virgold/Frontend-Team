import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { NAVLINKS } from "@/constants";

import Logo from "@/assets/logo";
import { MouseEvent } from "react";

const handleLinkClick = (sectionId: string) => {

  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, 0)
};

const Footer = () => {
  const navigate = useNavigate();

  const handleUnderConstruction = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate('/under-construction')
  }

  return (
    <footer className="w-full text-white lg:text-black">
      <div className="container mx-auto bg-footer lg:bg-transparent rounded-3xl">
        <div className="sub-container">
          <div className="flex flex-col md:flex-row justify-between items-center border-b-2 py-8 gap-8">
            {/* Logo */}
            <Link to={'/'} className="hidden lg:block text-center md:text-left">
              <Logo className='h-12 2xl:h-24 w-auto' />
            </Link>

            {/* Navigation Links */}
            <div className="self-start lg:self-auto" >
              <ul className="flex flex-col md:flex-row text-center md:text-right gap-4 md:gap-8">
                {NAVLINKS.map(({ href, label }, index) => (
                  <li key={index}>
                    <Link
                      to={href}
                      className="block md:inline p-4 hover:text-blue-600 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="self-center">
              <ul className="flex justify-center md:justify-end gap-2">
                <li>
                  <div className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-not-allowed opacity-50">
                    <FaFacebook size={20} />
                  </div>
                </li>

                <li>
                  <div className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-not-allowed opacity-50">
                    <FaXTwitter size={20} />
                  </div>
                </li>


                <li>
                  <a className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center" href="https://www.instagram.com/ccnouvells/profilecard/"><FaInstagram size={20} /></a>
                </li>

                <li>
                  <a className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center" href="https://www.linkedin.com/company/nouvells/"> <FaLinkedinIn size={20} /></a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row border-t-2 justify-between items-center py-8 text-center md:text-left gap-4 text-white lg:text-black">
            <div>&copy; 2024 Nouvells. All rights reserved.</div>
            <div>
              <ul className="flex justify-center md:justify-end gap-4">
                <li><Link to="/terms" onClick={(e) => handleUnderConstruction(e)}>Terms of Service</Link></li>
                <li><Link to="/privacy" onClick={(e) => handleUnderConstruction(e)}>Privacy Policy</Link></li>
                <li><Link to="/cookies" onClick={(e) => handleUnderConstruction(e)}>Cookies Policy</Link></li>
                <li><Link to="/#partners" onClick={() => handleLinkClick('partners')}>Partners</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
