import { Smartphone } from "lucide-react";
import { useTheme } from "../../context/theme-context";

const DeviceManagementSetting = ({ isDummyUser = false }) => {
  const { darkMode } = useTheme();
  return (
    <section
      className={`mt-6 rounded-2xl border transition-colors duration-300 ${
        darkMode
          ? "bg-[#111c2e] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
          : "bg-white border-slate-100 shadow-[0_4px_20px_rgba(36,68,120,0.05)]"
      }`}
    >
      <div
        className={`px-6 py-5 border-b flex items-center gap-3 ${
          darkMode ? "border-white/10" : "border-slate-100"
        }`}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            darkMode
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          <Smartphone />
        </div>

        <div>
          <h2
            className={`m-0 text-base font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Device Management
          </h2>
          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-[#8997b4]"
            }`}
          >
            Manage devices connected to your home.
          </p>
        </div>
      </div>

      <div className="p-6">
        <div
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl border p-5 ${
            darkMode
              ? "bg-[#0b1220] border-white/10"
              : "bg-[#f7fafc] border-slate-100"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <Smartphone size={23} />
            </div>

            <div>
              <h3
                className={`m-0 text-sm font-bold ${
                  darkMode ? "text-white" : "text-[#101936]"
                }`}
              >
                SmartHaven Environment Sensor
              </h3>
              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-[#8997b4]"
                }`}
              >
                {isDummyUser
                  ? "SH-ESP32-001 • Demo Device"
                  : "Firebase connected device"}
              </p>
            </div>
          </div>

          <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
            Online
          </span>
        </div>
      </div>
    </section>
  );
};

export default DeviceManagementSetting;