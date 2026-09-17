import { Thermometer, Droplets, Wind, Flame, Leaf, RefreshCw, Clock3, } from "lucide-react";

const SensorDataCard = ({
  data,
  darkMode,
  isDemo,
  lastUpdated,
  startDummyData,
}) => {
  // Sensor cards

  const sensorCards = [
    {
      type: "temperature",
      title: "Temperature",
      value: `${data.temperature ?? "--"} °C`,
      icon: Thermometer,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500",
      waveColor: "text-rose-300",
    },

    {
      type: "humidity",
      title: "Humidity",
      value: `${data.humidity ?? "--"} %`,
      icon: Droplets,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      waveColor: "text-blue-300",
    },

    {
      type: "h2",
      title: "H₂ Gas",
      value: `${data.h2_ppm ?? "--"} ppm`,
      icon: Wind,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-500",
      waveColor: "text-violet-300",
    },

    {
      type: "co",
      title: "CO Gas",
      value: `${data.co_ppm ?? "--"} ppm`,
      icon: Flame,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      waveColor: "text-orange-300",
    },

    {
      type: "ch4",
      title: "CH₄ Gas",
      value: `${data.ch4_ppm ?? "--"} ppm`,
      icon: Leaf,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      waveColor: "text-emerald-300",
    },

    {
      type: "aqi",
      title: "AQI",
      value: `${data.aqi ?? "--"}`,
      icon: Wind,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-500",
      waveColor: "text-cyan-300",
    },
  ];

  // Refresh

  const handleRefresh = () => {
    if (isDemo) {
      startDummyData();
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      {/* SENSOR HEADER */}

      <section className="px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2
                className={`m-0 text-xl sm:text-2xl font-bold ${
                  darkMode ? "text-white" : "text-[#101936]"
                }`}
              >
                Sensor Data
              </h2>

              <div
                className={`flex items-center gap-2 px-2.5 py-1 rounded-full ${
                  darkMode ? "bg-emerald-500/10" : "bg-emerald-50"
                }`}
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 animate-ping opacity-60" />

                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                </span>

                <span
                  className={`text-[10px] sm:text-xs font-semibold ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {isDemo ? "Demo Live Data" : "Live data"}
                </span>
              </div>
            </div>

            <p
              className={`m-0 mt-1.5 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Real-time environmental readings from your connected device
            </p>
          </div>

          {/* Controls */}

          <div className="flex items-center gap-2">
            <div
              className={`h-10 px-3.5 rounded-xl border flex items-center gap-2 text-[11px] ${
                darkMode
                  ? "bg-[#111c2e] border-white/10 text-slate-400"
                  : "bg-white border-slate-200 text-[#7180a0]"
              }`}
            >
              <Clock3 size={16} />

              <span className="hidden sm:inline">Last updated:</span>

              <span className="font-semibold">{lastUpdated}</span>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              className="h-10 px-4 rounded-xl border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-blue-100 hover:border-blue-200 transition"
            >
              <RefreshCw size={15} />
              Refresh
            </button>
          </div>
        </div>
      </section>

      {/* SENSOR CARDS */}

      <section className="px-4 sm:px-6 lg:px-8 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {sensorCards.map((sensor) => {
            const Icon = sensor.icon;

            return (
              <div
                key={sensor.type}
                className={`group relative overflow-hidden h-41.25 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                  darkMode
                    ? "bg-[#111c2e] border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-white/15"
                    : "bg-white border-slate-100 shadow-[0_5px_25px_rgba(36,68,120,0.06)] hover:shadow-[0_15px_35px_rgba(36,68,120,0.11)]"
                }`}
              >
                {/* Top subtle shine */}

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-slate-50/70 blur-2xl group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10 flex items-center gap-5 p-5">
                  <div
                    className={`w-20.5 h-20.5 shrink-0 rounded-[22px] ${sensor.iconBg} ${sensor.iconColor} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon size={39} strokeWidth={2} />
                  </div>

                  <div className="pt-1 min-w-0">
                    <p
                      className={`m-0 text-xs sm:text-sm font-semibold ${
                        darkMode ? "text-slate-400" : "text-[#52617d]"
                      }`}
                    >
                      {sensor.title}
                    </p>

                    <h3
                      className={`m-0 mt-2.5 text-[26px] leading-8 font-bold tracking-[-0.7px] ${
                        darkMode ? "text-white" : "text-[#101936]"
                      }`}
                    >
                      {sensor.value}
                    </h3>

                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

                      <span
                        className={`text-[9px] ${
                          darkMode ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        Monitoring
                      </span>
                    </div>
                  </div>
                </div>

                {/* Wave */}

                <div className="absolute bottom-0 left-0 right-0 h-12 opacity-90">
                  <svg
                    viewBox="0 0 400 60"
                    preserveAspectRatio="none"
                    className={`absolute bottom-0 left-0 w-full h-14.5 ${sensor.waveColor}`}
                  >
                    <path
                      d="M0 35 C45 52, 75 28, 115 37 C155 47, 175 12, 220 28 C270 48, 285 52, 325 32 C355 17, 375 31, 400 38 L400 60 L0 60 Z"
                      fill="currentColor"
                      fillOpacity="0.14"
                    />

                    <path
                      d="M0 35 C45 52, 75 28, 115 37 C155 47, 175 12, 220 28 C270 48, 285 52, 325 32 C355 17, 375 31, 400 38"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SensorDataCard;
