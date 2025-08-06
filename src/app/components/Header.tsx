"use client";

import Link from "next/link";
import { Bell, User, Loader, Users, Home, Search, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  const pathName = usePathname();

  const isCreatorsPage = pathName === "/creators";

  const router = useRouter();

  const goToHomeSection = (sectionId : string) => {
    router.push(`/?scrollTo=${sectionId}`);
  }

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
    <header className="bg-gray-400 p-10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <button onClick={() => goToHomeSection('landing-section')} className="text-3xl font-semibold">
            Creed Link
          </button>

          {/* Navigation Links */}
          <nav className="flex rounded-4xl p-5 space-x-8 border shadow-2xl overflow-hidden">
            <button onClick={() => goToHomeSection('home-section')} className="flex items-center space-x-2 hover:underline">
              <Home />
              <span>Home</span>
            </button>
            <Link href='/creators' className="flex items-center space-x-2 hover:underline">
              <Users />
              <span>Creators</span>
            </Link>
            <AnimatePresence>
              {isCreatorsPage && (
              <motion.div
                key={'search'}
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
              >
                <Link href='/search' className="flex items-center space-x-2 hover:underline">
                  <Search />
                  <span>Search</span>
                </Link>

              </motion.div>
              )}
            </AnimatePresence>
            <Link href='/templates' className="flex items-center space-x-2 hover:underline">
              <Menu />
              <span>Templates</span>
            </Link>
          </nav>

          {/* Notification with Date */}
          <div className="flex items-center border rounded-4xl p-4 space-x-2">
            <Bell />
            <div className="min-w-[80px] text-center text-sm">
              {currentDate ? currentDate : <Loader className="animate-spin" />}
            </div>
          </div>

          {/* User Icon */}
          <div className="border rounded-full p-2">
            <User />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
