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
    <div>
      <button
        type="button"
        onClick={() => navigate("/rooms")}
        className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition cursor-pointer"
      >
        <ArrowLeft size={18} />
        Back to Rooms
      </button>

      {/* Header */}

      <div>
        <div>
          <div>
            <h1>{room.name}</h1>

            <span>
              <span />
              {room.status === "online" ? "Online" : "Offline"}
            </span>
          </div>

          <p>{room.type} • Live environmental monitoring</p>
        </div>

        <div>
          <span>Live Data</span>
        </div>
      </div>

      {/* Hero */}

      <div>
        <div>
          {/* image */}

          <div>
            <img src={room.image} alt={room.name} />

            <div />

            <div>
              <p>SmartHaven Room</p>

              <h2>{room.name}</h2>
            </div>
          </div>

          {/* Device Information */}

          <div>
            <div>
              <div>
                <div>
                  <Smartphone size={21} />
                </div>
                <div>
                  <p>Connected Device</p>
                  <h3>{device?.name || "Environment Sensor"}</h3>
                </div>
              </div>

              {device?.status === "online" ? (
                <Wifi size={19} />
              ) : (
                <WifiOff size={19} />
              )}
            </div>

            <div>
              <div>
                <span>Device ID</span>
                <span>{room.deviceId}</span>
              </div>

              <div>
                <span>Connection</span>
                <span>{device?.connection || "Wi-Fi"}</span>
              </div>

              <div>
                <span>Firmware</span>
                <span>{device?.firmware || "v1.0.4"}</span>
              </div>

              <div>
                <span>Last Updated</span>
                <span>{room.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Header */}

        <div>
          <div>
            <h2>Room Sensor Data</h2>
            <p>Environmental readings from this room</p>
          </div>

          <div>
            <Clock3 size={15} />
            Updated {room.lastUpdated}
          </div>
        </div>

        {/* Sensor Card */}

        <div>
          {sensors.map((sensor) => {
            const SensorIcon = sensor.icon;

            return (
              <div key={sensor.type}>
                <div>
                  <div>
                    <SensorIcon size={42} strokeWidth={2} />
                  </div>

                  <div>
                    <p>{sensor.title}</p>
                    <h3>{sensor.value}</h3>
                  </div>
                </div>

                <div>
                  <svg viewBox="0 0 400 60" preserveAspectRatio="none">
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
                      strokeWidth={"1.2"}
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Room Information */}

        <div>
          <div>
            <div>
              <div>
                <ShieldCheck size={21} />
              </div>
              <div>
                <h3>Room Status</h3>
                <p>Current environmental condition</p>
              </div>
            </div>

            <div>
              <span>Overall Safety</span>

              <span>{aqiStatus}</span>
            </div>
          </div>

          {/* Room Information */}

          <div>
            <div>
              <div>
                <Home size={21} />
              </div>
              <div>
                <h3>Room Information</h3>
                <p>Basic room details</p>
              </div>
            </div>

            <div>
              <div>
                <span>Room ID</span>
                <span>{roomId}</span>
              </div>

              <div>
                <span>Room Type</span>

                <span>{room.type}</span>
              </div>

              <div>
                <span>Device</span>

                <span>{room.deviceId}</span>
              </div>

              <div>
                <span>Status</span>
                <span>{room.status === "online" ? "Online" : "Offline"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dummy User Demo */}

        {isDummyUser && (
          <div>
            <ShieldCheck size={14} />
            Demo Device:
            <span>{DUMMY_DEVICE_ID}</span>• Sensor values update automatically
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDetailsCard;
