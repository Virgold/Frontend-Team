import { useState } from "react";
import { Menu } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NAVLINKS } from "@/constants";
import SearchDialog from "@/components/SearchDialog";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Logo from "@/assets/logo";


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
      return activeLabel === label || activeLabel === 'waitlist';
    }
    return location.pathname === href && !activeLabel;
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
        <div className="sub-container flex items-center justify-between">
          <NavLink to={'/'}>
            <Logo className="w-32 lg:w-44 h-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:block p-4">
            <NavigationLinks />
          </nav>

          <div className="flex flex-aut lg:flex-grow-0 gap-3 navgroup">
            <SearchDialog />
            {process.env.NODE_ENV === 'development' && <ModeToggle />}
            <Button className="md:hidden" variant="outline" onClick={toggleMenu}><Menu /></Button>
          </div>

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
