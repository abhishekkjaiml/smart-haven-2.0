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
import { Link } from "react-router-dom";

const AllRooms = () => {
  const { rooms } = useDevice();

  console.log(rooms);
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-700">
            Your Rooms
          </span>

          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
            {rooms.length}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live sensor data
          </div>

          <button
            type="button"
            // onClick={refreshRooms}
            className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition cursor-pointer"
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/rooms/${room.id}`}
              className="block no-underline"
            >
              <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* IMAGE */}

                <div className="relative h-44 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />

                  {/* STATUS */}

                  <div className="absolute top-4 left-4">
                    <div
                      className={`
                            flex items-center gap-2
                            px-3 py-1.5
                            rounded-full
                            backdrop-blur-md
                            text-xs font-semibold
                            ${
                              room.status === "online"
                                ? "bg-emerald-500/90 text-white"
                                : "bg-slate-700/90 text-white"
                            }
                          `}
                    >
                      <span
                        className={`
                              w-2 h-2 rounded-full
                              ${
                                room.status === "online"
                                  ? "bg-white animate-pulse"
                                  : "bg-slate-300"
                              }
                            `}
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

                  {/* NAME */}

                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="m-0 text-xl font-bold text-white">
                      {room.name}
                    </h2>

                    <p className="m-0 mt-1 text-xs text-white/80">
                      {room.type}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-5">
                  {/* DEVICE */}

                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <Home size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className="m-0 text-[11px] text-slate-400">
                          Device ID
                        </p>

                        <p className="m-0 mt-0.5 text-xs font-semibold text-slate-700 truncate">
                          {room.deviceId}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-400 shrink-0">
                      {room.lastUpdated}
                    </span>
                  </div>

                  {/* SENSOR GRID */}

                  <div className="grid grid-cols-3 gap-2.5">
                    {/* TEMP */}

                    <div className="rounded-xl bg-orange-50 p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Thermometer size={15} className="text-orange-500" />

                        <span className="text-[10px] font-semibold text-orange-600">
                          Temp
                        </span>
                      </div>

                      <p className="m-0 text-lg font-bold text-slate-800">
                        {room.sensors.temperature.toFixed(1)}
                        °C
                      </p>
                    </div>

                    {/* HUMIDITY */}

                    <div className="rounded-xl bg-blue-50 p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Droplets size={15} className="text-blue-500" />

                        <span className="text-[10px] font-semibold text-blue-600">
                          Humidity
                        </span>
                      </div>

                      <p className="m-0 text-lg font-bold text-slate-800">
                        {room.sensors.humidity}%
                      </p>
                    </div>

                    {/* AQI */}

                    <div className="rounded-xl bg-emerald-50 p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Wind size={15} className="text-emerald-500" />

                        <span className="text-[10px] font-semibold text-emerald-600">
                          AQI
                        </span>
                      </div>

                      <p className="m-0 text-lg font-bold text-slate-800">
                        {room.sensors.aqi}
                      </p>
                    </div>
                  </div>

                  {/* VIEW DETAILS */}

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition">
                      View Room Details
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div  className="w-full min-h-[350px] bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
          <div  className="text-center px-6">
            <div  className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Home size={20} />
            </div>
            <h1 className="m-0 mt-5 text-lg font-bold text-slate-800">
              No Rooms Found
            </h1>

            <p  className="m-0 mt-2 max-w-md text-sm text-slate-500">
              No rooms are available for the connected device.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllRooms;
