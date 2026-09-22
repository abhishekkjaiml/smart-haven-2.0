import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDevice } from "../../context/device-context";

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
import { div } from "framer-motion/client";

const RoomDetailsCard = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const { rooms, deviceClaimed, isDummyUser } = useDevice();

  // find room using url id

  const room = useMemo(() => {
    if (!roomId || !rooms.length) {
      return null;
    }

    return rooms.find((item) => item.id === String(roomId));
  }, [roomId, rooms]);

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
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500",
      waveColor: "text-rose-300",
    },

    {
      type: "humidity",
      title: "Humidity",
      value: `${room.sensors.humidity} %`,
      icon: Droplets,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      waveColor: "text-blue-300",
    },

    {
      type: "h2",
      title: "H₂ Gas",
      value: `${room.sensors.h2_ppm} ppm`,
      icon: Wind,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-500",
      waveColor: "text-violet-300",
    },

    {
      type: "co",
      title: "CO Gas",
      value: `${room.sensors.co_ppm} ppm`,
      icon: Flame,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      waveColor: "text-orange-300",
    },

    {
      type: "ch4",
      title: "CH₄ Gas",
      value: `${room.sensors.ch4_ppm} ppm`,
      icon: Leaf,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      waveColor: "text-emerald-300",
    },

    {
      type: "aqi",
      title: "AQI",
      value: `${room.sensors.aqi}`,
      icon: Wind,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-500",
      waveColor: "text-cyan-300",
    },
  ];

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => navigate("/rooms")}
        className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition cursor-pointer"
      >
        <ArrowLeft size={18} />
        Back to Rooms
      </button>

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="m-0 text-[28px] font-bold text-slate-800">
              {room.name}
            </h1>

            <span
              className={`
                px-3 py-1 rounded-full
                text-xs font-semibold
                flex items-center gap-2
                ${
                  room.status === "online"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-slate-100 text-slate-500"
                }
              `}
            >
              <span
                className={`
                  w-2 h-2 rounded-full
                  ${
                    room.status === "online"
                      ? "bg-emerald-500 animate-pulse"
                      : "bg-slate-400"
                  }
                `}
              />

              {room.status === "online" ? "Online" : "Offline"}
            </span>
          </div>

          <p className="m-0 mt-1 text-sm text-slate-500">
            {room.type} • Live environmental monitoring
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold w-fit bg-emerald-50 text-emerald-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Data
        </div>
      </div>

      {/* Hero */}

      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5 mb-6">
        {/* IMAGE */}

        <div className="relative h-[300px] sm:h-[360px] rounded-[24px] overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />

          <div  className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div  className="absolute left-6 bottom-6">
            <p  className="m-0 text-xs font-medium text-white/70">SmartHaven Room</p>

            <h2 className="m-0 mt-1 text-2xl sm:text-3xl font-bold text-white">{room.name}</h2>
          </div>
        </div>

        {/* Device Information */}

        <div  className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
          <div  className="flex items-center justify-between">
            <div  className="flex items-center gap-3">
              <div  className="w-11 h-11 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600">
                <Smartphone size={21} />
              </div>

              <div>
                <p  className="m-0 text-xs text-slate-400">Connected Device</p>

                <h3 className="m-0 mt-1 text-sm font-bold text-slate-800">{device?.name || "Environment Sensor"}</h3>
              </div>
            </div>

            {device?.status === "online" ? (
              <Wifi size={19}
              className="text-emerald-500"
             />
            ) : (
              <WifiOff size={19} 
              className="text-slate-400"  
            />
            )}
          </div>

          <div  className="mt-6 space-y-4">
            <div  className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-xs text-slate-400">Device ID</span>

              <span className="text-xs font-bold text-slate-700">{room.deviceId}</span>
            </div>

            <div  className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-xs text-slate-400">Connection</span>

              <span className="text-xs font-semibold text-slate-700">{device?.connection || "Wi-Fi"}</span>
            </div>

            <div  className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-xs text-slate-400">Firmware</span>

              <span className="text-xs font-semibold text-slate-700">{device?.firmware || "v1.0.4"}</span>
            </div>

            <div  className="flex items-center justify-between py-3">
              <span className="text-xs text-slate-400">Last Updated</span>

              <span className="text-xs font-semibold text-emerald-500">{room.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sensor Header */}

      <div  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h2 className="m-0 text-lg font-bold text-slate-800">Room Sensor Data</h2>

          <p  className="m-0 mt-1 text-xs text-slate-400">Environmental readings from this room</p>
        </div>

        <div  className="flex items-center gap-2 text-xs text-slate-400">
          <Clock3 size={15} />
          Updated {room.lastUpdated}
        </div>
      </div>

      {/* Sensor Card */}

      <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
        {sensors.map((sensor) => {
          const SensorIcon = sensor.icon;

          return (
            <div 
              key={sensor.type}
              className="relative overflow-hidden h-[155px] rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(36,68,120,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(36,68,120,0.08)]"  
            >
              <div  className="relative z-10 flex items-start gap-6 p-5">
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

                <div  className="pt-2">
                  <p  className="m-0 text-sm font-medium text-[#34415f]">{sensor.title}</p>

                  <h3 className="m-0 mt-3 text-[25px] leading-7 font-bold tracking-tight text-[#101936]">{sensor.value}</h3>
                </div>
              </div>

              <div  className="absolute bottom-0 left-0 right-0 h-[45px]">
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

      <div  className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        
        {/* Status */}

        <div  className="border border-slate-100 bg-white rounded-2xl p-6 shadow-sm">
          <div  className="flex items-center gap-3">
            <div  className="w-11 h-11 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600">
              <ShieldCheck size={21} />
            </div>

            <div>
              <h3 className="m-0 text-sm font-bold text-slate-800">Room Status</h3>

              <p  className="m-0 mt-1 text-xs text-slate-400">Current environmental condition</p>
            </div>
          </div>

          <div  className="mt-5 flex items-center justify-between">
            <span className="text-sm text-slate-500">Overall Safety</span>

            <span 
              className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                aqiStatus === "Good"
                  ? "bg-emerald-50 text-emerald-600"
                  : aqiStatus === "Moderate"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-red-50 text-red-600"
              }`}
            >{aqiStatus}</span>
          </div>
        </div>

        {/* Room Information */}

        <div  className="border border-slate-100 bg-white rounded-2xl p-6 shadow-sm">
          <div  className="flex items-center gap-3">
            <div  className="w-11 h-11 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600">
              <Home size={21} />
            </div>

            <div>
              <h3 className="m-0 text-sm font-bold text-slate-800">Room Information</h3>

              <p  className="m-0 mt-1 text-xs text-slate-400">Basic room details</p>
            </div>
          </div>

          <div  className="mt-5 space-y-3">
            <div  className="flex items-center justify-between"> 
              <span className="text-xs text-slate-400">Room ID</span>

              <span className="text-xs font-semibold text-slate-700">{roomId}</span>
            </div>

            <div  className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Room Type</span>

              <span className="text-xs font-semibold text-slate-700">{room.type}</span>
            </div>

            <div  className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Device</span>

              <span className="text-xs font-semibold text-slate-700">{room.deviceId}</span>
            </div>

            <div  className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Status</span>

              <span 
                className={`text-xs font-semibold ${
                  room.status === "online"
                    ? "text-emerald-500"
                    : "text-slate-500"
                }`}
              >{room.status === "online" ? "Online" : "Offline"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dummy User Demo */}

      {isDummyUser && (
        <div  className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck 
            size={14} 
            className="text-blue-500"
          />
          Demo device:
          <span className="font-semibold text-blue-600">
            {DUMMY_DEVICE_ID}
          </span>
          • Sensor values update automatically
        </div>
      )}
    </div>
  );
};

export default RoomDetailsCard;
