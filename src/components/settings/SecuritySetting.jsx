import { ShieldCheck } from "lucide-react";
import { useTheme } from "../../context/theme-context";

const SecuritySetting = () => {
  const { darkMode } = useTheme();
  return (
    <section
      className={`mt-6 mb-7 rounded-2xl border p-6 transition-colors duration-300 ${
        darkMode
          ? "bg-blue-500/5 border-blue-500/10"
          : "bg-linear-to-r from-[#eff6ff] to-[#f5f9ff] border-blue-50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${
            darkMode
              ? "bg-blue-500/10 text-blue-400"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          <ShieldCheck size={22} />
        </div>

        <div>
          <h3
            className={`m-0 text-sm font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Your account is protected
          </h3>
          <p
            className={`m-0 mt-1 text-xs leading-5 ${
              darkMode ? "text-slate-400" : "text-[#7180a0]"
            }`}
          >
            SmartHaven keeps your account and smart-home information protected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySetting;
