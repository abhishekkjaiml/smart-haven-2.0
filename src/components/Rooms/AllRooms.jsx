import {
  ArrowRight,
  Droplets,
  Home,
  MoreVertical,
  RefreshCw,
  Thermometer,
  Wind,
} from "lucide-react";

import { useDevice } from "../../context/device-context";
import { useTheme } from "../../context/theme-context";
import { Link } from "react-router-dom";

const AllRooms = () => {
  const { rooms } = useDevice();
  const { darkMode } = useTheme();

  console.log(rooms);

  return (
    <section>
      {/* =========================================================
          ROOMS HEADER
      ========================================================= */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-semibold ${
              darkMode ? "text-slate-200" : "text-slate-700"
            }`}
          >
            Your Rooms
          </span>

          <span
            className={`px-2 py-0.5 rounded-full text-xs font-bold ${
              darkMode
                ? "bg-blue-500/10 text-blue-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            {rooms.length}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 text-xs ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live sensor data
          </div>

          <button
            type="button"
            // onClick={refreshRooms}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition cursor-pointer ${
              darkMode
                ? "border-white/10 bg-[#111c2e] text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                : "border-slate-200 bg-white text-slate-500 hover:text-blue-600 hover:bg-blue-50"
            }`}
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* =========================================================
          ROOMS GRID
      ========================================================= */}

      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/rooms/${room.id}`}
              className="block no-underline"
            >
              <div
                className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-[#111c2e] border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-white/15 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
                    : "bg-white border-slate-100 shadow-[0_5px_25px_rgba(36,68,120,0.06)] hover:shadow-[0_15px_35px_rgba(36,68,120,0.11)]"
                }`}
              >
                {/* =====================================================
                    IMAGE
                ===================================================== */}

                <div className="relative h-44 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

                  {/* STATUS */}

                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold ${
                        room.status === "online"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-slate-700/90 text-white"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          room.status === "online"
                            ? "bg-white animate-pulse"
                            : "bg-slate-300"
                        }`}
                      />

                      {room.status === "online" ? "Online" : "Offline"}
                    </div>
                  </div>

                  {/* MENU */}

                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition cursor-pointer"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* ROOM NAME */}

                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="m-0 text-xl font-bold text-white">
                      {room.name}
                    </h2>

                    <p className="m-0 mt-1 text-xs text-white/80">
                      {room.type}
                    </p>
                  </div>
                </div>

                {/* =====================================================
                    CONTENT
                ===================================================== */}

                <div className="p-5">
                  {/* DEVICE */}

                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center ${
                          darkMode
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <Home size={17} />
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`m-0 text-[11px] ${
                            darkMode ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          Device ID
                        </p>

                        <p
                          className={`m-0 mt-0.5 text-xs font-semibold truncate ${
                            darkMode ? "text-slate-200" : "text-slate-700"
                          }`}
                        >
                          {room.deviceId}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] shrink-0 ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {room.lastUpdated}
                    </span>
                  </div>

                  {/* =====================================================
                      SENSOR GRID
                  ===================================================== */}

                  <div className="grid grid-cols-3 gap-2.5">
                    {/* TEMP */}

                    <div
                      className={`rounded-xl p-3 ${
                        darkMode ? "bg-orange-500/10" : "bg-orange-50"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <Thermometer
                          size={15}
                          className={
                            darkMode ? "text-orange-400" : "text-orange-500"
                          }
                        />

                        <span
                          className={`text-[10px] font-semibold ${
                            darkMode ? "text-orange-400" : "text-orange-600"
                          }`}
                        >
                          Temp
                        </span>
                      </div>

                      <p
                        className={`m-0 text-lg font-bold ${
                          darkMode ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {room.sensors.temperature.toFixed(1)}
                        °C
                      </p>
                    </div>

                    {/* HUMIDITY */}

                    <div
                      className={`rounded-xl p-3 ${
                        darkMode ? "bg-blue-500/10" : "bg-blue-50"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <Droplets
                          size={15}
                          className={
                            darkMode ? "text-blue-400" : "text-blue-500"
                          }
                        />

                        <span
                          className={`text-[10px] font-semibold ${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          Humidity
                        </span>
                      </div>

                      <p
                        className={`m-0 text-lg font-bold ${
                          darkMode ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {room.sensors.humidity}%
                      </p>
                    </div>

                    {/* AQI */}

                    <div
                      className={`rounded-xl p-3 ${
                        darkMode ? "bg-emerald-500/10" : "bg-emerald-50"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <Wind
                          size={15}
                          className={
                            darkMode ? "text-emerald-400" : "text-emerald-500"
                          }
                        />

                        <span
                          className={`text-[10px] font-semibold ${
                            darkMode ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        >
                          AQI
                        </span>
                      </div>

                      <p
                        className={`m-0 text-lg font-bold ${
                          darkMode ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {room.sensors.aqi}
                      </p>
                    </div>
                  </div>

                  {/* =====================================================
                      VIEW DETAILS
                  ===================================================== */}

                  <div
                    className={`mt-5 pt-4 border-t flex items-center justify-between ${
                      darkMode ? "border-white/10" : "border-slate-100"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold transition ${
                        darkMode
                          ? "text-slate-400 group-hover:text-blue-400"
                          : "text-slate-600 group-hover:text-blue-600"
                      }`}
                    >
                      View Room Details
                    </span>

                    <ArrowRight
                      size={17}
                      className={`transition-all ${
                        darkMode
                          ? "text-slate-500 group-hover:text-blue-400"
                          : "text-slate-400 group-hover:text-blue-600"
                      } group-hover:translate-x-1`}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* =========================================================
           EMPTY STATE
        ========================================================= */

        <div
          className={`w-full min-h-[350px] border rounded-2xl flex items-center justify-center shadow-sm ${
            darkMode
              ? "bg-[#111c2e] border-white/10"
              : "bg-white border-slate-100"
          }`}
        >
          <div className="text-center px-6">
            <div
              className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                darkMode
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <Home size={20} />
            </div>

            <h1
              className={`m-0 mt-5 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              No Rooms Found
            </h1>

            <p
              className={`m-0 mt-2 max-w-md text-sm ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              No rooms are available for the connected device.
            </p>
          </div>
        </div>
      )}

      {/* =========================================================
          LIVE UPDATE INFO
      ========================================================= */}

      {rooms.length > 0 && (
        <div
          className={`mt-7 flex items-center justify-center gap-2 text-xs ${
            darkMode ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Sensor values update automatically every 2 seconds
        </div>
      )}
    </section>
  );
};

export default AllRooms;
