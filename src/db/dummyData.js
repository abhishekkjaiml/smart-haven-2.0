export const DUMMY_EMAIL =
  "demo@smarthaven.com";

export const DUMMY_PASSWORD =
  "SmartHaven@123";

export const DUMMY_DEVICE_ID =
  "SH-ESP32-001";

export const CLAIMED_DEVICE_KEY =
  "smarthaven_claimed_device";


// ============================================================
// DUMMY USER
// ============================================================

export const dummyUser = {
  id: "dummy-user-001",
  uid: "dummy-user-001",

  firstName: "Demo",
  lastName: "User",

  name: "Demo User",
  displayName: "Demo User",

  email: DUMMY_EMAIL,

  phone: "+91 98765 43210",

  role: "Demo User",

  location: "Varanasi, India",

  timezone: "Asia/Kolkata",

  joinedDate: "15 January 2026",

  status: "active",

  avatar: null,
};


// ============================================================
// DEFAULT SENSOR DATA
// ============================================================

export const dummySensorData = {
  temperature: 27.5,
  humidity: 58,
  h2_ppm: 12,
  co_ppm: 3,
  ch4_ppm: 8,
  aqi: 42,
};


// ============================================================
// SENSOR LIMITS
// ============================================================

export const dummySensorLimits = {

  temperature: {
    min: 18,
    max: 35,
    step: 1.5,
  },

  humidity: {
    min: 35,
    max: 80,
    step: 5,
  },

  h2_ppm: {
    min: 5,
    max: 30,
    step: 4,
  },

  co_ppm: {
    min: 1,
    max: 15,
    step: 2,
  },

  ch4_ppm: {
    min: 3,
    max: 25,
    step: 4,
  },

  aqi: {
    min: 20,
    max: 100,
    step: 8,
  },

};


// ============================================================
// SENSOR HISTORY
// ============================================================

export const dummySensorHistory = [

  {
    time: "08:00",
    temperature: 25.4,
    humidity: 62,
    h2_ppm: 10,
    co_ppm: 2,
    ch4_ppm: 7,
    aqi: 38,
  },

  {
    time: "09:00",
    temperature: 26.1,
    humidity: 60,
    h2_ppm: 11,
    co_ppm: 2,
    ch4_ppm: 7,
    aqi: 40,
  },

  {
    time: "10:00",
    temperature: 26.8,
    humidity: 59,
    h2_ppm: 12,
    co_ppm: 3,
    ch4_ppm: 8,
    aqi: 41,
  },

  {
    time: "11:00",
    temperature: 27.2,
    humidity: 58,
    h2_ppm: 12,
    co_ppm: 3,
    ch4_ppm: 8,
    aqi: 43,
  },

  {
    time: "12:00",
    temperature: 28.1,
    humidity: 56,
    h2_ppm: 13,
    co_ppm: 4,
    ch4_ppm: 9,
    aqi: 45,
  },

  {
    time: "13:00",
    temperature: 28.5,
    humidity: 55,
    h2_ppm: 14,
    co_ppm: 4,
    ch4_ppm: 10,
    aqi: 47,
  },

  {
    time: "14:00",
    temperature: 28.2,
    humidity: 54,
    h2_ppm: 13,
    co_ppm: 3,
    ch4_ppm: 9,
    aqi: 44,
  },

  {
    time: "15:00",
    temperature: 27.9,
    humidity: 56,
    h2_ppm: 12,
    co_ppm: 3,
    ch4_ppm: 8,
    aqi: 42,
  },

];


// ============================================================
// ROOMS
// ============================================================

