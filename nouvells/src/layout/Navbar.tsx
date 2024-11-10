import { useState } from "react";
import { Menu } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NAVLINKS } from "@/constants";


const NavigationLinks = ({ className = '', toggleMenu }: { className?: string; toggleMenu?: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLabel, setActiveLabel] = useState("");

  const handleLinkClick = (href: string, label: string) => {

    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      setActiveLabel(label);
      navigate('/');

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        toggleMenu?.();
      }, 0);
    } else {
      setActiveLabel('');
      navigate(href);
      toggleMenu?.();
    }
  };

  const isActive = (href: string, label: string) => {
    if (href.startsWith('/#')) {
      return activeLabel === label;
    }
    return location.pathname === href;
  };


  return (
    <div className="w-full flex items-center flex-col md:flex-row justify-between gap-4">
      <ul className={`w-full flex flex-col md:flex-row text-right gap-4 lg:gap-8 navgroup ${className}`}>

        {NAVLINKS.map(({ href, label }, index) => (
          <li key={index}>
            <NavLink
              to={href}
              onClick={() => handleLinkClick(href, label)}
              className={cn(
                "block md:inline p-4 hover:text-blue-600 transition-colors",
                isActive(href, label) ? "text-blue-600 font-semibold" : ""
              )}
            >
              {label}
            </NavLink>
          </li>
        ))}

      </ul>
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
          <nav className="hidden md:block p-4">
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
