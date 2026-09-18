import { Sun, Moon, ChevronDown, CalendarDays, Menu } from "lucide-react";
import { useTheme } from "../../context/theme-context";
import useDashboard from "../../hooks/useDashboard";
import { dummySettings } from "../../db/dummyData";
import { useState } from "react";
import { UseSetting } from "../../hooks/UseSetting";
import { img } from "framer-motion/client";

const DashboardHeader = () => {

  const { darkMode,
  setDarkMode,
  isDemo,
  userName,
  userInitial,
  onMenuClick, } = useDashboard()

  const {profilePhoto} = UseSetting()

  const [profile, setProfile] = useState(dummySettings.profile)

  const onUiModeBtnClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header
      className={`top-0 z-40 border-b backdrop-blur-xl ${
        darkMode
          ? "bg-[#0b1220]/90 border-white/5"
          : "bg-white/85 border-slate-200/70"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          {/* Welcome */}

          <div>
            {/* Mobile Sidebar */}

            <button
              type="button"
              onClick={onMenuClick}
              className={`md:hidden mb-4 w-10 h-10 rounded-xl border flex items-center justify-center transition cursor-pointer ${
                darkMode
                  ? "bg-[#111c2e] border-white/10 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                  : "bg-white border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Menu size={21} />
            </button>

            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isDemo ? "bg-blue-500" : "bg-emerald-500"
                }`}
              />

              <span
                className={`text-[10px] uppercase tracking-[1.5px] font-bold ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {isDemo ? "Demo Environment" : "Smart Environment"}
              </span>
            </div>

            <h1
              className={`m-0 text-[29px] sm:text-[34px] lg:text-[36px] leading-tight font-bold tracking-[-1.2px] ${
                darkMode ? "text-white" : "text-[#101936]"
              }`}
            >
              Welcome Back!
            </h1>

            <p
              className={`m-0 mt-1.5 text-sm sm:text-base ${
                darkMode ? "text-slate-400" : "text-[#6d7c9c]"
              }`}
            >
              Monitor your home environment in real-time
            </p>
          </div>

          {/* Right Header */}

          <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-5">
            {/* Theme */}

            <div
              className={`flex items-center gap-2 rounded-full px-2.5 py-1.5 border ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <Sun
                size={17}
                className={darkMode ? "text-slate-500" : "text-amber-500"}
              />

              <button
                type="button"
                onClick={onUiModeBtnClick}
                className={`relative w-12.5 h-6.75 rounded-full border cursor-pointer transition-colors duration-300 ${
                  darkMode
                    ? "bg-blue-600 border-blue-600"
                    : "bg-slate-200 border-slate-200"
                }`}
              >
                <span
                  className={`absolute top-0.75 w-4.75 h-4.75 rounded-full bg-white shadow-md transition-all duration-300 ${
                    darkMode ? "left-6.75" : "left-0.75"
                  }`}
                />
              </button>

              <Moon
                size={17}
                className={darkMode ? "text-blue-400" : "text-slate-400"}
              />
            </div>

            <div
              className={`hidden sm:block w-px h-11 ${
                darkMode ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            {/* User */}

            <div className="flex items-center gap-3">
              <div
                className={`relative w-11 h-11 rounded-2xl flex items-center justify-center text-white text-base font-bold shadow-lg ${
                  isDemo
                    ? "bg-linear-to-br from-blue-500 to-cyan-500 shadow-blue-200"
                    : "bg-linear-to-br from-[#3949c9] to-[#2c3bb7] shadow-indigo-200"
                }`}
              >
                {
                  !isDemo && (
                    profilePhoto ? (
                      <img 
                        src={profilePhoto}
                        alt="profile"
                        className="w-full h-full rounded-full object-cover p-0.5"
                      />
                  ): <div>
                    {userName.charAt(0)}
                  </div>
                )
                }
                {
                  isDemo && (
                    profile.profileImg ? (
                      <img  src={profile.profileImg}  className="w-full h-full rounded-2xl object-cover p-0.5 bg-gray-500/70" />
                    ) : <div>
                      {profile.firstName.charAt(0)}
                    </div>
                  )
                }

                <span
                  className={`absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full border-2 ${
                    darkMode ? "border-[#0b1220]" : "border-white"
                  } bg-emerald-500`}
                />
              </div>

              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <p
                    className={`m-0 text-sm font-bold ${
                      darkMode ? "text-white" : "text-[#101936]"
                    }`}
                  >
                    {
                      isDemo ? profile.displayName : userName
                    }
                  </p>

                  <ChevronDown
                    size={15}
                    className={darkMode ? "text-slate-500" : "text-slate-400"}
                  />
                </div>

                <p
                  className={`m-0 mt-0.5 text-[11px] ${
                    darkMode ? "text-slate-500" : "text-[#7484a5]"
                  }`}
                >
                  Stay Safe, Stay Healthy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Date */}

        <div className="flex justify-end mt-4">
          <div
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border ${
              darkMode
                ? "bg-slate-900/50 border-white/10 text-slate-400"
                : "bg-slate-50/80 border-slate-200/70 text-[#7484a5]"
            }`}
          >
            <CalendarDays size={17} />

            <div>
              <p className="m-0 text-[11px] sm:text-xs font-medium">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>

              <p className="m-0 mt-0.5 text-[11px] sm:text-xs">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