export const dummyRooms = [

  // {
  //   id: "room-001",

  //   name: "Living Room",

  //   type: "Living Room",

  //   status: "online",

  //   deviceId: DUMMY_DEVICE_ID,

  //   image:
  //     "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",

  //   sensors: {

  //     temperature: 27.5,

  //     humidity: 58,

  //     h2_ppm: 12,

  //     co_ppm: 3,

  //     ch4_ppm: 8,

  //     aqi: 42,

  //   },

  //   sensorRanges: {

  //     temperature: {
  //       min: 20,
  //       max: 32,
  //       step: 1.5,
  //     },

  //     humidity: {
  //       min: 40,
  //       max: 75,
  //       step: 5,
  //     },

  //     h2_ppm: {
  //       min: 5,
  //       max: 25,
  //       step: 4,
  //     },

  //     co_ppm: {
  //       min: 1,
  //       max: 12,
  //       step: 2,
  //     },

  //     ch4_ppm: {
  //       min: 3,
  //       max: 20,
  //       step: 4,
  //     },

  //     aqi: {
  //       min: 20,
  //       max: 80,
  //       step: 8,
  //     },

  //   },

  //   lastUpdated: "Just now",
  // },


  // {
  //   id: "room-002",

  //   name: "Bedroom",

  //   type: "Bedroom",

  //   status: "online",

  //   deviceId: "SH-ESP32-002",

  //   image:
  //     "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",

  //   sensors: {

  //     temperature: 25.8,

  //     humidity: 61,

  //     h2_ppm: 9,

  //     co_ppm: 2,

  //     ch4_ppm: 6,

  //     aqi: 35,

  //   },

  //   sensorRanges: {

  //     temperature: {
  //       min: 19,
  //       max: 30,
  //       step: 1.2,
  //     },

  //     humidity: {
  //       min: 40,
  //       max: 78,
  //       step: 5,
  //     },

  //     h2_ppm: {
  //       min: 4,
  //       max: 20,
  //       step: 3,
  //     },

  //     co_ppm: {
  //       min: 1,
  //       max: 10,
  //       step: 2,
  //     },

  //     ch4_ppm: {
  //       min: 2,
  //       max: 18,
  //       step: 3,
  //     },

  //     aqi: {
  //       min: 15,
  //       max: 70,
  //       step: 7,
  //     },

  //   },

  //   lastUpdated: "Just now",
  // },


  // {
  //   id: "room-003",

  //   name: "Kitchen",

  //   type: "Kitchen",

  //   status: "online",

  //   deviceId: "SH-ESP32-003",

  //   image:
  //     "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80",

  //   sensors: {

  //     temperature: 29.4,

  //     humidity: 55,

  //     h2_ppm: 14,

  //     co_ppm: 5,

  //     ch4_ppm: 12,

  //     aqi: 58,

  //   },

  //   sensorRanges: {

  //     temperature: {
  //       min: 22,
  //       max: 35,
  //       step: 1.8,
  //     },

  //     humidity: {
  //       min: 35,
  //       max: 75,
  //       step: 5,
  //     },

  //     h2_ppm: {
  //       min: 7,
  //       max: 30,
  //       step: 4,
  //     },

  //     co_ppm: {
  //       min: 2,
  //       max: 15,
  //       step: 2,
  //     },

  //     ch4_ppm: {
  //       min: 5,
  //       max: 25,
  //       step: 4,
  //     },

  //     aqi: {
  //       min: 30,
  //       max: 100,
  //       step: 9,
  //     },

  //   },

  //   lastUpdated: "Just now",
  // },


  // {
  //   id: "room-004",

  //   name: "Study Room",

  //   type: "Study",

  //   status: "offline",

  //   deviceId: "SH-ESP32-004",

  //   image:
  //     "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",

  //   sensors: {

  //     temperature: 24.6,

  //     humidity: 52,

  //     h2_ppm: 7,

  //     co_ppm: 1,

  //     ch4_ppm: 5,

  //     aqi: 29,

  //   },

  //   sensorRanges: {

  //     temperature: {
  //       min: 19,
  //       max: 29,
  //       step: 1,
  //     },

  //     humidity: {
  //       min: 35,
  //       max: 70,
  //       step: 4,
  //     },

  //     h2_ppm: {
  //       min: 3,
  //       max: 15,
  //       step: 2,
  //     },

  //     co_ppm: {
  //       min: 1,
  //       max: 8,
  //       step: 1,
  //     },

  //     ch4_ppm: {
  //       min: 2,
  //       max: 12,
  //       step: 2,
  //     },

  //     aqi: {
  //       min: 15,
  //       max: 55,
  //       step: 5,
  //     },

  //   },

  //   lastUpdated: "Just now",
  // },

  // {
  //   id: "room-005",
  //   name: "Dining Room",
  //   type: "Dining",
  //   status: "online",
  //   deviceId: "SH-ESP32-005",

  //   image:
  //     "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",

  //   sensors: {
  //     temperature: 26.8,
  //     humidity: 57,
  //     h2_ppm: 10,
  //     co_ppm: 3,
  //     ch4_ppm: 7,
  //     aqi: 38,
  //   },

  //   sensorRanges: {
  //     temperature: {
  //       min: 20,
  //       max: 31,
  //       step: 1.5,
  //     },
  //     humidity: {
  //       min: 40,
  //       max: 75,
  //       step: 5,
  //     },
  //     h2_ppm: {
  //       min: 5,
  //       max: 25,
  //       step: 4,
  //     },
  //     co_ppm: {
  //       min: 1,
  //       max: 12,
  //       step: 2,
  //     },
  //     ch4_ppm: {
  //       min: 3,
  //       max: 20,
  //       step: 4,
  //     },
  //     aqi: {
  //       min: 20,
  //       max: 75,
  //       step: 8,
  //     },
  //   },

  //   lastUpdated: "Just now",
  // },

  // {
  //   id: "room-006",
  //   name: "Guest Room",
  //   type: "Guest Room",
  //   status: "online",
  //   deviceId: "SH-ESP32-006",

  //   image:
  //     "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",

  //   sensors: {
  //     temperature: 24.9,
  //     humidity: 63,
  //     h2_ppm: 8,
  //     co_ppm: 2,
  //     ch4_ppm: 5,
  //     aqi: 32,
  //   },

  //   sensorRanges: {
  //     temperature: {
  //       min: 19,
  //       max: 30,
  //       step: 1.2,
  //     },
  //     humidity: {
  //       min: 40,
  //       max: 80,
  //       step: 5,
  //     },
  //     h2_ppm: {
  //       min: 4,
  //       max: 20,
  //       step: 3,
  //     },
  //     co_ppm: {
  //       min: 1,
  //       max: 10,
  //       step: 2,
  //     },
  //     ch4_ppm: {
  //       min: 2,
  //       max: 18,
  //       step: 3,
  //     },
  //     aqi: {
  //       min: 15,
  //       max: 70,
  //       step: 7,
  //     },
  //   },

  //   lastUpdated: "Just now",
  // },

  // {
  //   id: "room-007",
  //   name: "Garage",
  //   type: "Garage",
  //   status: "online",
  //   deviceId: "SH-ESP32-007",

  //   image:
  //     "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=80",

  //   sensors: {
  //     temperature: 30.2,
  //     humidity: 49,
  //     h2_ppm: 16,
  //     co_ppm: 7,
  //     ch4_ppm: 13,
  //     aqi: 64,
  //   },

  //   sensorRanges: {
  //     temperature: {
  //       min: 22,
  //       max: 38,
  //       step: 2,
  //     },
  //     humidity: {
  //       min: 30,
  //       max: 70,
  //       step: 6,
  //     },
  //     h2_ppm: {
  //       min: 6,
  //       max: 35,
  //       step: 5,
  //     },
  //     co_ppm: {
  //       min: 2,
  //       max: 20,
  //       step: 3,
  //     },
  //     ch4_ppm: {
  //       min: 5,
  //       max: 30,
  //       step: 5,
  //     },
  //     aqi: {
  //       min: 25,
  //       max: 110,
  //       step: 10,
  //     },
  //   },

  //   lastUpdated: "Just now",
  // },

  // {
  //   id: "room-008",
  //   name: "Garden",
  //   type: "Garden",
  //   status: "online",
  //   deviceId: "SH-ESP32-008",

  //   image:
  //     "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80",

  //   sensors: {
  //     temperature: 28.1,
  //     humidity: 72,
  //     h2_ppm: 6,
  //     co_ppm: 2,
  //     ch4_ppm: 4,
  //     aqi: 27,
  //   },

  //   sensorRanges: {
  //     temperature: {
  //       min: 18,
  //       max: 36,
  //       step: 2,
  //     },
  //     humidity: {
  //       min: 50,
  //       max: 90,
  //       step: 6,
  //     },
  //     h2_ppm: {
  //       min: 3,
  //       max: 18,
  //       step: 3,
  //     },
  //     co_ppm: {
  //       min: 1,
  //       max: 8,
  //       step: 1,
  //     },
  //     ch4_ppm: {
  //       min: 2,
  //       max: 15,
  //       step: 2,
  //     },
  //     aqi: {
  //       min: 10,
  //       max: 60,
  //       step: 6,
  //     },
  //   },

  //   lastUpdated: "Just now",
  // },

  // {
  //   id: "room-009",
  //   name: "Home Gym",
  //   type: "Gym",
  //   status: "online",
  //   deviceId: "SH-ESP32-009",

  //   image:
  //     "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",

  //   sensors: {
  //     temperature: 27.9,
  //     humidity: 67,
  //     h2_ppm: 11,
  //     co_ppm: 4,
  //     ch4_ppm: 7,
  //     aqi: 45,
  //   },

  //   sensorRanges: {
  //     temperature: {
  //       min: 20,
  //       max: 32,
  //       step: 1.8,
  //     },
  //     humidity: {
  //       min: 40,
  //       max: 85,
  //       step: 6,
  //     },
  //     h2_ppm: {
  //       min: 5,
  //       max: 25,
  //       step: 4,
  //     },
  //     co_ppm: {
  //       min: 1,
  //       max: 14,
  //       step: 2,
  //     },
  //     ch4_ppm: {
  //       min: 3,
  //       max: 22,
  //       step: 4,
  //     },
  //     aqi: {
  //       min: 20,
  //       max: 85,
  //       step: 8,
  //     },
  //   },

  //   lastUpdated: "Just now",
  // },

  // {
  //   id: "room-010",
  //   name: "Server Room",
  //   type: "Server Room",
  //   status: "offline",
  //   deviceId: "SH-ESP32-010",

  //   image:
  //     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",

  //   sensors: {
  //     temperature: 23.7,
  //     humidity: 46,
  //     h2_ppm: 5,
  //     co_ppm: 1,
  //     ch4_ppm: 3,
  //     aqi: 22,
  //   },

  //   sensorRanges: {
  //     temperature: {
  //       min: 18,
  //       max: 28,
  //       step: 1,
  //     },
  //     humidity: {
  //       min: 35,
  //       max: 60,
  //       step: 4,
  //     },
  //     h2_ppm: {
  //       min: 2,
  //       max: 12,
  //       step: 2,
  //     },
  //     co_ppm: {
  //       min: 1,
  //       max: 6,
  //       step: 1,
  //     },
  //     ch4_ppm: {
  //       min: 1,
  //       max: 10,
  //       step: 2,
  //     },
  //     aqi: {
  //       min: 10,
  //       max: 45,
  //       step: 5,
  //     },
  //   },

  //   lastUpdated: "Just now",
  // },

];


