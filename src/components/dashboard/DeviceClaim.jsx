import {
  Link2,
  Smartphone,
  Plus,
  RefreshCw,
  Wind,
  Leaf,
  X,
} from "lucide-react";

import { DUMMY_DEVICE_ID } from "../../db/dummyData";

import backgroundBG1 from "../../assets/dashboardBG.png";

const DeviceClaim = ({
  deviceId,
  loading,
  deviceClaimed,
  darkMode,
  isDemo,
  handleDeviceChange,
  claimDevice,
  clearDevice,
}) => {
  return (
    <>
      {/* CLAIM DEVICE */}

      <section className="px-4 sm:px-6 lg:px-8 mt-6">
        <div
          className={`relative overflow-hidden rounded-[26px] border shadow-[0_8px_35px_rgba(36,68,120,0.07)] ${
            darkMode ? "border-white/10 bg-[#111c2e]" : "border-white bg-white"
          }`}
        >
          {/* Background decoration */}

          <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

          <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full bg-cyan-100/30 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 p-5 sm:p-7 lg:px-8 lg:py-6">
            {/* Icon */}

            <div
              className={`relative w-18 h-18 shrink-0 rounded-[22px] flex items-center justify-center ${
                darkMode
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-linear-to-br from-blue-50 to-cyan-50 text-blue-600"
              }`}
            >
              <div className="absolute inset-2 rounded-[17px] border border-blue-200/40" />

              <Link2 size={34} strokeWidth={2.3} />
            </div>

            {/* Content */}

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h2
                  className={`m-0 text-xl sm:text-[22px] font-bold ${
                    darkMode ? "text-white" : "text-[#101936]"
                  }`}
                >
                  Claim Device
                </h2>

                <span
                  className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                    isDemo
                      ? "bg-blue-50 text-blue-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {isDemo ? "Demo Mode" : "Connected Account"}
                </span>
              </div>

              <p
                className={`m-0 mt-1.5 text-sm ${
                  darkMode ? "text-slate-400" : "text-[#7180a0]"
                }`}
              >
                Enter your IoT device ID to start monitoring
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                {/* Input */}

                <div className="relative w-full sm:max-w-115">
                  <Smartphone
                    size={18}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                      darkMode ? "text-slate-500" : "text-[#8291b0]"
                    }`}
                  />

                  <input
                    type="text"
                    placeholder="Enter Device ID"
                    value={deviceId}
                    onChange={(e) => handleDeviceChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        claimDevice();
                      }
                    }}
                    disabled={loading}
                    className={`w-full h-13 pl-11 pr-4 rounded-[14px] border text-sm outline-none transition ${
                      darkMode
                        ? "bg-[#0c1626] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        : "bg-white border-slate-200 text-slate-800 placeholder:text-[#8997b4] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    }`}
                  />

                  {deviceId && !loading && (
                    <button
                      type="button"
                      onClick={clearDevice}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer transition ${
                        darkMode
                          ? "text-slate-500 hover:text-white hover:bg-white/10"
                          : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                      }`}
                      title="Clear Device ID"
                    >
                      <X size={17} />
                    </button>
                  )}
                </div>

                {/* Claim Button */}

                <button
                  type="button"
                  onClick={claimDevice}
                  disabled={loading}
                  className="h-13 sm:w-47.5 md:w-58.5 px-6 rounded-[14px] border-none bg-linear-to-r from-[#3578f6] to-[#3471eb] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(52,113,235,0.22)] hover:shadow-[0_10px_25px_rgba(52,113,235,0.30)] hover:from-[#2869e5] hover:to-[#2d63d4] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 active:scale-[0.98]"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      Claiming...
                    </>
                  ) : (
                    <>
                      <Plus size={19} />
                      Claim Device
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 mt-2.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isDemo ? "bg-blue-500" : "bg-emerald-500"
                  }`}
                />

                <p
                  className={`m-0 text-[10px] ${
                    darkMode ? "text-slate-500" : "text-[#8997b4]"
                  }`}
                >
                  {isDemo
                    ? `Demo Device ID: ${DUMMY_DEVICE_ID}`
                    : "Real Firebase account"}
                </p>
              </div>
            </div>

            {/* Illustration */}

            <div className="hidden lg:flex w-70 xl:w-[320px] h-37.5 shrink-0 items-center justify-center overflow-hidden">
              <img
                src={backgroundBG1}
                alt=""
                className="w-full h-full object-contain scale-[1.18] drop-shadow-[0_15px_25px_rgba(50,100,160,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  NO DEVICE */}

      {!deviceClaimed && (
        <section className="px-4 sm:px-6 lg:px-8 mt-7 pb-7">
          <div
            className={`relative overflow-hidden min-h-50 rounded-[26px] border flex flex-col sm:flex-row items-start sm:items-center gap-5 px-5 sm:px-8 py-7 shadow-[0_6px_25px_rgba(36,68,120,0.05)] ${
              darkMode
                ? "bg-[#111c2e] border-white/10"
                : "bg-white border-slate-100"
            }`}
          >
            {/* Decorative */}

            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-blue-50/70 blur-3xl" />

            <div
              className={`relative w-17.5 h-17.5 shrink-0 rounded-[20px] flex items-center justify-center ${
                darkMode
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-blue-50 text-blue-500"
              }`}
            >
              <Link2 size={31} />
            </div>

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <h2
                  className={`m-0 text-xl font-bold ${
                    darkMode ? "text-white" : "text-[#101936]"
                  }`}
                >
                  Connect Your Smart Home
                </h2>

                <span
                  className={`text-[9px] font-semibold px-2 py-1 rounded-full ${
                    darkMode
                      ? "bg-white/5 text-slate-500"
                      : "bg-slate-50 text-slate-400"
                  }`}
                >
                  DEVICE SETUP
                </span>
              </div>

              <p
                className={`m-0 mt-2 max-w-175 text-sm leading-6 ${
                  darkMode ? "text-slate-400" : "text-[#7180a0]"
                }`}
              >
                {isDemo
                  ? "Use SH-ESP32-001 to connect the demo device and view simulated sensor data."
                  : "Claim your SmartHaven device to start monitoring your home's temperature, humidity, gases and air quality in real-time."}
              </p>

              <div className="flex flex-wrap gap-3 mt-5">
                {/* Real-time monitoring */}

                <div
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
                    darkMode
                      ? "bg-white/5 border-white/5"
                      : "bg-blue-50/60 border-blue-50"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                    <Wind size={15} />
                  </div>

                  <span
                    className={`text-[11px] font-semibold ${
                      darkMode ? "text-slate-400" : "text-[#7180a0]"
                    }`}
                  >
                    Real-time monitoring
                  </span>
                </div>

                {/* Smart safety */}

                <div
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
                    darkMode
                      ? "bg-white/5 border-white/5"
                      : "bg-emerald-50/60 border-emerald-50"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <Leaf size={15} />
                  </div>

                  <span
                    className={`text-[11px] font-semibold ${
                      darkMode ? "text-slate-400" : "text-[#7180a0]"
                    }`}
                  >
                    Smart safety insights
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-slate-400 opacity-60" />

                  <span className="relative inline-flex w-2 h-2 rounded-full bg-slate-400" />
                </span>

                <span
                  className={`text-[11px] ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  No device connected
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DeviceClaim;
