import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/tocode-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Publications", path: "/publications" },
  { name: "Team", path: "/team" },
  { name: "Software", path: "/software" },
  { name: "Courses", path: "/courses" },
  { name: "News", path: "/research" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Flex Container */}
        <div className="flex items-center h-20">
          
          {/* 1. LEFT SIDE (ToCoDE Logo) - flex-1 pushes neighbors */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="ToCoDE Lab"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  T0CoDE Lab
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  IIT Hyderabad
                </span>
              </div>
            </Link>
          </div>

          {/* 2. CENTER (Navigation) - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 3. RIGHT SIDE (IITH Logo + Mobile Toggle) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            
            {/* IITH Logo - Referenced from public folder */}
            <a href="https://www.iith.ac.in" target="_blank" rel="noreferrer">
                <img 
                    src="/Images/IITH.png" 
                    alt="IIT Hyderabad Logo" 
                    className="h-12 w-auto object-contain hover:opacity-80 transition-opacity" 
                />
            </a>

            {/* Mobile Menu Button (Visible only on mobile) */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};