// ============================================================
// ROOM HISTORY
// ============================================================

export const dummyRoomHistory = {

  "room-001": dummySensorHistory,

  "room-002": [
    {
      time: "08:00",
      temperature: 24.2,
      humidity: 64,
      h2_ppm: 8,
      co_ppm: 2,
      ch4_ppm: 5,
      aqi: 32,
    },
    {
      time: "09:00",
      temperature: 24.8,
      humidity: 63,
      h2_ppm: 9,
      co_ppm: 2,
      ch4_ppm: 6,
      aqi: 34,
    },
    {
      time: "10:00",
      temperature: 25.3,
      humidity: 62,
      h2_ppm: 9,
      co_ppm: 2,
      ch4_ppm: 6,
      aqi: 35,
    },
  ],

  "room-003": [
    {
      time: "08:00",
      temperature: 27.4,
      humidity: 59,
      h2_ppm: 11,
      co_ppm: 4,
      ch4_ppm: 10,
      aqi: 49,
    },
    {
      time: "09:00",
      temperature: 28.2,
      humidity: 58,
      h2_ppm: 12,
      co_ppm: 4,
      ch4_ppm: 11,
      aqi: 52,
    },
    {
      time: "10:00",
      temperature: 28.9,
      humidity: 56,
      h2_ppm: 13,
      co_ppm: 5,
      ch4_ppm: 12,
      aqi: 56,
    },
  ],

  "room-004": [
    {
      time: "08:00",
      temperature: 23.8,
      humidity: 55,
      h2_ppm: 6,
      co_ppm: 1,
      ch4_ppm: 4,
      aqi: 26,
    },
    {
      time: "09:00",
      temperature: 24.1,
      humidity: 54,
      h2_ppm: 6,
      co_ppm: 1,
      ch4_ppm: 4,
      aqi: 28,
    },
  ],

};


