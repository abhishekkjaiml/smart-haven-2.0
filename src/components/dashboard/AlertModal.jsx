import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

const AlertModal = ({ alertData, setAlertData }) => {
  if (!alertData) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md"
      onClick={() => setAlertData(null)}
    >
      <div
        className="relative w-full max-w-110 overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.30)] border border-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top color */}

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
          <div className="flex items-start justify-between gap-4">
            <div
              className={`relative w-16 h-16 rounded-[20px] flex items-center justify-center shrink-0 ${
                alertData.type === "success"
                  ? "bg-emerald-50 text-emerald-600"
                  : alertData.type === "error"
                    ? "bg-rose-50 text-rose-600"
                    : "bg-blue-50 text-blue-600"
              }`}
            >
              <div
                className={`absolute inset-2 rounded-[14px] border ${
                  alertData.type === "success"
                    ? "border-emerald-100"
                    : alertData.type === "error"
                      ? "border-rose-100"
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

            <button
              type="button"
              onClick={() => setAlertData(null)}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <h2 className="mt-5 text-[21px] font-bold text-[#101936] tracking-[-0.3px]">
            {alertData.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#7180a0]">
            {alertData.message}
          </p>

          {alertData.deviceId && (
            <div className="mt-5 rounded-[18px] border border-blue-100 bg-linear-to-br from-blue-50 to-cyan-50/60 px-4 py-3.5">
              <div className="flex items-center justify-between gap-3">
                <p className="m-0 text-[10px] font-bold uppercase tracking-widest text-blue-500">
                  Device ID
                </p>

                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <p className="m-0 mt-1.5 text-sm font-bold text-[#1d3f8f] break-all">
                {alertData.deviceId}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setAlertData(null)}
            className={`w-full h-12.5 mt-6 rounded-[14px] text-sm font-semibold text-white flex items-center justify-center cursor-pointer transition-all active:scale-[0.98] shadow-sm ${
              alertData.type === "success"
                ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-200"
                : alertData.type === "error"
                  ? "bg-rose-500 hover:bg-rose-600 hover:shadow-rose-200"
                  : "bg-blue-500 hover:bg-blue-600 hover:shadow-blue-200"
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
