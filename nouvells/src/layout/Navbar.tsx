import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";


const authButtons = [
  { href: '/login', label: 'Login', className: 'bg-secondary' },
  { href: '/signup', label: 'Sign up', className: 'text-secondary' }
];

const NavigationLinks = ({ className = '' }) => {
  const navigation = useNavigate();

  return (
    <div className="w-full flex items-center flex-col md:flex-row justify-between gap-4">
      <ul className={`container w-full flex flex-col md:w-auto md:flex-row text-right gap-4 md:gap-8 navgroup ${className}`}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <NavLink to={href} className="block md:inline p-4 hover:text-blue-600 transition-colors">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 navgroup">
        {authButtons.map(({ href, label, className }) => (
          <Button
            key={href}
            className={cn(`text-sm lg:text-lg font-medium px-8 py-4 rounded-full`, className || '')}
            onClick={() => navigation(href)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="container w-full max-w-full">
      <div className="w-full min-w-full max-w-full flex justify-between py-3 lg:py-6">
        <div>
          <div>Nouvels</div>
          <p>Let every project thrive</p>
        </div>

        <div className="absolute top-4 right-6 md:hidden">
          <Menu onClick={toggleMenu} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block absolute top-[100%] p-4 md:p-0 left-0 right-0 bg-slate-50 md:bg-transparent w-full md:bg-auto md:w-auto md:relative basis-[80%]">
          <NavigationLinks />
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="block md:hidden absolute top-[100%] p-4 md:p-0 left-0 right-0 bg-slate-50 md:bg-transparent w-full md:bg-auto md:w-auto md:relative basis-[80%] z-50">
            <NavigationLinks />
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
