import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NAVLINKS } from "@/constants";


const authButtons = [
  { href: '/login', label: 'Login', className: 'bg-secondary' },
  { href: '/signup', label: 'Sign up', className: 'text-secondary' }
];

const NavigationLinks = ({ className = '', toggleMenu }: { className?: string; toggleMenu?: () => void }) => {
  const navigation = useNavigate();

  return (
    <div className="w-full flex items-center flex-col md:flex-row justify-between gap-4">
      <ul className={`container w-full flex flex-col md:w-auto md:flex-row text-right gap-4 md:gap-8 navgroup ${className}`}>
        {NAVLINKS.map(({ href, label }) => (
          <li key={href}>
            <NavLink onClick={toggleMenu} to={href} className="block md:inline p-4 hover:text-blue-600 transition-colors">
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
            onClick={() => {
              navigation(href);
              toggleMenu?.();
            }}
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
    <header className=" w-full max-w-full">
      <div className="container">
        <div className="sub-container flex justify-between py-3 lg:py-6">
          <NavLink to={'/'}>
            <h2>Nouvels</h2>
            <p>Let every project thrive</p>
          </NavLink>

          <div className="absolute top-4 right-6 md:hidden">
            <Menu onClick={toggleMenu} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block absolute top-[100%] p-4 md:p-0 left-0 right-0 md:bg-transparent w-full md:bg-auto md:w-auto md:relative basis-[80%]">
            <NavigationLinks />
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="block md:hidden absolute top-[100%] p-4 md:p-0 left-0 right-0 bg-accent md:bg-transparent w-full md:bg-auto md:w-auto md:relative basis-[80%] z-50">
              <NavigationLinks toggleMenu={toggleMenu} />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
