import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDevice } from "../../context/device-context";
import { useTheme } from "../../context/theme-context";

import { dummyDevices, DUMMY_DEVICE_ID } from "../../db/dummyData";

import {
  ArrowLeft,
  Clock3,
  Droplets,
  Flame,
  Home,
  Leaf,
  ShieldCheck,
  Smartphone,
  Thermometer,
  Wifi,
  WifiOff,
  Wind,
} from "lucide-react";

const RoomDetailsCard = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const { rooms, deviceClaimed, isDummyUser } = useDevice();
  const { darkMode } = useTheme();

  // find room using url id

  const room = useMemo(() => {
    if (!roomId || !rooms.length) {
      return null;
    }

    return rooms.find((item) => item.id === String(roomId));
  }, [roomId, rooms]);

  // Room Not Found

  if (!room) {
    return (
      <div className="w-full min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div
            className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
              darkMode
                ? "bg-slate-800 text-slate-400"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            <Home size={30} />
          </div>

          <h1
            className={`m-0 mt-5 text-xl font-bold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            Room Not Found
          </h1>

          <p
            className={`m-0 mt-2 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            The requested room is not available.
          </p>

          <button
            type="button"
            onClick={() => navigate("/rooms")}
            className="mt-5 h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold inline-flex items-center gap-2 transition cursor-pointer"
          >
            <ArrowLeft size={17} />
            Back to Rooms
          </button>
        </div>
      </div>
    );
  }

  const device = useMemo(() => {
    if (!room?.deviceId) {
      return null;
    }

    return dummyDevices.find((item) => item.id === room.deviceId);
  }, [room]);

  // AQI Status

  const getAquiStatus = (aqi) =>
    aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : "Poor";

  // AQI Status

  const aqiStatus = getAquiStatus(room.sensors.aqi);

  // Sensor Data

  const sensors = [
    {
      type: "temperature",
      title: "Temperature",
      value: `${room.sensors.temperature.toFixed(1)} °C`,
      icon: Thermometer,
      iconBg: darkMode ? "bg-rose-950/40" : "bg-rose-50",
      iconColor: darkMode ? "text-rose-400" : "text-rose-500",
      waveColor: darkMode ? "text-rose-400" : "text-rose-300",
    },
    {
      type: "humidity",
      title: "Humidity",
      value: `${room.sensors.humidity} %`,
      icon: Droplets,
      iconBg: darkMode ? "bg-blue-950/40" : "bg-blue-50",
      iconColor: darkMode ? "text-blue-400" : "text-blue-500",
      waveColor: darkMode ? "text-blue-400" : "text-blue-300",
    },
    {
      type: "h2",
      title: "H₂ Gas",
      value: `${room.sensors.h2_ppm} ppm`,
      icon: Wind,
      iconBg: darkMode ? "bg-violet-950/40" : "bg-violet-50",
      iconColor: darkMode ? "text-violet-400" : "text-violet-500",
      waveColor: darkMode ? "text-violet-400" : "text-violet-300",
    },
    {
      type: "co",
      title: "CO Gas",
      value: `${room.sensors.co_ppm} ppm`,
      icon: Flame,
      iconBg: darkMode ? "bg-orange-950/40" : "bg-orange-50",
      iconColor: darkMode ? "text-orange-400" : "text-orange-500",
      waveColor: darkMode ? "text-orange-400" : "text-orange-300",
    },
    {
      type: "ch4",
      title: "CH₄ Gas",
      value: `${room.sensors.ch4_ppm} ppm`,
      icon: Leaf,
      iconBg: darkMode ? "bg-emerald-950/40" : "bg-emerald-50",
      iconColor: darkMode ? "text-emerald-400" : "text-emerald-500",
      waveColor: darkMode ? "text-emerald-400" : "text-emerald-300",
    },
    {
      type: "aqi",
      title: "AQI",
      value: `${room.sensors.aqi}`,
      icon: Wind,
      iconBg: darkMode ? "bg-cyan-950/40" : "bg-cyan-50",
      iconColor: darkMode ? "text-cyan-400" : "text-cyan-500",
      waveColor: darkMode ? "text-cyan-400" : "text-cyan-300",
    },
  ];

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode ? "text-slate-100" : "text-slate-800"
      }`}
    >
      <button
        type="button"
        onClick={() => navigate("/rooms")}
        className={`mb-5 flex items-center gap-2 text-sm font-semibold transition cursor-pointer ${
          darkMode
            ? "text-slate-400 hover:text-blue-400"
            : "text-slate-500 hover:text-blue-600"
        }`}
      >
        <ArrowLeft size={18} />
        Back to Rooms
      </button>

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1
              className={`m-0 text-[28px] font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {room.name}
            </h1>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 ${
                room.status === "online"
                  ? darkMode
                    ? "bg-emerald-950/40 text-emerald-400"
                    : "bg-emerald-50 text-emerald-600"
                  : darkMode
                    ? "bg-slate-800 text-slate-400"
                    : "bg-slate-100 text-slate-500"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  room.status === "online"
                    ? "bg-emerald-500 animate-pulse"
                    : darkMode
                      ? "bg-slate-500"
                      : "bg-slate-400"
                }`}
              />

              {room.status === "online" ? "Online" : "Offline"}
            </span>
          </div>

          <p
            className={`m-0 mt-1 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {room.type} • Live environmental monitoring
          </p>
        </div>

        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold w-fit ${
            darkMode
              ? "bg-emerald-950/40 text-emerald-400"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Data
        </div>
      </div>

      {/* Hero */}

      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5 mb-6">
        {/* IMAGE */}

        <div
          className={`relative h-[300px] sm:h-[360px] rounded-[24px] overflow-hidden border ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          <div className="absolute left-6 bottom-6">
            <p className="m-0 text-xs font-medium text-white/70">
              SmartHaven Room
            </p>

            <h2 className="m-0 mt-1 text-2xl sm:text-3xl font-bold text-white">
              {room.name}
            </h2>
          </div>
        </div>

        {/* Device Information */}

        <div
          className={`rounded-[24px] border p-6 shadow-sm transition-colors duration-300 ${
            darkMode
              ? "border-slate-800 bg-[#111827]"
              : "border-slate-100 bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  darkMode
                    ? "bg-blue-950/50 text-blue-400"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <Smartphone size={21} />
              </div>

              <div>
                <p
                  className={`m-0 text-xs ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Connected Device
                </p>

                <h3
                  className={`m-0 mt-1 text-sm font-bold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {device?.name || "Environment Sensor"}
                </h3>
              </div>
            </div>

            {device?.status === "online" ? (
              <Wifi
                size={19}
                className={darkMode ? "text-emerald-400" : "text-emerald-500"}
              />
            ) : (
              <WifiOff
                size={19}
                className={darkMode ? "text-slate-500" : "text-slate-400"}
              />
            )}
          </div>

          <div className="mt-6 space-y-4">
            <div
              className={`flex items-center justify-between py-3 border-b ${
                darkMode ? "border-slate-800" : "border-slate-100"
              }`}
            >
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Device ID
              </span>

              <span
                className={`text-xs font-bold ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {room.deviceId}
              </span>
            </div>

            <div
              className={`flex items-center justify-between py-3 border-b ${
                darkMode ? "border-slate-800" : "border-slate-100"
              }`}
            >
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Connection
              </span>

              <span
                className={`text-xs font-semibold ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {device?.connection || "Wi-Fi"}
              </span>
            </div>

            <div
              className={`flex items-center justify-between py-3 border-b ${
                darkMode ? "border-slate-800" : "border-slate-100"
              }`}
            >
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Firmware
              </span>

              <span
                className={`text-xs font-semibold ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {device?.firmware || "v1.0.4"}
              </span>
            </div>

            <div className="flex items-center justify-between py-3">
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Last Updated
              </span>

              <span
                className={`text-xs font-semibold ${
                  darkMode ? "text-emerald-400" : "text-emerald-500"
                }`}
              >
                {room.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sensor Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h2
            className={`m-0 text-lg font-bold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            Room Sensor Data
          </h2>

          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Environmental readings from this room
          </p>
        </div>

        <div
          className={`flex items-center gap-2 text-xs ${
            darkMode ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <Clock3 size={15} />
          Updated {room.lastUpdated}
        </div>
      </div>

      {/* Sensor Card */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
        {sensors.map((sensor) => {
          const SensorIcon = sensor.icon;

          return (
            <div
              key={sensor.type}
              className={`relative overflow-hidden h-[155px] rounded-2xl border shadow-[0_4px_20px_rgba(36,68,120,0.05)] transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-slate-800 bg-[#111827] shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
                  : "border-slate-100 bg-white hover:shadow-[0_8px_25px_rgba(36,68,120,0.08)]"
              }`}
            >
              <div className="relative z-10 flex items-start gap-6 p-5">
                <div
                  className={`
                    w-[82px]
                    h-[82px]
                    shrink-0
                    rounded-2xl
                    ${sensor.iconBg}
                    ${sensor.iconColor}
                    flex
                    items-center
                    justify-center
                  `}
                >
                  <SensorIcon size={42} strokeWidth={2} />
                </div>

                <div className="pt-2">
                  <p
                    className={`m-0 text-sm font-medium ${
                      darkMode ? "text-slate-400" : "text-[#34415f]"
                    }`}
                  >
                    {sensor.title}
                  </p>

                  <h3
                    className={`m-0 mt-3 text-[25px] leading-7 font-bold tracking-tight ${
                      darkMode ? "text-white" : "text-[#101936]"
                    }`}
                  >
                    {sensor.value}
                  </h3>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[45px]">
                <svg
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                  className={`absolute bottom-0 left-0 w-full h-[55px] ${sensor.waveColor}`}
                >
                  <path
                    d="
                      M0 35
                      C45 52, 75 28, 115 37
                      C155 47, 175 12, 220 28
                      C270 48, 285 52, 325 32
                      C355 17, 375 31, 400 38
                      L400 60
                      L0 60
                      Z
                    "
                    fill="currentColor"
                    fillOpacity="0.18"
                  />

                  <path
                    d="
                      M0 35
                      C45 52, 75 28, 115 37
                      C155 47, 175 12, 220 28
                      C270 48, 285 52, 325 32
                      C355 17, 375 31, 400 38
                    "
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

      {/* Room Info */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        {/* Status */}

        <div
          className={`border rounded-2xl p-6 shadow-sm ${
            darkMode
              ? "border-slate-800 bg-[#111827]"
              : "border-slate-100 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-emerald-950/50 text-emerald-400"
                  : "bg-emerald-50 text-emerald-600"
              }`}
            >
              <ShieldCheck size={21} />
            </div>

            <div>
              <h3
                className={`m-0 text-sm font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                Room Status
              </h3>

              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Current environmental condition
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span
              className={`text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Overall Safety
            </span>

            <span
              className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                aqiStatus === "Good"
                  ? darkMode
                    ? "bg-emerald-950/50 text-emerald-400"
                    : "bg-emerald-50 text-emerald-600"
                  : aqiStatus === "Moderate"
                    ? darkMode
                      ? "bg-amber-950/50 text-amber-400"
                      : "bg-amber-50 text-amber-600"
                    : darkMode
                      ? "bg-red-950/50 text-red-400"
                      : "bg-red-50 text-red-600"
              }`}
            >
              {aqiStatus}
            </span>
          </div>
        </div>

        {/* Room Information */}

        <div
          className={`border rounded-2xl p-6 shadow-sm ${
            darkMode
              ? "border-slate-800 bg-[#111827]"
              : "border-slate-100 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-blue-950/50 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <Home size={21} />
            </div>

            <div>
              <h3
                className={`m-0 text-sm font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                Room Information
              </h3>

              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Basic room details
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between">
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Room ID
              </span>

              <span
                className={`text-xs font-semibold ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {roomId}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Room Type
              </span>

              <span
                className={`text-xs font-semibold ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {room.type}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Device
              </span>

              <span
                className={`text-xs font-semibold ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {room.deviceId}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Status
              </span>

              <span
                className={`text-xs font-semibold ${
                  room.status === "online"
                    ? darkMode
                      ? "text-emerald-400"
                      : "text-emerald-500"
                    : darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                }`}
              >
                {room.status === "online" ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dummy User Demo */}

      {isDummyUser && (
        <div
          className={`mt-6 flex items-center justify-center gap-2 text-xs ${
            darkMode ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <ShieldCheck
            size={14}
            className={darkMode ? "text-blue-400" : "text-blue-500"}
          />
          Demo device:
          <span
            className={`font-semibold ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {DUMMY_DEVICE_ID}
          </span>
          • Sensor values update automatically
        </div>
      )}
    </div>
  );
};

export default RoomDetailsCard;
