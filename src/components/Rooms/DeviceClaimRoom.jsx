import {
  Link2,
  RefreshCw,
  ShieldCheck,
  X,
  AlertCircle,
  CheckCircle2,
  Info,
} from "lucide-react";

import SearchRooms from "./SearchRooms";
import { useDevice } from "../../context/device-context";
import AllRooms from "./AllRooms";

const DeviceClaimRoom = () => {
  const {
    deviceId,
    deviceClaimed,
    loading,
    alertData,
    setDeviceId,
    setAlertData,
    handleClaimDevice,
    DUMMY_DEVICE_ID,
    isDummyUser,
    resetDevice,
  } = useDevice();

  // Check Claimed Device

  return (
    <section className="my-6">
      {!deviceClaimed ? (
        <div className="w-full rounded-3xl border border-blue-100 bg-linear-to-br from-white via-blue-50/60 to-slate-50 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
              <Link2 size={30} />
            </div>
            <h2 className="mt-5 mb-0 text-2xl font-bold text-slate-800">
              Connect Your Device
            </h2>

            <p className="mt-2 mb-0 text-sm leading-6 text-slate-500 max-w-xl mx-auto">
              Claim your SmartHaven environment monitoring device to unlock your
              rooms and view live sensor data.
            </p>

            <div className="mt-7 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Link2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    // onKeyDown={}
                    placeholder="Enter Device ID"
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleClaimDevice}
                  disabled={loading}
                  className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-semibold flex items-center justify-center transition cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex gap-2 items-center">
                      <RefreshCw size={17} className="animate-spin" />
                      Connecting...
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <Link2 />
                      Claim Device
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Demo User */}

            <div>
              {isDummyUser && (
                <div className="mt-6 rounded-2xl bg-white border border-blue-100 px-5 py-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <ShieldCheck size={18} />
                    </div>

                    <div>
                      <p className="m-0 text-xs font-bold text-slate-700">
                        Demo Device
                      </p>
                      <p className="m-0 mt-1 text-xs text-slate-500">
                        Device ID:
                        <span>{DUMMY_DEVICE_ID}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <section>
          <div>
            {/* Search Rooms */}

            {/* <SearchRooms /> */}
          </div>

          <div>
            <AllRooms />
          </div>
        </section>
      )}

      {alertData && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setAlertData(null)}
          />

          {/* Modal */}
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="smarthaven-alert-title"
            aria-describedby="smarthaven-alert-message"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[430px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.25)] animate-[scaleIn_0.2s_ease-out]"
          >
            {/* Top Accent */}
            <div
              className={`h-1.5 w-full ${
                alertData.type === "success"
                  ? "bg-emerald-500"
                  : alertData.type === "error"
                    ? "bg-rose-500"
                    : "bg-blue-500"
              }`}
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setAlertData(null)}
              className="absolute right-5 top-5 w-9 h-9 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-slate-200 hover:text-slate-700 transition-all duration-200 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-7">
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-[20px] flex items-center justify-center mb-5 ${
                  alertData.type === "success"
                    ? "bg-emerald-50 text-emerald-500"
                    : alertData.type === "error"
                      ? "bg-rose-50 text-rose-500"
                      : "bg-blue-50 text-blue-500"
                }`}
              >
                {alertData.type === "success" && (
                  <CheckCircle2 size={31} strokeWidth={2.2} />
                )}

                {alertData.type === "error" && (
                  <AlertCircle size={31} strokeWidth={2.2} />
                )}

                {alertData.type === "info" && (
                  <Info size={31} strokeWidth={2.2} />
                )}
              </div>

              {/* Title */}
              <h2
                id="smarthaven-alert-title"
                className="m-0 pr-10 text-[22px] font-bold tracking-tight text-slate-800"
              >
                {alertData.title}
              </h2>

              {/* Message */}
              <p
                id="smarthaven-alert-message"
                className="m-0 mt-2.5 text-sm leading-6 text-slate-500"
              >
                {alertData.message}
              </p>

              {/* Device ID */}
              {alertData.deviceId && (
                <div
                  className={`mt-5 rounded-2xl border px-4 py-3.5 ${
                    alertData.type === "success"
                      ? "border-emerald-100 bg-emerald-50/70"
                      : "border-rose-100 bg-rose-50/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm ${
                        alertData.type === "success"
                          ? "text-emerald-500"
                          : "text-rose-500"
                      }`}
                    >
                      <Link2 size={18} />
                    </div>

                    <div className="min-w-0">
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.8px] text-slate-400">
                        Device ID
                      </p>

                      <p
                        className={`m-0 mt-1 text-sm font-bold truncate ${
                          alertData.type === "success"
                            ? "text-emerald-700"
                            : "text-rose-700"
                        }`}
                      >
                        {alertData.deviceId}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Invalid Device Hint */}
              {alertData.type === "error" && alertData.deviceId && (
                <p className="m-0 mt-3 text-xs leading-5 text-slate-400">
                  Please use the demo device ID shown above.
                </p>
              )}

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setAlertData(null)}
                className={`w-full h-12 mt-6 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm ${
                  alertData.type === "success"
                    ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-200"
                    : alertData.type === "error"
                      ? "bg-rose-500 hover:bg-rose-600 hover:shadow-rose-200"
                      : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200"
                }`}
              >
                {alertData.type === "success" ? "Continue" : "Okay"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeviceClaimRoom;
