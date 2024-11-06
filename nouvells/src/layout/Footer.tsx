import { Link, NavLink } from "react-router-dom";

import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { navLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full section text-white lg:text-black">
      <div className="container mx-auto w-full lg:py-8 text-background bg-footer lg:text-text lg:bg-transparent rounded-3xl">
        <div className="flex flex-col justify-start items-start md:flex-row border-b-2 lg:justify-between lg:items-center mt-12 py-8 gap-8">
          <div className="hidden lg:block text-center md:text-left">logo</div>
          <div>
            <ul className="lg:flex flex-col md:flex-row text-center md:text-right gap-4 md:gap-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    className="block md:inline p-4 hover:text-blue-600 transition-colors w-full"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-center">
            <ul className="flex justify-center md:justify-end gap-2">
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <FaFacebook size={20} />
              </li>
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <FaXTwitter size={20} />
              </li>
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <FaInstagram size={20} />
              </li>
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <FaLinkedinIn size={20} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row border-t-2 justify-between items-center py-8 text-center md:text-left gap-4 text-white lg:text-black">
          <div>&copy; 2024 Nouvells. All rights reserved.</div>
          <div>
            <ul className="flex justify-center md:justify-end gap-4">
              <li><Link to={'/terms'}>Terms of Service</Link></li>
              <li><Link to={'/privacy'}>Privacy Policy</Link></li>
              <li><Link to={'/cookies'}>Cookies Policy</Link></li>
              <li><Link to={'/partners'}>Partners</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
