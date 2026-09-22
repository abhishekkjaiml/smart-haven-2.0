import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDevice } from "../../context/device-context";

import { dummyDevices, DUMMY_DEVICE_ID } from "../../db/dummyData";
import { Droplets, Flame, Leaf, Thermometer, Wind } from "lucide-react";

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

  // const device = useMemo(() => {
  //   if (!room?.deviceId) {
  //     return null;
  //   }

  //   return dummyDevices.find((item) => item.id === room.deviceId);
  // }, [room]);

  // AQI Status

  const getAquiStatus = (aqi) => aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : "Poor"

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

  return <div>RoomDetailsCard {aqiStatus}</div>;
};

export default RoomDetailsCard;
