import { Monitor } from "lucide-react";
import { useTheme } from "../../context/theme-context";
import { dummySettings } from "../../db/dummyData";

import {
  SettingLanguages,
  TemperatureUnits,
  TimeFormats,
  GasUnits,
} from "./SettingPageData";

const UnitsDisplaySetting = () => {
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
              ? "bg-cyan-500/10 text-cyan-400"
              : "bg-cyan-50 text-cyan-600"
          }`}
        >
          <Monitor />
        </div>
        <div>
          <h2
            className={`m-0 text-base font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Units & Display
          </h2>
          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-[#8997b4]"
            }`}
          >
            Customize how sensor information is displayed.
          </p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            className={`block mb-2 text-xs font-semibold ${
              darkMode ? "text-slate-300" : "text-[#34415f]"
            }`}
          >
            Temperature Unit
          </label>

          <select
            className={`w-full h-12 px-4 rounded-xl border outline-none text-sm ${
              darkMode
                ? "bg-[#0b1220] border-white/10 text-white"
                : "bg-white border-slate-200 text-[#101936]"
            }`}
          >
            {TemperatureUnits.map((tempratute) => (
              <div key={tempratute.id}>
                <option>{tempratute.name}</option>
              </div>
            ))}
          </select>
        </div>
        <div>
          <label
            className={`block mb-2 text-xs font-semibold ${darkMode ? "text-slate-300" : "text-[#34415f]"}
          `}
          >
            Time Format
          </label>

          <select
            className={`w-full h-12 px-4 rounded-xl border outline-none text-sm ${
              darkMode
                ? "bg-[#0b1220] border-white/10 text-white"
                : "bg-white border-slate-200 text-[#101936]"
            }`}
          >
            {TimeFormats.map((timeformate) => (
              <div key={timeformate.id}>
                <option>{timeformate.name}</option>
              </div>
            ))}
          </select>
        </div>

        <div>
          <label
            className={`block mb-2 text-xs font-semibold ${darkMode ? "text-slate-300" : "text-[#34415f]"}`}
          >
            Language
          </label>

          <select
            className={`w-full h-12 px-4 rounded-xl border outline-none text-sm ${
              darkMode
                ? "bg-[#0b1220] border-white/10 text-white"
                : "bg-white border-slate-200 text-[#101936]"
            }`}
          >
            {SettingLanguages.map((language) => (
              <div key={language.id}>
                <option>{language.name}</option>
              </div>
            ))}
          </select>
        </div>

        <div>
          <label
            className={`block mb-2 text-xs font-semibold ${darkMode ? "text-slate-300" : "text-[#34415f]"}`}
          >
            Gas Unit
          </label>

          <input
            value={dummySettings.display.gasUnit}
            readOnly
            className={`w-full h-12 px-4 rounded-xl border outline-none text-sm ${
              darkMode
                ? "bg-[#0b1220] border-white/10 text-slate-500"
                : "bg-slate-50 border-slate-200 text-slate-500"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default UnitsDisplaySetting;