// ============================================================
// DEVICES
// ============================================================

export const dummyDevices = [

  {
    id: DUMMY_DEVICE_ID,

    name:
      "SmartHaven Environment Sensor",

    type: "ESP32",

    roomId: "room-001",

    roomName: "Living Room",

    status: "online",

    connection: "Wi-Fi",

    firmware: "v1.0.4",

    battery: 94,

    signal: 88,

    claimed: true,

    ownerId: "dummy-user-001",

    lastSeen: "Just now",
  },

  {
    id: "SH-ESP32-002",

    name: "Bedroom Sensor",

    type: "ESP32",

    roomId: "room-002",

    roomName: "Bedroom",

    status: "online",

    connection: "Wi-Fi",

    firmware: "v1.0.3",

    battery: 87,

    signal: 76,

    claimed: false,

    ownerId: null,

    lastSeen: "Just now",
  },

  {
    id: "SH-ESP32-003",

    name: "Kitchen Sensor",

    type: "ESP32",

    roomId: "room-003",

    roomName: "Kitchen",

    status: "online",

    connection: "Wi-Fi",

    firmware: "v1.0.2",

    battery: 79,

    signal: 69,

    claimed: false,

    ownerId: null,

    lastSeen: "Just now",
  },

  {
    id: "SH-ESP32-004",

    name: "Study Room Sensor",

    type: "ESP32",

    roomId: "room-004",

    roomName: "Study Room",

    status: "offline",

    connection: "Wi-Fi",

    firmware: "v1.0.1",

    battery: 62,

    signal: 0,

    claimed: false,

    ownerId: null,

    lastSeen: "18 min ago",
  },

];


