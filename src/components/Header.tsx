"use client";
import Link from "next/link";
import { Bell, User, Loader, Users, Home, Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const isCreatorsPage = pathName === "/creators";
  const router = useRouter();

  const goToHomeSection = (sectionId: string) => {
    router.push(`/?scrollTo=${sectionId}`);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        day: "2-digit",
        month: "short",
      };
      setCurrentDate(now.toLocaleDateString("en-IN", options));
    };
    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-400 p-4 sm:p-6 lg:p-10 transition-all">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => goToHomeSection('landing-section')} 
            className="text-xl sm:text-2xl lg:text-3xl font-semibold whitespace-nowrap"
          >
            Creed Link
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex rounded-4xl p-3 xl:p-5 space-x-4 xl:space-x-8 border shadow-2xl overflow-hidden">
            <button 
              onClick={() => goToHomeSection('home-section')} 
              className="flex items-center space-x-2 hover:underline transition-all"
            >
              <Home size={20} />
              <span className="hidden xl:inline">Home</span>
            </button>
            <Link href='/creators' className="flex items-center space-x-2 hover:underline transition-all">
              <Users size={20} />
              <span className="hidden xl:inline">Creators</span>
            </Link>
            <AnimatePresence>
              {isCreatorsPage && (
                <motion.div
                  key={'search'}
                  initial={{ opacity: 0, scale: 0.8, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -10 }}
                >
                  <Link href='/search' className="flex items-center space-x-2 hover:underline transition-all">
                    <Search size={20} />
                    <span className="hidden xl:inline">Search</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            <Link href='/templates' className="flex items-center space-x-2 hover:underline transition-all">
              <Menu size={20} />
              <span className="hidden xl:inline">Templates</span>
            </Link>
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notification with Date - Hidden on small screens */}
            <div className="hidden sm:flex items-center border rounded-4xl p-2 sm:p-3 lg:p-4 space-x-2">
              <Bell size={20} />
              <div className="min-w-[60px] sm:min-w-[80px] text-center text-xs sm:text-sm">
                {currentDate ? currentDate : <Loader className="animate-spin" size={16} />}
              </div>
            </div>

            {/* User Icon */}
            <div className="border rounded-full p-2">
              <User size={20} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden border rounded-full p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-2">
                <button 
                  onClick={() => goToHomeSection('home-section')} 
                  className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <Home size={20} />
                  <span>Home</span>
                </button>
                <Link 
                  href='/creators' 
                  className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users size={20} />
                  <span>Creators</span>
                </Link>
                {isCreatorsPage && (
                  <Link 
                    href='/search' 
                    className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Search size={20} />
                    <span>Search</span>
                  </Link>
                )}
                <Link 
                  href='/templates' 
                  className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Menu size={20} />
                  <span>Templates</span>
                </Link>
                
                {/* Mobile Date Display */}
                <div className="flex items-center justify-center space-x-2 px-4 py-3 border-t">
                  <Bell size={20} />
                  <div className="text-sm">
                    {currentDate ? currentDate : <Loader className="animate-spin" size={16} />}
                  </div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;