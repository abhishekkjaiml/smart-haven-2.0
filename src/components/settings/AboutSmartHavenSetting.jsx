import { Info } from "lucide-react";
import { useTheme } from "../../context/theme-context";

const AboutSmartHavenSetting = ({ isDummyUser = false }) => {
  const { darkMode } = useTheme();
  return (
    <section
      className={`mt-6 rounded-2xl border p-6 transition-colors duration-300 ${
        darkMode
          ? "bg-[#111c2e] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
          : "bg-white border-slate-100 shadow-[0_4px_20px_rgba(36,68,120,0.05)]"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
            darkMode
              ? "bg-white/5 text-slate-400"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <Info size={21} />
        </div>

        <div>
          <h2
            className={`m-0 text-base font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            About SmartHaven
          </h2>
          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-[#8997b4]"
            }`}
          >
            Smart Home Monitoring Platform
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`rounded-xl p-4 ${
            darkMode ? "bg-[#0b1220]" : "bg-slate-50"
          }`}
        >
          <p className="m-0 text-xs text-slate-400">Version</p>

          <p
            className={`m-0 mt-1 text-sm font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            1.0.0
          </p>
        </div>

        <div
          className={`rounded-xl p-4 ${
            darkMode ? "bg-[#0b1220]" : "bg-slate-50"
          }`}
        >
          <p className="m-0 text-xs text-slate-400">Account</p>

          <p
            className={`m-0 mt-1 text-sm font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            {isDummyUser ? "Demo" : "Firebase"}
          </p>
        </div>

        <div
          className={`rounded-xl p-4 ${
            darkMode ? "bg-[#0b1220]" : "bg-slate-50"
          }`}
        >
          <p className="m-0 text-xs text-slate-400">Status</p>

          <p className="m-0 mt-1 text-sm font-bold text-emerald-500">Active</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSmartHavenSetting;