// ============================================================
// PROFILE
// ============================================================

export const dummyProfileSettings = {

  firstName: "Abhishek",

  lastName: "Kumar",

  profileImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  displayName: "Abhishek Kumar",

  email: DUMMY_EMAIL,

  phone: "+91 98765 43210",

  location: "Uttar Pradesh, India",

  bio: "Smart home demo account",

  language: "English",

  timezone: "Asia/Kolkata",

};


// ============================================================
// NOTIFICATIONS
// ============================================================

export const dummyNotificationSettings = {

  pushNotifications: true,

  emailNotifications: true,

  sensorAlerts: true,

  airQualityAlerts: true,

  temperatureAlerts: true,

  humidityAlerts: false,

  deviceOfflineAlerts: true,

  weeklyReports: true,

  securityAlerts: true,

};


// ============================================================
// DISPLAY
// ============================================================

export const dummyDisplaySettings = {

  temperatureUnit: "Celsius",

  temperatureSymbol: "°C",

  airQualityUnit: "AQI",

  gasUnit: "ppm",

  timeFormat: "12-hour",

  dateFormat: "DD/MM/YYYY",

  language: "English",

  compactMode: false,

  showSensorAnimation: true,

};


// ============================================================
// THEME
// ============================================================

export const dummyThemeSettings = {

  theme: "light",

  accentColor: "blue",

  sidebarCollapsed: false,

};


