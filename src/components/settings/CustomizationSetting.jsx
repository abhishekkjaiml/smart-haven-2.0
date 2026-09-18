import { Palette } from "lucide-react";
import { useTheme } from "../../context/theme-context";

const CustomizationSetting = () => {
  const { darkMode, toggleTheme } = useTheme();
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
              ? "bg-violet-500/10 text-violet-400"
              : "bg-violet-50 text-violet-600"
          }`}
        >
          <Palette size={20} />
        </div>

        <div>
          <h2
            className={`m-0 text-base font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Customization
          </h2>
          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-[#8997b4]"
            }`}
          >
            Personalize your SmartHaven interface and dashboard experience.
          </p>
        </div>
      </div>

      <div
        className={`flex items-center justify-between gap-5 py-4 border-b last:border-none  ${
          darkMode ? "border-white/5" : "border-slate-50"
        }`}
      >
        <div className="p-6 space-y-1">
          <p
            className={`m-0 text-sm font-semibold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Appearance
          </p>

          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-[#8997b4]"
            }`}
          >
            Switch between light and dark mode.
          </p>
        </div>

        <div className="p-6 space-y-1">
          <button
            type="button"
            onClick={toggleTheme}
            className={`relative shrink-0 w-12.5 h-6.5 border rounded-full  cursor-pointer transition-colors duration-300  ${darkMode ? "bg-blue-600 border-blue-600" : "bg-slate-200 border-slate-200"}`}
          >
            <span
              className={`absolute top-0.75 w-4.75 h-4.75 rounded-full bg-white shadow-md transition-all duration-300 ${darkMode ? "left-6.75" : "left-0.75"}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSetting;
