import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleReisze = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleReisze();

    window.addEventListener("resize", handleReisze);

    return () => {
      window.removeEventListener("resize", handleReisze);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Sidebar isOpen={isOpen} onToggle={handleToggle} isMobile={isMobile} />

      <main
        className={`min-h-screen transition-all duration-300 ${isMobile ? "ml-0" : isOpen ? "ml-71.25" : "ml-20.5"}`}
      >
        <Outlet context={{ onMenuClick: openSidebar }} />
      </main>
    </div>
  );
};

export default SidebarLayout;