// ============================================================
// PRIVACY
// ============================================================

export const dummyPrivacySettings = {

  dataSharing: false,

  analytics: true,

  personalizedInsights: true,

  saveSensorHistory: true,

  cloudBackup: true,

};


// ============================================================
// SECURITY
// ============================================================

export const dummySecuritySettings = {

  twoFactorAuthentication: false,

  loginAlerts: true,

  biometricLogin: false,

  activeSessions: 1,

  lastPasswordChange: "20 August 2026",

};


// ============================================================
// SETTINGS
// ============================================================

export const dummySettings = {

  profile:
    dummyProfileSettings,

  notifications:
    dummyNotificationSettings,

  display:
    dummyDisplaySettings,

  theme:
    dummyThemeSettings,

  privacy:
    dummyPrivacySettings,

  security:
    dummySecuritySettings,

};


// ============================================================
// ALERTS
// ============================================================

export const dummyAlerts = [

  {
    id: "alert-001",

    type: "air-quality",

    title: "Air Quality Good",

    message:
      "Air quality in your Living Room is currently good.",

    severity: "success",

    room: "Living Room",

    time: "5 min ago",

    read: true,
  },

  {
    id: "alert-002",

    type: "temperature",

    title: "Temperature Increased",

    message:
      "Living Room temperature reached 28°C.",

    severity: "warning",

    room: "Living Room",

    time: "18 min ago",

    read: true,
  },

  {
    id: "alert-003",

    type: "device",

    title: "Device Connected",

    message:
      "SmartHaven Environment Sensor is online.",

    severity: "success",

    room: "Living Room",

    time: "32 min ago",

    read: false,
  },

];


// ============================================================
// DASHBOARD SUMMARY
// ============================================================

export const dummyDashboardSummary = {

  totalRooms: 4,

  activeRooms: 3,

  offlineRooms: 1,

  connectedDevices: 3,

  totalDevices: 4,

  averageTemperature: 27.3,

  averageHumidity: 56.5,

  averageAQI: 41,

  homeStatus: "Healthy",

  safetyStatus: "Good",

};


// ============================================================
// HOME
// ============================================================

export const dummyHome = {

  id: "home-001",

  name: "My Smart Home",

  ownerId: "dummy-user-001",

  address: "Varanasi, India",

  rooms: dummyRooms.length,

  devices: dummyDevices.length,

  status: "healthy",

  createdAt: "15 January 2026",

  lastSynced: "Just now",

};


// ============================================================
// COMPLETE DATA
// ============================================================

const dummyData = {

  user:
    dummyUser,

  profile:
    dummyProfileSettings,

  dashboard: {

    sensorData:
      dummySensorData,

    sensorHistory:
      dummySensorHistory,

    summary:
      dummyDashboardSummary,

  },

  rooms:
    dummyRooms,

  roomHistory:
    dummyRoomHistory,

  devices:
    dummyDevices,

  settings:
    dummySettings,

  alerts:
    dummyAlerts,

  home:
    dummyHome,

};

export default dummyData;