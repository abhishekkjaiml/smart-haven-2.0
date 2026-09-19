import { createContext, useContext, useState, useEffect } from "react";

import useAuth from "../hooks/useAuth";
import { DUMMY_DEVICE_ID } from "../db/dummyData";

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
  });

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

  // Reset Devive

  const resetDevice = () => {
    localStorage.removeItem(CLAIMED_DEVICE_KEY);

    setClaimedDeviceId('');
    setDeviceClaimed(false);
    setDeviceId('');
    setRooms([]);
  }

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
        resetDevice
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

const useDevice = () => useContext(DeviceContext);

export { DeviceProvider, useDevice };
