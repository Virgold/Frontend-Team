import { Button } from "@/components/ui/button";
import personImage from '@/assets/homepage/happyGirl.svg'
import bgPattern from '@/assets/homepage/job-pattern-bg.svg'
import { Link, NavLink } from "react-router-dom";

import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { navLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container mx-auto w-full !pr-0 !pl-0 py-8">
        <div className="flex border-b-2 justify-between items-center mt-12 py-8">
          <div>logo</div>
          <div>
            <ul className={`w-full flex flex-col md:w-auto md:flex-row text-right gap-4 md:gap-8 navgrou`}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink to={href} className="block md:inline p-4 hover:text-blue-600 transition-colors">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* TODO: add real links */}
            <ul className="flex gap-2">
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"><FaFacebook size={20} /></li>
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"><FaXTwitter size={20} /></li>
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"><FaInstagram size={20} /></li>
              <li className="bg-[#2D5489] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"><FaLinkedinIn size={20} /></li>
            </ul>
          </div>
        </div>
        <div className="flex border-t-2 justify-between py-8 text-[#575757]">
          <div>&copy; 2024 Nouvells. All rights reserved.</div>
          <div>
            <ul className="flex gap-4">
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
