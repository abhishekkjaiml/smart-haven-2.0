import { Bell } from "lucide-react";
import { useTheme } from "../../context/theme-context";
import { dummySettings } from "../../db/dummyData";
import { useState } from "react";
import { pre } from "framer-motion/client";

const NotificationsSetting = () => {
  const { darkMode } = useTheme();

  const [notifications, setNotifications] = useState(
    dummySettings.notifications,
  );

  const NotificationData = [
    {
      id: "pushNotifications",
      title: "Push Notifications",
      description: "Receive notifications on your device.",
    },
    {
      id: "emailNotifications",
      title: "Email Notifications",
      description: "Receive important updates by email.",
    },
    {
      id: "sensorAlerts",
      title: "Sensor Alerts",
      description: "Get notified when sensor values change.",
    },
    {
      id: "airQualityAlerts",
      title: "Air Quality Alerts",
      description: "Receive alerts about poor air quality.",
    },
    {
      id: "temperatureAlerts",
      title: "Temperature Alerts",
      description: "Get notified about temperature changes.",
    },
    {
      id: "humidityAlerts",
      title: "Humidity Alerts",
      description: "Get notified when humidity reaches unusual levels.",
    },
    {
      id: "gasAlerts",
      title: "Gas Detection Alerts",
      description: "Receive alerts when dangerous gas levels are detected.",
    },
    {
      id: "deviceOfflineAlerts",
      title: "Device Offline Alerts",
      description: "Know when a connected device goes offline.",
    },
    {
      id: "deviceOnlineAlerts",
      title: "Device Online Alerts",
      description: "Know when your device reconnects.",
    },
    {
      id: "deviceConnectionAlerts",
      title: "Device Connection Alerts",
      description: "Get notified about device connection changes.",
    },
    {
      id: "weeklyReports",
      title: "Weekly Reports",
      description: "Receive a weekly home environment summary.",
    },
    {
      id: "dailySummary",
      title: "Daily Summary",
      description: "Receive a daily summary of your environment.",
    },
    {
      id: "criticalAlerts",
      title: "Critical Alerts",
      description: "Always receive important environmental warnings.",
    },
  ];

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section
      className={`mt-6 rounded-2xl border transition-colors duration-300 ${
        darkMode
          ? "bg-[#111c2e] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
          : "bg-white border-slate-100 shadow-[0_4px_20px_rgba(36,68,120,0.05)]"
      }`}
    >
      <div
        className={`px-6 py-5 border-b flex items-center gap-3 ${
          darkMode ? "border-white/10" : "border-slate-100"
        }`}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            darkMode
              ? "bg-violet-500/10 text-violet-400"
              : "bg-violet-50 text-violet-600"
          }`}
        >
          <Bell size={20} />
        </div>

        <div>
          <h2
            className={`m-0 text-base font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Notifications
          </h2>

          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-[#8997b4]"
            }`}
          >
            Control when SmartHaven sends alerts.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-1">
        {NotificationData.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-center justify-between gap-5 py-4 border-b last:border-none ${
              darkMode ? "border-white/5" : "border-slate-50"
            }`}
          >
            <div>
              <p
                className={`m-0 text-sm font-semibold ${
                  darkMode ? "text-white" : "text-[#101936]"
                }`}
              >
                {notification.title}
              </p>

              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-[#8997b4]"
                }`}
              >
                {notification.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleNotification(notification.id)}
              className={`relative shrink-0 w-11 h-6 rounded-full transition cursor-pointer ${notifications[notification.id] ? "bg-blue-600" : darkMode ? "bg-slate-700" : "bg-slate-200"}`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition ${notifications[notification.id] ? "left-6" : "left-1"} `}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotificationsSetting;
