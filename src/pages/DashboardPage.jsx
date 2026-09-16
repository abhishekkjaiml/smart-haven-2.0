import { useEffect, useRef, useState } from "react";

import {
  Thermometer,
  Droplets,
  Wind,
  Flame,
  Leaf,
  Plus,
  RefreshCw,
  Link2,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  CalendarDays,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Info,
  X,
} from "lucide-react";

import { auth } from "../services/firebase";
import { socket, BACKEND_URL } from "../services/socket";
import { DUMMY_DEVICE_ID, dummySensorData } from "../db/dummyData";

import backgroundBG1 from "../assets/dashboardBG.png";

const Dashboard = ({ isDummyUser = false }) => {
  const [deviceId, setDeviceId] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [deviceClaimed, setDeviceClaimed] = useState(false);
  const [claimedDeviceId, setClaimedDeviceId] = useState("");
  const [lastUpdated, setLastUpdated] = useState("--:--:--");

  const [alertData, setAlertData] = useState(null);

  const dummyInterval = useRef(null);

  const isDemo = isDummyUser || localStorage.getItem("smarthaven_dummy_user") === "true";

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

    updateTime();

    dummyInterval.current = setInterval(() => {
      const randomValue = (value, min, max, step) => {
        const change = (Math.random() - 0.5) * step;
        const nextValue = value + change;

        return Number(Math.min(max, Math.max(min, nextValue)).toFixed(1));
      };

      currentData = {
        temperature: randomValue( currentData.temperature ?? dummySensorData.temperature, 20, 35, 1.5, ),

        humidity: Math.round( randomValue(
          currentData.humidity ?? dummySensorData.humidity, 35, 80, 5, ),
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

      socket.off(`update-${enteredId}`);

      socket.on(`update-${enteredId}`, (sensorData) => {
        if (!sensorData) {
          return;
        }

        setData(sensorData);
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

  // Sensor cards
  const sensorCards = [
    {
      type: "temperature",
      title: "Temperature",
      value: `${data.temperature ?? "--"} °C`,
      icon: Thermometer,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500",
      waveColor: "text-rose-300",
    },

    {
      type: "humidity",
      title: "Humidity",
      value: `${data.humidity ?? "--"} %`,
      icon: Droplets,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      waveColor: "text-blue-300",
    },

    {
      type: "h2",
      title: "H₂ Gas",
      value: `${data.h2_ppm ?? "--"} ppm`,
      icon: Wind,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-500",
      waveColor: "text-violet-300",
    },

    {
      type: "co",
      title: "CO Gas",
      value: `${data.co_ppm ?? "--"} ppm`,
      icon: Flame,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      waveColor: "text-orange-300",
    },

    {
      type: "ch4",
      title: "CH₄ Gas",
      value: `${data.ch4_ppm ?? "--"} ppm`,
      icon: Leaf,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      waveColor: "text-emerald-300",
    },

    {
      type: "aqi",
      title: "AQI",
      value: `${data.aqi ?? "--"}`,
      icon: Wind,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-500",
      waveColor: "text-cyan-300",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#0b1220]" : "bg-[#f5f8fc]"
      }`}
    >
      {/* =========================================================
          HEADER
      ========================================================= */}

      <header
        className={` top-0 z-40 border-b backdrop-blur-xl ${
          darkMode
            ? "bg-[#0b1220]/90 border-white/5"
            : "bg-white/85 border-slate-200/70"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            {/* Welcome */}

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDemo ? "bg-blue-500" : "bg-emerald-500"
                  }`}
                />

                <span
                  className={`text-[10px] uppercase tracking-[1.5px] font-bold ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {isDemo ? "Demo Environment" : "Smart Environment"}
                </span>
              </div>

              <h1
                className={`m-0 text-[29px] sm:text-[34px] lg:text-[36px] leading-tight font-bold tracking-[-1.2px] ${
                  darkMode ? "text-white" : "text-[#101936]"
                }`}
              >
                Welcome Back!
              </h1>

              <p
                className={`m-0 mt-1.5 text-sm sm:text-base ${
                  darkMode ? "text-slate-400" : "text-[#6d7c9c]"
                }`}
              >
                Monitor your home environment in real-time
              </p>
            </div>

            {/* Right Header */}

            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-5">
              {/* Theme */}

              <div
                className={`flex items-center gap-2 rounded-full px-2.5 py-1.5 border ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <Sun
                  size={17}
                  className={darkMode ? "text-slate-500" : "text-amber-500"}
                />

                <button
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-12.5 h-6.75 rounded-full border cursor-pointer transition-colors duration-300 ${
                    darkMode
                      ? "bg-blue-600 border-blue-600"
                      : "bg-slate-200 border-slate-200"
                  }`}
                >
                  <span
                    className={`absolute top-0.75 w-4.75 h-4.75 rounded-full bg-white shadow-md transition-all duration-300 ${
                      darkMode ? "left-6.75" : "left-0.75"
                    }`}
                  />
                </button>

                <Moon
                  size={17}
                  className={darkMode ? "text-blue-400" : "text-slate-400"}
                />
              </div>

              <div
                className={`hidden sm:block w-px h-11 ${
                  darkMode ? "bg-white/10" : "bg-slate-200"
                }`}
              />

              {/* User */}

              <div className="flex items-center gap-3">
                <div
                  className={`relative w-11 h-11 rounded-2xl flex items-center justify-center text-white text-base font-bold shadow-lg ${
                    isDemo
                      ? "bg-linear-to-br from-blue-500 to-cyan-500 shadow-blue-200"
                      : "bg-linear-to-br from-[#3949c9] to-[#2c3bb7] shadow-indigo-200"
                  }`}
                >
                  {userInitial}

                  <span
                    className={`absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full border-2 ${
                      darkMode ? "border-[#0b1220]" : "border-white"
                    } bg-emerald-500`}
                  />
                </div>

                <div className="hidden sm:block">
                  <div className="flex items-center gap-2">
                    <p
                      className={`m-0 text-sm font-bold ${
                        darkMode ? "text-white" : "text-[#101936]"
                      }`}
                    >
                      {userName}
                    </p>

                    <ChevronDown
                      size={15}
                      className={darkMode ? "text-slate-500" : "text-slate-400"}
                    />
                  </div>

                  <p
                    className={`m-0 mt-0.5 text-[11px] ${
                      darkMode ? "text-slate-500" : "text-[#7484a5]"
                    }`}
                  >
                    Stay Safe, Stay Healthy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Date */}

          <div className="flex justify-end mt-4">
            <div
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border ${
                darkMode
                  ? "bg-white/5 border-white/10 text-slate-400"
                  : "bg-slate-50/80 border-slate-200/70 text-[#7484a5]"
              }`}
            >
              <CalendarDays size={17} />

              <div>
                <p className="m-0 text-[11px] sm:text-xs font-medium">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>

                <p className="m-0 mt-0.5 text-[11px] sm:text-xs">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          CLAIM DEVICE
      ========================================================= */}

      <main>
        <section className="px-4 sm:px-6 lg:px-8 mt-6">
          <div
            className={`relative overflow-hidden rounded-[26px] border shadow-[0_8px_35px_rgba(36,68,120,0.07)] ${
              darkMode
                ? "border-white/10 bg-[#111c2e]"
                : "border-white bg-white"
            }`}
          >
            {/* Background decoration */}

            <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

            <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full bg-cyan-100/30 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 p-5 sm:p-7 lg:px-8 lg:py-6">
              {/* Icon */}

              <div
                className={`relative w-18 h-18 shrink-0 rounded-[22px] flex items-center justify-center ${
                  darkMode
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-linear-to-br from-blue-50 to-cyan-50 text-blue-600"
                }`}
              >
                <div className="absolute inset-2 rounded-[17px] border border-blue-200/40" />

                <Link2 size={34} strokeWidth={2.3} />
              </div>

              {/* Content */}

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h2
                    className={`m-0 text-xl sm:text-[22px] font-bold ${
                      darkMode ? "text-white" : "text-[#101936]"
                    }`}
                  >
                    Claim Device
                  </h2>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      isDemo
                        ? "bg-blue-50 text-blue-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {isDemo ? "Demo Mode" : "Connected Account"}
                  </span>
                </div>

                <p
                  className={`m-0 mt-1.5 text-sm ${
                    darkMode ? "text-slate-400" : "text-[#7180a0]"
                  }`}
                >
                  Enter your IoT device ID to start monitoring
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  {/* Input */}

                  <div className="relative w-full sm:max-w-115">
                    <Smartphone
                      size={18}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                        darkMode ? "text-slate-500" : "text-[#8291b0]"
                      }`}
                    />

                    <input
                      type="text"
                      placeholder="Enter Device ID"
                      value={deviceId}
                      onChange={(e) => handleDeviceChange(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          claimDevice();
                        }
                      }}
                      disabled={loading}
                      className={`w-full h-13 pl-11 pr-4 rounded-[14px] border text-sm outline-none transition ${
                        darkMode
                          ? "bg-[#0c1626] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          : "bg-white border-slate-200 text-slate-800 placeholder:text-[#8997b4] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      }`}
                    />
                  </div>

                  {/* Claim Button */}

                  <button
                    type="button"
                    onClick={claimDevice}
                    disabled={loading}
                    className="h-13 sm:w-47.5 px-6 rounded-[14px] border-none bg-linear-to-r from-[#3578f6] to-[#3471eb] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(52,113,235,0.22)] hover:shadow-[0_10px_25px_rgba(52,113,235,0.30)] hover:from-[#2869e5] hover:to-[#2d63d4] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 active:scale-[0.98]"
                  >
                    {loading ? (
                      <>
                        <RefreshCw size={18} className="animate-spin" />
                        Claiming...
                      </>
                    ) : (
                      <>
                        <Plus size={19} />
                        Claim Device
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-2.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isDemo ? "bg-blue-500" : "bg-emerald-500"
                    }`}
                  />

                  <p
                    className={`m-0 text-[10px] ${
                      darkMode ? "text-slate-500" : "text-[#8997b4]"
                    }`}
                  >
                    {isDemo
                      ? `Demo Device ID: ${DUMMY_DEVICE_ID}`
                      : "Real Firebase account"}
                  </p>
                </div>
              </div>

              {/* Illustration */}

              <div className="hidden lg:flex w-70 xl:w-[320px] h-37.5 shrink-0 items-center justify-center overflow-hidden">
                <img
                  src={backgroundBG1}
                  alt=""
                  className="w-full h-full object-contain scale-[1.18] drop-shadow-[0_15px_25px_rgba(50,100,160,0.12)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            NO DEVICE
        ========================================================= */}

        {!deviceClaimed && (
          <section className="px-4 sm:px-6 lg:px-8 mt-7">
            <div
              className={`relative overflow-hidden min-h-50 rounded-[26px] border flex flex-col sm:flex-row items-start sm:items-center gap-5 px-5 sm:px-8 py-7 shadow-[0_6px_25px_rgba(36,68,120,0.05)] ${
                darkMode
                  ? "bg-[#111c2e] border-white/10"
                  : "bg-white border-slate-100"
              }`}
            >
              {/* Decorative */}

              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-blue-50/70 blur-3xl" />

              <div
                className={`relative w-17.5 h-17.5 shrink-0 rounded-[20px] flex items-center justify-center ${
                  darkMode
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-blue-50 text-blue-500"
                }`}
              >
                <Link2 size={31} />
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <h2
                    className={`m-0 text-xl font-bold ${
                      darkMode ? "text-white" : "text-[#101936]"
                    }`}
                  >
                    Connect Your Smart Home
                  </h2>

                  <span
                    className={`text-[9px] font-semibold px-2 py-1 rounded-full ${
                      darkMode
                        ? "bg-white/5 text-slate-500"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    DEVICE SETUP
                  </span>
                </div>

                <p
                  className={`m-0 mt-2 max-w-175 text-sm leading-6 ${
                    darkMode ? "text-slate-400" : "text-[#7180a0]"
                  }`}
                >
                  {isDemo
                    ? "Use SH-ESP32-001 to connect the demo device and view simulated sensor data."
                    : "Claim your SmartHaven device to start monitoring your home's temperature, humidity, gases and air quality in real-time."}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <div
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
                      darkMode
                        ? "bg-white/5 border-white/5"
                        : "bg-blue-50/60 border-blue-50"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                      <Wind size={15} />
                    </div>

                    <span
                      className={`text-[11px] font-semibold ${
                        darkMode ? "text-slate-400" : "text-[#7180a0]"
                      }`}
                    >
                      Real-time monitoring
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
                      darkMode
                        ? "bg-white/5 border-white/5"
                        : "bg-emerald-50/60 border-emerald-50"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <Leaf size={15} />
                    </div>

                    <span
                      className={`text-[11px] font-semibold ${
                        darkMode ? "text-slate-400" : "text-[#7180a0]"
                      }`}
                    >
                      Smart safety insights
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-slate-400 opacity-60" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-slate-400" />
                  </span>

                  <span
                    className={`text-[11px] ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    No device connected
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            SENSOR DATA
        ========================================================= */}

        {deviceClaimed && (
          <>
            {/* Sensor Header */}

            <section className="px-4 sm:px-6 lg:px-8 mt-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2
                      className={`m-0 text-xl sm:text-2xl font-bold ${
                        darkMode ? "text-white" : "text-[#101936]"
                      }`}
                    >
                      Sensor Data
                    </h2>

                    <div
                      className={`flex items-center gap-2 px-2.5 py-1 rounded-full ${
                        darkMode ? "bg-emerald-500/10" : "bg-emerald-50"
                      }`}
                    >
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 animate-ping opacity-60" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                      </span>

                      <span
                        className={`text-[10px] sm:text-xs font-semibold ${
                          darkMode ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      >
                        {isDemo ? "Demo Live Data" : "Live data"}
                      </span>
                    </div>
                  </div>

                  <p
                    className={`m-0 mt-1.5 text-xs ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    Real-time environmental readings from your connected device
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`h-10 px-3.5 rounded-xl border flex items-center gap-2 text-[11px] ${
                      darkMode
                        ? "bg-[#111c2e] border-white/10 text-slate-400"
                        : "bg-white border-slate-200 text-[#7180a0]"
                    }`}
                  >
                    <Clock3 size={16} />

                    <span className="hidden sm:inline">Last updated:</span>

                    <span className="font-semibold">{lastUpdated}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (isDemo) {
                        startDummyData();
                      } else {
                        window.location.reload();
                      }
                    }}
                    className="h-10 px-4 rounded-xl border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-blue-100 hover:border-blue-200 transition"
                  >
                    <RefreshCw size={15} />
                    Refresh
                  </button>
                </div>
              </div>
            </section>

            {/* Cards */}

            <section className="px-4 sm:px-6 lg:px-8 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {sensorCards.map((sensor) => {
                  const Icon = sensor.icon;

                  return (
                    <div
                      key={sensor.type}
                      className={`group relative overflow-hidden h-41.25 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                        darkMode
                          ? "bg-[#111c2e] border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-white/15"
                          : "bg-white border-slate-100 shadow-[0_5px_25px_rgba(36,68,120,0.06)] hover:shadow-[0_15px_35px_rgba(36,68,120,0.11)]"
                      }`}
                    >
                      {/* Top subtle shine */}

                      <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-slate-50/70 blur-2xl group-hover:scale-125 transition-transform duration-500" />

                      <div className="relative z-10 flex items-center gap-5 p-5">
                        <div
                          className={`w-20.5 h-20.5 shrink-0 rounded-[22px] ${sensor.iconBg} ${sensor.iconColor} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}
                        >
                          <Icon size={39} strokeWidth={2} />
                        </div>

                        <div className="pt-1 min-w-0">
                          <p
                            className={`m-0 text-xs sm:text-sm font-semibold ${
                              darkMode ? "text-slate-400" : "text-[#52617d]"
                            }`}
                          >
                            {sensor.title}
                          </p>

                          <h3
                            className={`m-0 mt-2.5 text-[26px] leading-8 font-bold tracking-[-0.7px] ${
                              darkMode ? "text-white" : "text-[#101936]"
                            }`}
                          >
                            {sensor.value}
                          </h3>

                          <div className="flex items-center gap-1.5 mt-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

                            <span
                              className={`text-[9px] ${
                                darkMode ? "text-slate-500" : "text-slate-400"
                              }`}
                            >
                              Monitoring
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Wave */}

                      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-90">
                        <svg
                          viewBox="0 0 400 60"
                          preserveAspectRatio="none"
                          className={`absolute bottom-0 left-0 w-full h-14.5 ${sensor.waveColor}`}
                        >
                          <path
                            d="M0 35 C45 52, 75 28, 115 37 C155 47, 175 12, 220 28 C270 48, 285 52, 325 32 C355 17, 375 31, 400 38 L400 60 L0 60 Z"
                            fill="currentColor"
                            fillOpacity="0.14"
                          />

                          <path
                            d="M0 35 C45 52, 75 28, 115 37 C155 47, 175 12, 220 28 C270 48, 285 52, 325 32 C355 17, 375 31, 400 38"
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
            </section>

            {/* =====================================================
                HEALTH MESSAGE
            ===================================================== */}

            <section className="px-4 sm:px-6 lg:px-8 mt-7 pb-8">
              <div
                className={`relative overflow-hidden min-h-28.75 rounded-3xl border px-5 sm:px-7 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 ${
                  darkMode
                    ? "bg-emerald-500/5 border-emerald-500/10"
                    : "bg-linear-to-r from-[#effaf5] via-[#f4fbf8] to-[#edf9f5] border-emerald-50"
                }`}
              >
                <div className="absolute -right-20 -bottom-20 w-52 h-52 rounded-full bg-emerald-100/30 blur-3xl" />

                <div className="relative flex items-center gap-4">
                  <div className="relative w-14 h-14 shrink-0 rounded-[18px] bg-emerald-100 text-emerald-500 flex items-center justify-center">
                    <Leaf size={28} />

                    <span className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`m-0 text-sm sm:text-base font-bold ${
                        darkMode ? "text-emerald-300" : "text-[#16463e]"
                      }`}
                    >
                      A cleaner home leads to a healthier and happier life.
                    </h3>

                    <p
                      className={`m-0 mt-1.5 text-xs sm:text-sm ${
                        darkMode ? "text-emerald-400/60" : "text-[#66847f]"
                      }`}
                    >
                      Keep monitoring. Keep your loved ones safe.
                    </p>
                  </div>
                </div>

                <div
                  className={`relative flex items-center gap-2 text-xs sm:text-sm font-medium ${
                    darkMode ? "text-emerald-400" : "text-[#4c8177]"
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/70 flex items-center justify-center">
                    <Leaf size={17} className="text-emerald-500" />
                  </div>

                  <span>Live Smart</span>

                  <span className="text-emerald-300">•</span>

                  <span>Breathe Better</span>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* =========================================================
          ALERT MODAL
      ========================================================= */}

      {alertData && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md"
          onClick={() => setAlertData(null)}
        >
          <div
            className="relative w-full max-w-110 overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.30)] border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top color */}

            <div
              className={`h-1.5 w-full ${
                alertData.type === "success"
                  ? "bg-linear-to-r from-emerald-400 to-green-500"
                  : alertData.type === "error"
                    ? "bg-linear-to-r from-rose-400 to-red-500"
                    : "bg-linear-to-r from-blue-400 to-cyan-500"
              }`}
            />

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`relative w-16 h-16 rounded-[20px] flex items-center justify-center shrink-0 ${
                    alertData.type === "success"
                      ? "bg-emerald-50 text-emerald-600"
                      : alertData.type === "error"
                        ? "bg-rose-50 text-rose-600"
                        : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <div
                    className={`absolute inset-2 rounded-[14px] border ${
                      alertData.type === "success"
                        ? "border-emerald-100"
                        : alertData.type === "error"
                          ? "border-rose-100"
                          : "border-blue-100"
                    }`}
                  />

                  {alertData.type === "success" ? (
                    <CheckCircle2 size={31} strokeWidth={2.2} />
                  ) : alertData.type === "error" ? (
                    <AlertCircle size={31} strokeWidth={2.2} />
                  ) : (
                    <Info size={31} strokeWidth={2.2} />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setAlertData(null)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <h2 className="mt-5 text-[21px] font-bold text-[#101936] tracking-[-0.3px]">
                {alertData.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#7180a0]">
                {alertData.message}
              </p>

              {alertData.deviceId && (
                <div className="mt-5 rounded-[18px] border border-blue-100 bg-linear-to-br from-blue-50 to-cyan-50/60 px-4 py-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="m-0 text-[10px] font-bold uppercase tracking-widest text-blue-500">
                      Device ID
                    </p>

                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>

                  <p className="m-0 mt-1.5 text-sm font-bold text-[#1d3f8f] break-all">
                    {alertData.deviceId}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setAlertData(null)}
                className={`w-full h-12.5 mt-6 rounded-[14px] text-sm font-semibold text-white flex items-center justify-center cursor-pointer transition-all active:scale-[0.98] shadow-sm ${
                  alertData.type === "success"
                    ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-200"
                    : alertData.type === "error"
                      ? "bg-rose-500 hover:bg-rose-600 hover:shadow-rose-200"
                      : "bg-blue-500 hover:bg-blue-600 hover:shadow-blue-200"
                }`}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
