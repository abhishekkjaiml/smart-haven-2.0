import { CheckCircle2, Leaf } from "lucide-react";

const HealthMessage = ({ darkMode }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-7 pb-8">
      <div
        className={`relative overflow-hidden min-h-28.75 rounded-3xl border px-5 sm:px-7 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 ${
          darkMode
            ? "bg-emerald-500/5 border-emerald-500/10"
            : "bg-linear-to-r from-[#effaf5] via-[#f4fbf8] to-[#edf9f5] border-emerald-50"
        }`}
      >
        <div className="absolute -right-20 -bottom-20 w-52 h-52 rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative flex items-center gap-4">
          <div className="relative w-14 h-14 shrink-0 rounded-[18px] bg-emerald-100 text-emerald-500 flex items-center justify-center">
            <Leaf size={28} />

            <span className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-sm">
              <CheckCircle2 size={12} className="text-emerald-500" />
            </span>
          </div>

          <div>
            <h3
              className={`m-0 text-sm sm:text-base font-bold ${
                darkMode ? "text-emerald-300" : "text-[#16463e]"
              }`}
            >
              A cleaner home leads to a healthier and happier life.
            </h3>

            <p
              className={`m-0 mt-1.5 text-xs sm:text-sm ${
                darkMode ? "text-emerald-400/60" : "text-[#66847f]"
              }`}
            >
              Keep monitoring. Keep your loved ones safe.
            </p>
          </div>
        </div>

        <div
          className={`relative flex items-center gap-2 text-xs sm:text-sm font-medium ${
            darkMode ? "text-emerald-400" : "text-[#4c8177]"
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-100/70 flex items-center justify-center">
            <Leaf size={17} className="text-emerald-500" />
          </div>

          <span>Live Smart</span>

          <span className="text-emerald-300">•</span>

          <span>Breathe Better</span>
        </div>
      </div>
    </section>
  );
};

export default HealthMessage;
