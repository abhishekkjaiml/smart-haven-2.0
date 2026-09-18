import { Save } from "lucide-react";
import { useTheme } from "../context/theme-context";
import ProfileSetting from "../components/settings/ProfileSetting";
import NotificationsSetting from "../components/settings/NotificationsSetting";
import UnitsDisplaySetting from "../components/settings/UnitsDisplaySetting";
import DeviceManagementSetting from "../components/settings/DeviceManagementSetting";
import DataPrivacySetting from "../components/settings/DataPrivacySetting";
import AboutSmartHavenSetting from "../components/settings/AboutSmartHavenSetting";
import SecuritySetting from "../components/settings/SecuritySetting";

const SettingsPage = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        darkMode ? "bg-[#0b1220]" : "bg-[#f5f8fc]"
      }
      `}
    >
      <div className="min-w-full ">
        <div  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h1
              className={`m-0 text-[30px] sm:text-[34px] font-bold tracking-[-1px] ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
            >
              Settings
            </h1>

            <p
              className={`m-0 mt-2 text-sm ${
              darkMode ? "text-slate-400" : "text-[#7180a0]"
            }`}
            >
              Manage your SmartHaven preferences.
            </p>
          </div>

          <div>
            <button
              type="button"
              // onClick={}
              className="h-[46px] px-5 rounded-xl bg-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition cursor-pointer"
            >

              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
              
              {/* Profile */}
        <div>
              <ProfileSetting />
        </div>

        {/* Notification Setting */}

        <div>
          <NotificationsSetting />
        </div>

        {/* Units & Display Setting */}

        <UnitsDisplaySetting  />

        {/* Device Management */}

        <DeviceManagementSetting />

        {/* Data & Privacy */}

        <DataPrivacySetting />

        {/* About SmartHaven */}

        <AboutSmartHavenSetting />

        {/* Security Setting */}

        <SecuritySetting />

        <div
          className={`mt-6 p-5 rounded-2xl border transition-colors duration-300 ${darkMode ? "bg-[#111c2e] border-white/10" : "bg-white border-slate-100"}`}
        >
          <div className="flex items-center justify-between gap-5">
            <div>
              <h2
                className={`m-0 text-sm font-bold ${darkMode ? "text-white" : "text-[#101936]"}`}
              >
                Appearance
              </h2>

              <p
                className={`m-0 mt-1 text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Switch between light and dark mode.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className={`relative shrink-0 w-12.5 h-6.5 border rounded-full  cursor-pointer transition-colors duration-300 ${darkMode ? "bg-blue-600 border-blue-600" : "bg-slate-200 border-slate-200"}`}
            >
              <span
                className={`absolute top-0.75 w-4.75 h-4.75 rounded-full bg-white shadow-md transition-all duration-300 ${darkMode ? "left-6.75" : "left-0.75"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
