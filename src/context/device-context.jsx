import { createContext, useContext, useState, useEffect } from "react";

import useAuth from "../hooks/useAuth";
import { DUMMY_DEVICE_ID, dummyRooms } from "../db/dummyData";

const DeviceContext = createContext();

const CLAIMED_DEVICE_KEY = "smarthaven_claimed_device";

const DeviceProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [claimedDeviceId, setClaimedDeviceId] = useState("");
  const [deviceClaimed, setDeviceClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [alertData, setAlertData] = useState(null);

  const { isDummyUser } = useAuth();

  // Check Claimed Device

  useEffect(() => {
    const checkClamedDevice = () => {
      const saveDeviceId = localStorage.getItem(CLAIMED_DEVICE_KEY);

      if (saveDeviceId && saveDeviceId.trim()) {
        setClaimedDeviceId(saveDeviceId);
        setDeviceClaimed(true);
      } else {
        setClaimedDeviceId("");
        setDeviceClaimed(false);
        setRooms([]);
      }
    };

    checkClamedDevice();

    window.addEventListener("smarthaven-device-claimed", checkClamedDevice);

    window.addEventListener("smarthaven-device-reset", checkClamedDevice);

    window.addEventListener("storage", checkClamedDevice);

    return () => {
      window.removeEventListener(
        "smarthaven-device-claimed",
        checkClamedDevice,
      );

      window.removeEventListener("smarthaven-device-reset", checkClamedDevice);

      window.removeEventListener("storage", checkClamedDevice);
    };
  },[]);

  // Claim Device

  const handleClaimDevice = () => {
    const enteredDeviceId = deviceId.trim().toUpperCase();

    if (!enteredDeviceId) {
      setAlertData({
        type: "info",
        title: "Device ID Required",
        message: "Please enter your SmartHaven device ID to continue.",
      });
      return;
    }

    if (!isDummyUser) {
      setAlertData({
        type: "error",
        title: "Device Unavailable",
        message: "No real device is available for this account.",
      });
      return;
    }

    if (enteredDeviceId !== DUMMY_DEVICE_ID) {
      setAlertData({
        type: "error",
        title: "Invalid Device ID",
        message:
          "The device ID you entered is not recognized. Please check your device ID and try again.",
        deviceId: DUMMY_DEVICE_ID,
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(CLAIMED_DEVICE_KEY, DUMMY_DEVICE_ID);

      setClaimedDeviceId(DUMMY_DEVICE_ID);
      setDeviceClaimed(true);

      window.dispatchEvent(new Event("smarthaven-device-claimed"));

      setDeviceId("");
      setLoading(false);

      setAlertData({
        type: "success",
        title: "Device Connected!",
        message:
          "Your SmartHaven device has been successfully claimed. Your room sensor data is now available.",
        deviceId: DUMMY_DEVICE_ID,
      });
    }, 700);
  };

  // Load Room After Claim Device

  useEffect(() => {
    if (!isDummyUser || !deviceClaimed) {
      setRooms([]);
      return;
    }

    const saveDevice = localStorage.getItem(CLAIMED_DEVICE_KEY);

    if (saveDevice !== DUMMY_DEVICE_ID) {
      setRooms([]);
      return;
    }

    const initialRoom = dummyRooms.map((room) => ({
      ...room,

      sensors: {
        ...room.sensors,
      },
    }));

    setRooms(initialRoom);

    // Live Random Sensor Update

    const interval = setInterval(() => {
      setRooms((currentRooms) => {
        return currentRooms.map((room) => {
          if (room.status !== "online") {
            return room;
          }

          const current = room.sensors;

          const ranges = room.sensorRanges || {};

          const randomValue = (value, min, max, step) => {
            const change = (Math.random() - 0.5) * step;

            const next = value + change;

            return Number(Math.min(max, Math.max(min, next)).toFixed(1));
          };

          const temperature = randomValue(
            current.temperature,
            ranges.temperature?.min ?? 18,
            ranges.temperature?.max ?? 25,
            ranges.temperature?.step ?? 1.5,
          );

          const humidity = Math.round(
            randomValue(
              current.humidity,
              ranges.humidity?.min ?? 35,
              ranges.humidity?.max ?? 80,
              ranges.humidity?.step ?? 5,
            ),
          );

          const h2 = Math.round(
            randomValue(
              current.h2_ppm,
              ranges.h2_ppm?.min ?? 5,
              ranges.h2_ppm?.max ?? 30,
              ranges.h2_ppm?.step ?? 4,
            ),
          );

          const co = Math.round(
            randomValue(
              current.co_ppm,
              ranges.co_ppm?.min ?? 1,
              ranges.co_ppm?.max ?? 15,
              ranges.co_ppm?.step ?? 2,
            ),
          );

          const ch4 = Math.round(
            randomValue(
              current.ch4_ppm,
              ranges.ch4_ppm?.min ?? 3,
              ranges.ch4_ppm?.max ?? 25,
              ranges.ch4_ppm?.step ?? 4,
            ),
          );

          const aqi = Math.round(
            randomValue(
              current.aqi,
              ranges.aqi?.min ?? 20,
              ranges.aqi?.max ?? 100,
              ranges.aqi?.step ?? 8,
            ),
          );

          return {
            ...room,
            sensors: {
              temperature,
              humidity,
              h2_ppm: h2,
              co_ppm: co,
              ch4_ppm: ch4,
              aqi,
            },

            lastUpdate: "Just now",
          };
        });
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dummyRooms, deviceClaimed]);

  // Reset Devive

  const resetDevice = () => {
    localStorage.removeItem(CLAIMED_DEVICE_KEY);

    setClaimedDeviceId("");
    setDeviceClaimed(false);
    setDeviceId("");
    setRooms([]);
  };

  return (
    <DeviceContext.Provider
      value={{
        search,
        deviceId,
        claimedDeviceId,
        deviceClaimed,
        loading,
        rooms,
        alertData,
        setSearch,
        setDeviceId,
        setClaimedDeviceId,
        setDeviceClaimed,
        setLoading,
        setRooms,
        setAlertData,
        handleClaimDevice,
        CLAIMED_DEVICE_KEY,
        DUMMY_DEVICE_ID,
        isDummyUser,
        resetDevice,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

const useDevice = () => useContext(DeviceContext);

export { DeviceProvider, useDevice };
