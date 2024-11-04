import { Button } from "@/components/ui/button";
import personImage from '@/assets/homepage/happyGirl.svg'
import bgPattern from '@/assets/homepage/job-pattern-bg.svg'
import { navLinks } from "./Navbar";
import { Link, NavLink } from "react-router-dom";

import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="relative flex items-center justify-center rounded-lg px-8 overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', opacity: 0.2
          }} ></div>
        <div className="relative z-10 flex items-center justify-between container bg-[#325E95] !pr-0 rounded-3xl">
          <div className="text-white space-y-4 max-w p-4">
            <h4 className="text-3xl md:text-4xl font-semibold">
              Find Your Dream Jobs In No Time.
            </h4>
            <p className="text-base md:text-lg md:w-2/3">
              Explore Opportunities, Build Connections, and Advance Your Career with Nouvelles. Sign up or Create an account now to get started.
            </p>
            <Button className="mt-4 px-6 py-2 bg-transparent border border-white text-white rounded-3xl hover:bg-white hover:text-blue-500 transition-colors">Get Started
              <svg
                className="ml-2 w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>

          <div className="hidden md:block">
            <img src={personImage} alt="Happy person" className="rounded-lg w-full min-w-64" />
          </div>
        </div>
      </section>

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
          <div className="flex border-t-2 justify-between py-8">
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
    </>
  )
}

export default Footer
