import { Save } from "lucide-react";
import { useTheme } from "../context/theme-context";
import ProfileSetting from "../components/settings/ProfileSetting";
import NotificationsSetting from "../components/settings/NotificationsSetting";
import UnitsDisplaySetting from "../components/settings/UnitsDisplaySetting";
import DeviceManagementSetting from "../components/settings/DeviceManagementSetting";
import DataPrivacySetting from "../components/settings/DataPrivacySetting";
import AboutSmartHavenSetting from "../components/settings/AboutSmartHavenSetting";
import SecuritySetting from "../components/settings/SecuritySetting";
import CustomizationSetting from "../components/settings/CustomizationSetting";

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

        {/* Customization Setting */}

        <CustomizationSetting />

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

        
      </div>
    </div>
  );
};

export default SettingsPage;
