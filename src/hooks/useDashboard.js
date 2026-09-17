import { useEffect, useRef, useState } from "react";

import { auth } from "../services/firebase";
import { socket, BACKEND_URL } from "../services/socket";
import { DUMMY_DEVICE_ID, dummySensorData } from "../db/dummyData";

import { useOutletContext } from "react-router-dom";

const useDashboard = ({ isDummyUser = false }) => {
  const { onMenuClick } = useOutletContext();

  const [deviceId, setDeviceId] = useState(
    localStorage.getItem("smarthaven_device_id") || "",
  );
  const [data, setData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("smarthaven_sensor_data") || "{}");
    } catch {
      return {};
    }
  });
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [deviceClaimed, setDeviceClaimed] = useState(
    Boolean(localStorage.getItem("smarthaven_device_id")),
  );
  const [claimedDeviceId, setClaimedDeviceId] = useState(
    localStorage.getItem("smarthaven_device_id") || "",
  );
  const [lastUpdated, setLastUpdated] = useState("--:--:--");

  const [alertData, setAlertData] = useState(null);

  const dummyInterval = useRef(null);

  const isDemo =
    isDummyUser || localStorage.getItem("smarthaven_dummy_user") === "true";

  // Update last updated time

  const updateTime = () => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setLastUpdated(time);
  };

  // Stop dummy data

  const stopDummyData = () => {
    if (dummyInterval.current) {
      clearInterval(dummyInterval.current);
      dummyInterval.current = null;
    }
  };

  // Start dummy data

  const startDummyData = () => {
    stopDummyData();

    let currentData = {
      ...dummySensorData,
    };

    setData(currentData);
    setDeviceClaimed(true);
    setClaimedDeviceId(DUMMY_DEVICE_ID);

    localStorage.setItem(
      'smarthaven_device_id',
      DUMMY_DEVICE_ID,
    )

    localStorage.setItem(
      'smarthaven_sensor_data',
      JSON.stringify(currentData)
    )

    updateTime();

    dummyInterval.current = setInterval(() => {
      const randomValue = (value, min, max, step) => {
        const change = (Math.random() - 0.5) * step;
        const nextValue = value + change;

        return Number(Math.min(max, Math.max(min, nextValue)).toFixed(1));
      };

      currentData = {
        temperature: randomValue(
          currentData.temperature ?? dummySensorData.temperature,
          20,
          35,
          1.5,
        ),

        humidity: Math.round(
          randomValue(
            currentData.humidity ?? dummySensorData.humidity,
            35,
            80,
            5,
          ),
        ),

        h2_ppm: Math.round(
          randomValue(currentData.h2_ppm ?? dummySensorData.h2_ppm, 5, 30, 4),
        ),

        co_ppm: Math.round(
          randomValue(currentData.co_ppm ?? dummySensorData.co_ppm, 1, 15, 2),
        ),

        ch4_ppm: Math.round(
          randomValue(currentData.ch4_ppm ?? dummySensorData.ch4_ppm, 3, 25, 4),
        ),

        aqi: Math.round(
          randomValue(currentData.aqi ?? dummySensorData.aqi, 20, 100, 8),
        ),
      };

      setData(currentData);

      localStorage.setItem(
        'smarthaven_sensor_data',
        JSON.stringify(currentData),
      )
      updateTime();
    }, 2000);
  };

  // Cleanup

  useEffect(() => {
    return () => {
      stopDummyData();
      socket.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    const savedDeviceId = localStorage.getItem("smarthaven_device_id");

    if (!savedDeviceId) {
      return;
    }

    setDeviceId(savedDeviceId);
    setClaimedDeviceId(savedDeviceId);
    setDeviceClaimed(true);

    socket.off(`update-${savedDeviceId}`);
    socket.on(`update-${savedDeviceId}`, (sensorData) => {
      if (!sensorData) {
        return;
      }

      setData(sensorData);

      localStorage.setItem(
        "smarthaven_sensor_data",
        JSON.stringify(sensorData),
      );

      updateTime();
    });

    return () => {
      socket.off(`update-${savedDeviceId}`);
    };
  }, []);

  // Device input

  const handleDeviceChange = (value) => {
    const newDeviceId = value.toUpperCase();

    setDeviceId(newDeviceId);

    if (claimedDeviceId && newDeviceId.trim() !== claimedDeviceId) {
      stopDummyData();
      socket.removeAllListeners();

      setDeviceClaimed(false);
      setClaimedDeviceId("");
      setData({});
      setLastUpdated("--:--:--");
    }

    if (!newDeviceId.trim()) {
      stopDummyData();
      socket.removeAllListeners();

      setDeviceClaimed(false);
      setClaimedDeviceId("");
      setData({});
      setLastUpdated("--:--:--");
    }
  };

  // Claim device

  const claimDevice = async () => {
    const enteredId = deviceId.trim().toUpperCase();

    if (!enteredId) {
      setAlertData({
        type: "error",
        title: "Device ID Required",
        message: "Please enter your SmartHaven Device ID before continuing.",
      });

      return;
    }

    if (loading) {
      return;
    }

    stopDummyData();
    socket.removeAllListeners();

    setDeviceClaimed(false);
    setClaimedDeviceId("");
    setData({});
    setLastUpdated("--:--:--");

    // Demo user

    if (isDemo) {
      if (enteredId !== DUMMY_DEVICE_ID) {
        setAlertData({
          type: "error",
          title: "Invalid Demo Device",
          message:
            "The Device ID you entered is not valid for the demo account.",
          deviceId: DUMMY_DEVICE_ID,
        });

        return;
      }

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        setDeviceId(DUMMY_DEVICE_ID);

        startDummyData();

        setAlertData({
          type: "success",
          title: "Demo Device Connected",
          message:
            "Your demo device has been connected successfully. Live sensor data is now available.",
          deviceId: DUMMY_DEVICE_ID,
        });
      }, 600);

      return;
    }

    // Prevent demo device for real users

    if (enteredId === DUMMY_DEVICE_ID) {
      setAlertData({
        type: "error",
        title: "Demo Device Detected",
        message:
          "This device is reserved for the SmartHaven demo account. Please login using the Demo Account to use it.",
        deviceId: DUMMY_DEVICE_ID,
      });

      return;
    }

    try {
      setLoading(true);

      const token = await auth.currentUser?.getIdToken();

      if (!token) {
        setAlertData({
          type: "error",
          title: "Authentication Required",
          message:
            "Your login session could not be verified. Please login again and try claiming the device.",
        });

        return;
      }

      const response = await fetch(`${BACKEND_URL}/claim-device`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          deviceId: enteredId,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        setAlertData({
          type: "error",
          title: "Device Claim Failed",
          message:
            result?.message ||
            result?.error ||
            "We could not claim this device. Please check the Device ID and try again.",
        });

        return;
      }

      setDeviceClaimed(true);
      setClaimedDeviceId(enteredId);
      setDeviceId(enteredId);

      localStorage.setItem("smarthaven_device_id", enteredId);

      socket.off(`update-${enteredId}`);

      socket.on(`update-${enteredId}`, (sensorData) => {
        if (!sensorData) {
          return;
        }

        setData(sensorData);

        localStorage.setItem(
          "smarthaven_sensor_data",
          JSON.stringify(sensorData),
        );
        updateTime();
      });

      setAlertData({
        type: "success",
        title: "Device Claimed Successfully",
        message:
          "Your SmartHaven device has been connected successfully. Live sensor data is now available.",
        deviceId: enteredId,
      });
    } catch (error) {
      console.error(error);

      setAlertData({
        type: "error",
        title: "Server Error",
        message:
          "Something went wrong while connecting to the server. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  // User

  const user = auth.currentUser;

  const userName = isDemo
    ? "Demo User"
    : user?.displayName || user?.email?.split("@")[0] || "User";

  const userInitial = userName.charAt(0).toUpperCase();

  const clearDevice = () => {
    stopDummyData();

    socket.removeAllListeners();

    setDeviceId("");
    setDeviceClaimed(false);
    setClaimedDeviceId("");
    setData({});
    setLastUpdated("--:--:--");

    localStorage.removeItem("smarthaven_device_id");
    localStorage.removeItem("smarthaven_sensor_data");
  };

  return {
    onMenuClick,

    deviceId,
    data,
    loading,
    darkMode,
    setDarkMode,
    deviceClaimed,
    claimedDeviceId,
    lastUpdated,
    alertData,
    setAlertData,

    isDemo,

    user,
    userName,
    userInitial,

    handleDeviceChange,
    claimDevice,

    startDummyData,
    stopDummyData,

    clearDevice,
  };
};

export default useDashboard;
