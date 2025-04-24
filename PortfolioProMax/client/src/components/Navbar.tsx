import { useState, useEffect } from "react";
import { Link } from "wouter";

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    // Add click event only when mobile menu is open
    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from immediately closing the menu
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navbarClass = `fixed w-full text-white shadow-md z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen ? "bg-primary shadow-lg" : "bg-primary bg-opacity-90"
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-semibold text-secondary">
            Rahul Singh
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-secondary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-secondary transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-secondary transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-secondary transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden pb-4 ${mobileMenuOpen ? "block" : "hidden"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="#about"
            className="block py-2 hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block py-2 hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="block py-2 hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#education"
            className="block py-2 hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
