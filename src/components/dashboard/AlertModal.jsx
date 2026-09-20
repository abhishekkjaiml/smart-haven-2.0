import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

import { useTheme } from "../../context/theme-context";

const AlertModal = ({ alertData, setAlertData }) => {
  const { darkMode } = useTheme();

  if (!alertData) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
      onClick={() => setAlertData(null)}
    >
      <div
        className={`relative w-full max-w-110 overflow-hidden rounded-[28px] border shadow-[0_30px_100px_rgba(15,23,42,0.35)] ${
          darkMode ? "bg-[#111c2e] border-white/10" : "bg-white border-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================================================
            TOP COLOR
        ========================================================= */}

        <div
          className={`h-1.5 w-full ${
            alertData.type === "success"
              ? "bg-linear-to-r from-emerald-400 to-green-500"
              : alertData.type === "error"
                ? "bg-linear-to-r from-rose-400 to-red-500"
                : "bg-linear-to-r from-blue-400 to-cyan-500"
          }`}
        />

        <div className="p-6 sm:p-7">
          {/* =======================================================
              HEADER
          ======================================================= */}

          <div className="flex items-start justify-between gap-4">
            <div
              className={`relative w-16 h-16 rounded-[20px] flex items-center justify-center shrink-0 ${
                alertData.type === "success"
                  ? darkMode
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-emerald-50 text-emerald-600"
                  : alertData.type === "error"
                    ? darkMode
                      ? "bg-rose-500/10 text-rose-400"
                      : "bg-rose-50 text-rose-600"
                    : darkMode
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-blue-50 text-blue-600"
              }`}
            >
              <div
                className={`absolute inset-2 rounded-[14px] border ${
                  alertData.type === "success"
                    ? darkMode
                      ? "border-emerald-500/10"
                      : "border-emerald-100"
                    : alertData.type === "error"
                      ? darkMode
                        ? "border-rose-500/10"
                        : "border-rose-100"
                      : darkMode
                        ? "border-blue-500/10"
                        : "border-blue-100"
                }`}
              />

              {alertData.type === "success" ? (
                <CheckCircle2 size={31} strokeWidth={2.2} />
              ) : alertData.type === "error" ? (
                <AlertCircle size={31} strokeWidth={2.2} />
              ) : (
                <Info size={31} strokeWidth={2.2} />
              )}
            </div>

            {/* Close */}

            <button
              type="button"
              onClick={() => setAlertData(null)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition cursor-pointer ${
                darkMode
                  ? "text-slate-500 bg-white/5 hover:text-slate-200 hover:bg-white/10"
                  : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              }`}
            >
              <X size={18} />
            </button>
          </div>

          {/* =======================================================
              TITLE
          ======================================================= */}

          <h2
            className={`mt-5 text-[21px] font-bold tracking-[-0.3px] ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            {alertData.title}
          </h2>

          {/* =======================================================
              MESSAGE
          ======================================================= */}

          <p
            className={`mt-2 text-sm leading-6 ${
              darkMode ? "text-slate-400" : "text-[#7180a0]"
            }`}
          >
            {alertData.message}
          </p>

          {/* =======================================================
              DEVICE ID
          ======================================================= */}

          {alertData.deviceId && (
            <div
              className={`mt-5 rounded-[18px] border px-4 py-3.5 ${
                alertData.type === "success"
                  ? darkMode
                    ? "border-emerald-500/10 bg-emerald-500/5"
                    : "border-emerald-100 bg-emerald-50/70"
                  : alertData.type === "error"
                    ? darkMode
                      ? "border-rose-500/10 bg-rose-500/5"
                      : "border-rose-100 bg-rose-50/70"
                    : darkMode
                      ? "border-blue-500/10 bg-blue-500/5"
                      : "border-blue-100 bg-linear-to-br from-blue-50 to-cyan-50/60"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p
                  className={`m-0 text-[10px] font-bold uppercase tracking-widest ${
                    alertData.type === "success"
                      ? darkMode
                        ? "text-emerald-400"
                        : "text-emerald-600"
                      : alertData.type === "error"
                        ? darkMode
                          ? "text-rose-400"
                          : "text-rose-600"
                        : darkMode
                          ? "text-blue-400"
                          : "text-blue-500"
                  }`}
                >
                  Device ID
                </p>

                <span
                  className={`w-2 h-2 rounded-full ${
                    alertData.type === "error"
                      ? "bg-rose-500"
                      : "bg-emerald-500"
                  }`}
                />
              </div>

              <p
                className={`m-0 mt-1.5 text-sm font-bold break-all ${
                  alertData.type === "success"
                    ? darkMode
                      ? "text-emerald-400"
                      : "text-emerald-700"
                    : alertData.type === "error"
                      ? darkMode
                        ? "text-rose-400"
                        : "text-rose-700"
                      : darkMode
                        ? "text-blue-400"
                        : "text-[#1d3f8f]"
                }`}
              >
                {alertData.deviceId}
              </p>
            </div>
          )}

          {/* =======================================================
              ACTION BUTTON
          ======================================================= */}

          <button
            type="button"
            onClick={() => setAlertData(null)}
            className={`w-full h-12.5 mt-6 rounded-[14px] text-sm font-semibold text-white flex items-center justify-center cursor-pointer transition-all active:scale-[0.98] shadow-sm ${
              alertData.type === "success"
                ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-500/20"
                : alertData.type === "error"
                  ? "bg-rose-500 hover:bg-rose-600 hover:shadow-rose-500/20"
                  : "bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500/20"
            }`}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
