import {
  LayoutDashboard,
  Settings,
  LogOut,
  Grid2X2,
  Menu,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Rooms",
      path: "/rooms",
      icon: Grid2X2,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div className="fixed inset-0 bg-black/30 z-[950] hidden">
      </div>

      {/* SIDEBAR */}
      <aside className="fixed top-0 left-0 bottom-0 z-[1000] w-[285px] bg-white border-r border-slate-100 flex flex-col">

        {/* LOGO */}
        <div className="h-[82px] shrink-0 flex items-center px-6">

          <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
            <Grid2X2 size={23} />
          </div>

          <div className="ml-3">
            <h2 className="m-0 text-lg font-bold text-[#101936]">
              SmartHaven
            </h2>

            <p className="m-0 mt-0.5 text-[10px] text-[#8997b4]">
              Smart Home Monitoring
            </p>
          </div>

          {/* CLOSE SIDEBAR */}
          <button
            type="button"
            className="ml-auto w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 cursor-pointer"
          >
            <X size={20} />
          </button>

        </div>

        {/* MENU */}
        <nav className="flex-1 px-3 py-5">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  h-12
                  rounded-xl
                  mb-2
                  px-4
                  transition
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                  }
                  `
                }
              >
                <Icon size={21} />

                <span className="text-sm">
                  {item.name}
                </span>
              </NavLink>
            );
          })}

        </nav>

        {/* INFO CARD */}
        <div className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">

          <p className="m-0 text-xs font-bold text-blue-700">
            Smart Living
          </p>

          <p className="m-0 mt-2 text-[11px] leading-5 text-[#7180a0]">
            Monitor your home environment and keep your loved ones safe.
          </p>

        </div>

        {/* LOGOUT */}
        <div className="p-3 border-t border-slate-100">

          <button
            type="button"
            className="h-11 rounded-xl text-red-500 hover:bg-red-50 transition cursor-pointer flex items-center gap-3 w-full px-4"
          >
            <LogOut size={20} />

            <span className="text-sm font-semibold">
              Logout
            </span>
          </button>

        </div>

        

      </aside>
    </>
  );
};

export default Sidebar;