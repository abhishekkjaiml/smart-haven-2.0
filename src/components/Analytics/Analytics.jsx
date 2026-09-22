import {
  Activity,
  AlertCircle,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Droplets,
  Flame,
  Leaf,
  Minus,
  MoreHorizontal,
  Thermometer,
  TrendingDown,
  TrendingUp,
  Wind,
} from "lucide-react";

import { useTheme } from "../../context/theme-context";

const Analytics = () => {
  const { darkMode } = useTheme();

  // Analytics Data

  const overviewData = [
    {
      title: "Avg. Temperature",
      value: "27.8°C",
      change: "+2.4%",
      icon: Thermometer,
      iconBg: darkMode ? "bg-rose-950/40" : "bg-rose-50",
      iconColor: darkMode ? "text-rose-400" : "text-rose-500",
      trend: "up",
    },
    {
      title: "Avg. Humidity",
      value: "64%",
      change: "-4.2%",
      icon: Droplets,
      iconBg: darkMode ? "bg-blue-950/40" : "bg-blue-50",
      iconColor: darkMode ? "text-blue-400" : "text-blue-500",
      trend: "down",
    },
    {
      title: "Average AQI",
      value: "42",
      change: "-8.6%",
      icon: Wind,
      iconBg: darkMode ? "bg-cyan-950/40" : "bg-cyan-50",
      iconColor: darkMode ? "text-cyan-400" : "text-cyan-500",
      trend: "down",
    },
    {
      title: "Safe Hours",
      value: "91.4%",
      change: "+6.8%",
      icon: CheckCircle2,
      iconBg: darkMode ? "bg-emerald-950/40" : "bg-emerald-50",
      iconColor: darkMode ? "text-emerald-400" : "text-emerald-500",
      trend: "up",
    },
  ];

  // Temperature Data

  const temperatureData = [25, 26, 28, 27, 29, 31, 30, 28, 27, 29, 32, 31];

  // AQI Data

  const aqiData = [32, 38, 35, 44, 48, 41, 37, 42, 39, 34, 36, 31];

  // Gas Data

  const gasData = [
    {
      title: "H₂ Gas",
      value: "18.4 ppm",
      status: "Normal",
      icon: Wind,
      iconBg: darkMode ? "bg-violet-950/40" : "bg-violet-50",
      iconColor: darkMode ? "text-violet-400" : "text-violet-500",
    },
    {
      title: "CO Gas",
      value: "4.8 ppm",
      status: "Safe",
      icon: Flame,
      iconBg: darkMode ? "bg-orange-950/40" : "bg-orange-50",
      iconColor: darkMode ? "text-orange-400" : "text-orange-500",
    },
    {
      title: "CH₄ Gas",
      value: "12.6 ppm",
      status: "Normal",
      icon: Leaf,
      iconBg: darkMode ? "bg-emerald-950/40" : "bg-emerald-50",
      iconColor: darkMode ? "text-emerald-400" : "text-emerald-500",
    },
  ];

  // Room Analytics

  const roomAnalytics = [
    {
      name: "Living Room",
      type: "Living Area",
      temperature: "28.4°C",
      humidity: "61%",
      aqi: 38,
      status: "Good",
    },
    {
      name: "Bedroom",
      type: "Sleeping Area",
      temperature: "26.8°C",
      humidity: "67%",
      aqi: 42,
      status: "Good",
    },
    {
      name: "Kitchen",
      type: "Cooking Area",
      temperature: "30.2°C",
      humidity: "72%",
      aqi: 64,
      status: "Moderate",
    },
  ];

  // Chart Points

  const createPoints = (data, width = 700, height = 250) => {
    const max = Math.max(...data);
    const min = Math.min(...data);

    return data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;

        const y =
          height - ((value - min) / (max - min || 1)) * (height - 35) - 10;

        return `${x},${y}`;
      })
      .join(" ");
  };

  const temperaturePoints = createPoints(temperatureData);
  const aqiPoints = createPoints(aqiData);

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0B1220] text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1
              className={`m-0 text-[28px] font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Analytics
            </h1>

            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                darkMode
                  ? "bg-blue-950/50 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              SMART INSIGHTS
            </span>
          </div>

          <p
            className={`m-0 mt-1 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Monitor and analyze your environmental data
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="button"
            className={`h-11 px-4 rounded-xl border flex items-center gap-2 text-sm font-semibold transition cursor-pointer ${
              darkMode
                ? "bg-[#111827] border-slate-800 text-slate-300 hover:bg-slate-800"
                : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <CalendarDays size={17} />
            Last 7 Days
            <ChevronDown size={15} />
          </button>

          <button
            type="button"
            className="h-11 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold flex items-center gap-2 transition cursor-pointer"
          >
            <BarChart3 size={17} />
            Generate Report
          </button>
        </div>
      </div>

      {/* Overview Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        {overviewData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`rounded-2xl border p-5 transition-colors duration-300 ${
                darkMode
                  ? "bg-[#111827] border-slate-800"
                  : "bg-white border-slate-100"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon size={21} />
                </div>

                <button
                  type="button"
                  className={`cursor-pointer ${
                    darkMode
                      ? "text-slate-600 hover:text-slate-300"
                      : "text-slate-300 hover:text-slate-500"
                  }`}
                >
                  <MoreHorizontal size={19} />
                </button>
              </div>

              <p
                className={`m-0 mt-5 text-xs font-medium ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {item.title}
              </p>

              <div className="flex items-end justify-between gap-2 mt-2">
                <h3
                  className={`m-0 text-[26px] leading-8 font-bold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {item.value}
                </h3>

                <span
                  className={`text-xs font-bold flex items-center gap-1 ${
                    item.trend === "up"
                      ? darkMode
                        ? "text-emerald-400"
                        : "text-emerald-500"
                      : darkMode
                        ? "text-blue-400"
                        : "text-blue-500"
                  }`}
                >
                  {item.trend === "up" ? (
                    <TrendingUp size={13} />
                  ) : (
                    <TrendingDown size={13} />
                  )}

                  {item.change}
                </span>
              </div>

              <p
                className={`m-0 mt-2 text-[11px] ${
                  darkMode ? "text-slate-600" : "text-slate-400"
                }`}
              >
                Compared with previous period
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-6">
        {/* Temperature Chart */}

        <div
          className={`rounded-2xl border p-5 sm:p-6 ${
            darkMode
              ? "bg-[#111827] border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2
                  className={`m-0 text-base font-bold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  Temperature Trend
                </h2>

                <Thermometer
                  size={17}
                  className={darkMode ? "text-rose-400" : "text-rose-500"}
                />
              </div>

              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Average temperature over the selected period
              </p>
            </div>

            <div className="text-right">
              <p
                className={`m-0 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                27.8°C
              </p>

              <span className="text-[11px] text-emerald-500 font-semibold">
                +2.4%
              </span>
            </div>
          </div>

          <div className="mt-6 h-[260px] relative">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[34, 30, 26, 22, 18].map((value) => (
                <div
                  key={value}
                  className={`border-t ${
                    darkMode ? "border-slate-800" : "border-slate-100"
                  }`}
                />
              ))}
            </div>

            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px]">
              {["34°", "30°", "26°", "22°", "18°"].map((value) => (
                <span
                  key={value}
                  className={darkMode ? "text-slate-600" : "text-slate-400"}
                >
                  {value}
                </span>
              ))}
            </div>

            <div className="absolute left-8 right-0 top-0 bottom-0">
              <svg
                viewBox="0 0 700 250"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="temperatureGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={darkMode ? "#fb7185" : "#f43f5e"}
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopColor={darkMode ? "#fb7185" : "#f43f5e"}
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <polyline
                  points={`0,250 ${temperaturePoints} 700,250`}
                  fill="url(#temperatureGradient)"
                  stroke="none"
                />

                <polyline
                  points={temperaturePoints}
                  fill="none"
                  stroke={darkMode ? "#fb7185" : "#f43f5e"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px]">
              {[
                "16 Sep",
                "17 Sep",
                "18 Sep",
                "19 Sep",
                "20 Sep",
                "21 Sep",
                "22 Sep",
              ].map((value) => (
                <span
                  key={value}
                  className={darkMode ? "text-slate-600" : "text-slate-400"}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* AQI Chart */}

        <div
          className={`rounded-2xl border p-5 sm:p-6 ${
            darkMode
              ? "bg-[#111827] border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2
                  className={`m-0 text-base font-bold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  Air Quality Trend
                </h2>

                <Wind
                  size={17}
                  className={darkMode ? "text-cyan-400" : "text-cyan-500"}
                />
              </div>

              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                AQI readings collected from your rooms
              </p>
            </div>

            <div className="text-right">
              <p
                className={`m-0 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                42
              </p>

              <span className="text-[11px] text-emerald-500 font-semibold">
                Good
              </span>
            </div>
          </div>

          <div className="mt-6 h-[260px] relative">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[100, 75, 50, 25, 0].map((value) => (
                <div
                  key={value}
                  className={`border-t ${
                    darkMode ? "border-slate-800" : "border-slate-100"
                  }`}
                />
              ))}
            </div>

            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px]">
              {["100", "75", "50", "25", "0"].map((value) => (
                <span
                  key={value}
                  className={darkMode ? "text-slate-600" : "text-slate-400"}
                >
                  {value}
                </span>
              ))}
            </div>

            <div className="absolute left-8 right-0 top-0 bottom-0">
              <svg
                viewBox="0 0 700 250"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient id="aqiGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={darkMode ? "#22d3ee" : "#06b6d4"}
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopColor={darkMode ? "#22d3ee" : "#06b6d4"}
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <polyline
                  points={`0,250 ${aqiPoints} 700,250`}
                  fill="url(#aqiGradient)"
                  stroke="none"
                />

                <polyline
                  points={aqiPoints}
                  fill="none"
                  stroke={darkMode ? "#22d3ee" : "#06b6d4"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px]">
              {[
                "16 Sep",
                "17 Sep",
                "18 Sep",
                "19 Sep",
                "20 Sep",
                "21 Sep",
                "22 Sep",
              ].map((value) => (
                <span
                  key={value}
                  className={darkMode ? "text-slate-600" : "text-slate-400"}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Health */}

      <div
        className={`rounded-2xl border p-5 sm:p-6 mb-6 ${
          darkMode
            ? "bg-[#111827] border-slate-800"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2
              className={`m-0 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Environmental Health
            </h2>

            <p
              className={`m-0 mt-1 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Current gas and environmental readings
            </p>
          </div>

          <Activity
            size={20}
            className={darkMode ? "text-emerald-400" : "text-emerald-500"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gasData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 ${
                  darkMode
                    ? "bg-slate-900/60 border-slate-800"
                    : "bg-slate-50 border-slate-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
                  >
                    <Icon size={21} />
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      darkMode
                        ? "bg-emerald-950/50 text-emerald-400"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p
                  className={`m-0 mt-5 text-xs ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {item.title}
                </p>

                <h3
                  className={`m-0 mt-1 text-2xl font-bold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {item.value}
                </h3>

                <div
                  className={`mt-4 h-1.5 rounded-full overflow-hidden ${
                    darkMode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                >
                  <div className="w-[32%] h-full rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Room Analytics */}

      <div
        className={`rounded-2xl border overflow-hidden mb-6 ${
          darkMode
            ? "bg-[#111827] border-slate-800"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="p-5 sm:p-6 flex items-center justify-between">
          <div>
            <h2
              className={`m-0 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Room Analytics
            </h2>

            <p
              className={`m-0 mt-1 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Compare environmental conditions across rooms
            </p>
          </div>

          <button
            type="button"
            className={`h-9 px-3 rounded-lg border flex items-center gap-2 text-xs font-semibold cursor-pointer ${
              darkMode
                ? "border-slate-800 text-slate-400 hover:bg-slate-800"
                : "border-slate-100 text-slate-500 hover:bg-slate-50"
            }`}
          >
            All Rooms
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr
                className={`border-t border-b ${
                  darkMode
                    ? "border-slate-800 bg-slate-900/50"
                    : "border-slate-100 bg-slate-50/70"
                }`}
              >
                <th
                  className={`text-left px-6 py-4 text-xs font-semibold ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Room
                </th>

                <th
                  className={`text-left px-6 py-4 text-xs font-semibold ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Temperature
                </th>

                <th
                  className={`text-left px-6 py-4 text-xs font-semibold ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Humidity
                </th>

                <th
                  className={`text-left px-6 py-4 text-xs font-semibold ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  AQI
                </th>

                <th
                  className={`text-left px-6 py-4 text-xs font-semibold ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Status
                </th>

                <th
                  className={`text-right px-6 py-4 text-xs font-semibold ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {roomAnalytics.map((room) => (
                <tr
                  key={room.name}
                  className={`border-b last:border-b-0 ${
                    darkMode
                      ? "border-slate-800 hover:bg-slate-900/40"
                      : "border-slate-100 hover:bg-slate-50/70"
                  } transition`}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p
                        className={`m-0 text-sm font-bold ${
                          darkMode ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {room.name}
                      </p>

                      <p
                        className={`m-0 mt-1 text-[10px] ${
                          darkMode ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        {room.type}
                      </p>
                    </div>
                  </td>

                  <td
                    className={`px-6 py-4 text-sm font-semibold ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {room.temperature}
                  </td>

                  <td
                    className={`px-6 py-4 text-sm font-semibold ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {room.humidity}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-bold ${
                        room.aqi <= 50
                          ? darkMode
                            ? "text-emerald-400"
                            : "text-emerald-600"
                          : darkMode
                            ? "text-amber-400"
                            : "text-amber-600"
                      }`}
                    >
                      {room.aqi}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        room.status === "Good"
                          ? darkMode
                            ? "bg-emerald-950/50 text-emerald-400"
                            : "bg-emerald-50 text-emerald-600"
                          : darkMode
                            ? "bg-amber-950/50 text-amber-400"
                            : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className={`text-xs font-semibold cursor-pointer ${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-700"
                      }`}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Good Condition */}

        <div
          className={`rounded-2xl border p-5 ${
            darkMode
              ? "bg-emerald-950/20 border-emerald-900/40"
              : "bg-emerald-50/70 border-emerald-100"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-emerald-950/60 text-emerald-400"
                  : "bg-white text-emerald-600"
              }`}
            >
              <CheckCircle2 size={20} />
            </div>

            <div>
              <h3
                className={`m-0 text-sm font-bold ${
                  darkMode ? "text-emerald-300" : "text-emerald-700"
                }`}
              >
                Air Quality is Good
              </h3>

              <p
                className={`m-0 mt-2 text-xs leading-5 ${
                  darkMode ? "text-emerald-400/70" : "text-emerald-700/70"
                }`}
              >
                Most monitored rooms are currently within a healthy AQI range.
              </p>
            </div>
          </div>
        </div>

        {/* Temperature Alert */}

        <div
          className={`rounded-2xl border p-5 ${
            darkMode
              ? "bg-amber-950/20 border-amber-900/40"
              : "bg-amber-50/70 border-amber-100"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-amber-950/60 text-amber-400"
                  : "bg-white text-amber-600"
              }`}
            >
              <AlertCircle size={20} />
            </div>

            <div>
              <h3
                className={`m-0 text-sm font-bold ${
                  darkMode ? "text-amber-300" : "text-amber-700"
                }`}
              >
                Kitchen Needs Attention
              </h3>

              <p
                className={`m-0 mt-2 text-xs leading-5 ${
                  darkMode ? "text-amber-400/70" : "text-amber-700/70"
                }`}
              >
                Kitchen temperature and AQI are slightly higher than other
                rooms.
              </p>
            </div>
          </div>
        </div>

        {/* Stable Trend */}

        <div
          className={`rounded-2xl border p-5 ${
            darkMode
              ? "bg-blue-950/20 border-blue-900/40"
              : "bg-blue-50/70 border-blue-100"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-blue-950/60 text-blue-400"
                  : "bg-white text-blue-600"
              }`}
            >
              <TrendingUp size={20} />
            </div>

            <div>
              <h3
                className={`m-0 text-sm font-bold ${
                  darkMode ? "text-blue-300" : "text-blue-700"
                }`}
              >
                Stable Environment
              </h3>

              <p
                className={`m-0 mt-2 text-xs leading-5 ${
                  darkMode ? "text-blue-400/70" : "text-blue-700/70"
                }`}
              >
                Environmental conditions have remained stable over the selected
                period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
