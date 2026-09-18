<div align="center">

# 🏠 SmartHaven 2.0

### 🌿 Smart Environment Monitoring Platform

> **Monitor your environment. Understand your space. Build a smarter home.**

<p align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=00C896&center=true&vCenter=true&width=800&height=50&lines=Smart+Environment+Monitoring+%F0%9F%8C%BF;IoT+%2B+React+%2B+Node.js+%E2%9A%A1;Real-Time+Environmental+Data+%F0%9F%93%A1;ESP32+Sensor+Monitoring+%F0%9F%A4%96;Offline+Dummy+Mode+%F0%9F%A7%AA;Build+a+Smarter+Home+%F0%9F%8F%A0" />

</p>

<p align="center">

<img src="https://img.shields.io/badge/Project-SmartHaven%202.0-00C896?style=for-the-badge"/>
<img src="https://img.shields.io/badge/IoT-ESP32-00979D?style=for-the-badge&logo=arduino&logoColor=white"/>
<img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>

</p>

<p align="center">

<img src="https://skillicons.dev/icons?i=react,js,tailwind,vite,nodejs,express,firebase,arduino,git,github&perline=11"/>

</p>

---

</div>

# 📑 Table of Contents

* [🌟 About SmartHaven](#-about-smarthaven)
* [🎯 Project Objective](#-project-objective)
* [🧠 SmartHaven Entity Graph](#-smarthaven-entity-graph)
* [🏗️ Complete System Architecture](#️-complete-system-architecture)
* [🔄 Real-Time Data Flow](#-real-time-data-flow)
* [🧬 Entity Relationship Diagram](#-entity-relationship-diagram)
* [🧪 Offline Dummy Mode](#-offline-dummy-mode)
* [🤖 IoT Hardware Architecture](#-iot-hardware-architecture)
* [📡 Sensor Data Pipeline](#-sensor-data-pipeline)
* [🔐 Authentication Architecture](#-authentication-architecture)
* [🏠 Device Claiming](#-device-claiming)
* [🚨 Alert System](#-alert-system)
* [🎬 Animated UI](#-animated-ui)
* [🎨 UI/UX Design](#-uiux-design)
* [✨ Core Features](#-core-features)
* [🛠️ Technology Stack](#️-technology-stack)
* [📦 Dependencies](#-dependencies)
* [📊 Monitoring Parameters](#-monitoring-parameters)
* [📂 Project Structure](#-project-structure)
* [🚀 Installation](#-installation)
* [🔑 Environment Variables](#-environment-variables)
* [🧪 Running Demo Mode](#-running-demo-mode)
* [📸 Screenshots](#-screenshots)
* [🎥 Demo](#-demo)
* [🔄 Application Lifecycle](#-application-lifecycle)
* [📱 Responsive Design](#-responsive-design)
* [🌙 Theme System](#-theme-system)
* [📡 Device Status](#-device-status)
* [🔒 Security](#-security)
* [🧪 Testing](#-testing)
* [🗺️ Development Roadmap](#️-development-roadmap)
* [📚 Development Documentation](#-development-documentation)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)
* [👨‍💻 Developer](#-developer)

---

# 🌟 About SmartHaven

**SmartHaven 2.0** is a full-stack **IoT-based Smart Environment Monitoring Platform** that connects physical environmental sensors with a modern, animated and responsive web dashboard.

The platform is designed to collect environmental information from IoT sensors, process the information through a backend system, transmit updates in real time and display the information through an easy-to-understand dashboard.

SmartHaven combines:

```text
                    🏠 SMART HAVEN 2.0

        ┌─────────────────────────────────────┐
        │                                     │
        │       🌿 Environment Monitoring     │
        │                                     │
        └──────────────────┬──────────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
       🤖 IoT           ⚙️ Backend        ⚛️ Frontend
          │                │                │
          ▼                ▼                ▼
       ESP32            Node.js          React.js
       DHT11            Express          Tailwind
       MQ-02            Socket.IO        Framer Motion
       OLED             REST API         Firebase
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
                     📊 Smart Dashboard
```

---

# 🎯 Project Objective

The primary goal of SmartHaven is to create a complete environment monitoring ecosystem where users can monitor environmental conditions from a centralized dashboard.

### Main objectives

* 🌡️ Monitor temperature
* 💧 Monitor humidity
* 💨 Monitor gas levels
* 🌿 Monitor Air Quality Index
* 📡 Connect IoT devices
* ⚡ Receive real-time sensor updates
* 🔐 Provide secure authentication
* 🏠 Allow device claiming
* 🚨 Display environmental alerts
* 🧪 Provide offline simulation
* 🎬 Create an interactive animated interface
* 📱 Support responsive layouts
* 📊 Prepare the foundation for future analytics

---

# 🧠 SmartHaven Entity Graph

The SmartHaven ecosystem connects the user, frontend, authentication, IoT hardware, backend, databases, real-time communication and monitoring systems.

```mermaid
flowchart LR

    USER(("👤 User"))

    UI["⚛️ React Frontend<br/>SmartHaven Dashboard"]

    AUTH["🔐 Firebase Auth"]

    DEVICE["🏠 SmartHaven Device"]

    ESP["🧠 ESP32 DevKit V1"]

    DHT["🌡️ DHT11<br/>Temperature + Humidity"]

    MQ["💨 MQ-02<br/>Gas Detection"]

    OLED["📺 OLED Display"]

    BACKEND["⚙️ Node.js + Express<br/>Backend"]

    API["🚂 REST API"]

    SOCKET["⚡ Socket.IO<br/>Real-Time Layer"]

    FIREBASE[("🔥 Firebase<br/>Realtime Database")]
    DUMMY["🧪 Offline Dummy Engine"]

    ALERT["🚨 Alert System"]

    ANALYTICS["📊 Analytics"]

    USER --> UI

    UI --> AUTH
    AUTH --> UI

    UI --> DEVICE

    DEVICE --> ESP

    ESP --> DHT
    ESP --> MQ
    ESP --> OLED

    ESP --> BACKEND

    BACKEND --> API
    BACKEND --> SOCKET

    SOCKET --> UI

    API --> FIREBASE
    UI --> DUMMY
    DUMMY --> UI

    UI --> ALERT
    UI --> ANALYTICS

    classDef frontend fill:#61DAFB,color:#000,stroke:#61DAFB
    classDef backend fill:#339933,color:#fff,stroke:#339933
    classDef database fill:#FFCA28,color:#000,stroke:#FFCA28
    classDef iot fill:#00979D,color:#fff,stroke:#00979D
    classDef dummy fill:#8B5CF6,color:#fff,stroke:#8B5CF6
    classDef user fill:#111827,color:#fff,stroke:#6B7280

    class UI,ANALYTICS,ALERT frontend
    class BACKEND,API,SOCKET backend
    class AUTH,FIREBASE,MONGO database
    class DEVICE,ESP,DHT,MQ,OLED iot
    class DUMMY dummy
    class USER user
```

---

# 🏗️ Complete System Architecture

```mermaid
flowchart TB

    subgraph USER_LAYER["👤 USER LAYER"]
        USER["User"]
        LOGIN["🔐 Login"]
        DASHBOARD["🏠 Dashboard"]
    end

    subgraph FRONTEND["⚛️ FRONTEND"]
        REACT["React.js"]
        ROUTER["React Router"]
        TAILWIND["Tailwind CSS"]
        MOTION["Framer Motion"]
        COMPONENTS["Reusable Components"]
        STATE["Application State"]
    end

    subgraph IOT["🤖 IoT HARDWARE"]
        ESP["🧠 ESP32 DevKit V1"]
        DHT["🌡️ DHT11"]
        MQ["💨 MQ-02"]
        OLED["📺 OLED"]
    end

    subgraph BACKEND["⚙️ BACKEND"]
        NODE["Node.js"]
        EXPRESS["Express.js"]
        API["REST API"]
        SOCKET["Socket.IO"]
    end

    subgraph DATABASE["☁️ DATA SERVICES"]
        AUTH["🔥 Firebase Authentication"]
        RTDB[("🔥 Firebase Realtime Database")]
    end

    subgraph OFFLINE["🧪 OFFLINE MODE"]
        DUMMY["Dummy User"]
        GENERATOR["Dummy Generator"]
        SIMULATION["Simulated Sensor Data"]
    end

    USER --> LOGIN
    LOGIN --> AUTH
    AUTH --> DASHBOARD

    DASHBOARD --> REACT

    REACT --> ROUTER
    REACT --> TAILWIND
    REACT --> MOTION
    REACT --> COMPONENTS
    REACT --> STATE

    ESP --> DHT
    ESP --> MQ
    ESP --> OLED

    ESP --> NODE

    NODE --> EXPRESS
    EXPRESS --> API
    NODE --> SOCKET

    API --> RTDB
    SOCKET --> STATE
    STATE --> DASHBOARD

    DASHBOARD --> DUMMY
    DUMMY --> GENERATOR
    GENERATOR --> SIMULATION
    SIMULATION --> STATE
```

---

# 🔄 Real-Time Data Flow

SmartHaven uses a real-time communication layer to deliver environmental updates to the dashboard.

```mermaid
sequenceDiagram

    autonumber

    participant S as 🌡️ Sensors
    participant E as 🧠 ESP32
    participant B as ⚙️ Node.js Backend
    participant A as 🚂 Express API
    participant SO as ⚡ Socket.IO
    participant R as ⚛️ React Dashboard
    participant U as 👤 User

    S->>E: Read sensor values

    E->>B: Send sensor data

    B->>A: Process / validate data

    A->>B: Return processed data

    B->>SO: Emit device update

    SO->>R: Send real-time event

    R->>R: Update application state

    R->>U: Render latest values
```

---

# 🧬 Entity Relationship Diagram

The logical SmartHaven data model can be represented as follows:

```mermaid
erDiagram

    USER ||--o{ DEVICE : owns

    DEVICE ||--o{ SENSOR_READING : generates

    DEVICE ||--o{ ALERT : triggers

    USER ||--o{ ALERT : receives

    DEVICE ||--o{ DEVICE_SESSION : creates


    USER {
        string user_id PK
        string name
        string email
        string created_at
    }


    DEVICE {
        string device_id PK
        string user_id FK
        string device_name
        string location
        string status
        string created_at
    }


    SENSOR_READING {
        string reading_id PK
        string device_id FK
        float temperature
        float humidity
        float hydrogen
        float carbon_monoxide
        float methane
        float aqi
        string recorded_at
    }


    ALERT {
        string alert_id PK
        string user_id FK
        string device_id FK
        string type
        string severity
        string message
        boolean is_read
        string created_at
    }


    DEVICE_SESSION {
        string session_id PK
        string device_id FK
        string connected_at
        string disconnected_at
        string status
    }
```

> **Note:** This represents the logical application/data relationship. The implementation schema can evolve as SmartHaven development continues.

---

# 🧪 Offline Dummy Mode

One of the important features of SmartHaven 2.0 is its **Dummy / Offline Mode**.

The dashboard can operate using simulated sensor values even when the physical ESP32 device or sensors are unavailable.

```mermaid
flowchart TD

    START(("🚀 Start SmartHaven"))

    MODE{"📡 Select Data Mode"}

    LIVE["📡 LIVE MODE"]

    DEMO["🧪 DEMO / OFFLINE MODE"]

    ESP["🧠 ESP32"]

    SENSOR["🌡️ DHT11 + 💨 MQ-02"]

    BACKEND["⚙️ Backend"]

    SOCKET["⚡ Socket.IO"]

    GENERATOR["🧪 Dummy Sensor Generator"]

    DATA["📊 Simulated Sensor Data"]

    DASH["⚛️ SmartHaven Dashboard"]

    ALERT["🚨 Alert System"]

    START --> MODE

    MODE -->|Live| LIVE
    MODE -->|Demo| DEMO

    LIVE --> ESP
    ESP --> SENSOR
    SENSOR --> BACKEND
    BACKEND --> SOCKET
    SOCKET --> DASH

    DEMO --> GENERATOR
    GENERATOR --> DATA
    DATA --> DASH

    DASH --> ALERT
```

---

# 🎯 Dummy Mode Capabilities

Dummy Mode allows the application to:

* Run without physical hardware
* Run without ESP32
* Test the dashboard independently
* Simulate sensor readings
* Test alert states
* Test loading states
* Test responsive UI
* Test sidebar behavior
* Test dark/light mode
* Test animations
* Demonstrate the project easily

### Example simulated data

```text
┌──────────────────────────────────────────┐
│          🧪 DEMO MODE ACTIVE             │
├──────────────────────────────────────────┤
│                                          │
│  🌡️ Temperature       25.4 °C             │
│  💧 Humidity          56 %               │
│  💨 H₂                Normal             │
│  🏭 CO                Normal             │
│  🔥 CH₄               Normal             │
│  🌿 AQI               42                 │
│                                          │
│  ⚡ Simulated Real-Time Updates          │
│                                          │
└──────────────────────────────────────────┘
```

---

# 🔁 Dummy Data Architecture

```text
              🧪 Dummy User
                    │
                    ▼
             🧪 Dummy Device
                    │
                    ▼
          🧪 Dummy Sensor Engine
                    │
          ┌─────────┼─────────┐
          │         │         │
          ▼         ▼         ▼
         🌡️        💧        💨
     Temperature  Humidity   Gas
          │         │         │
          └─────────┼─────────┘
                    │
                    ▼
              📊 Sensor Data
                    │
                    ▼
             ⚛️ React State
                    │
                    ▼
             🏠 Dashboard
```

---

# 🤖 IoT Hardware Architecture

SmartHaven's hardware layer is centered around an **ESP32 DevKit V1**.

```mermaid
flowchart TB

    DHT["🌡️ DHT11<br/>Temperature + Humidity"]

    MQ["💨 MQ-02<br/>Gas Detection"]

    ESP["🧠 ESP32 DevKit V1"]

    OLED["📺 OLED Display"]

    NETWORK["📡 Network"]

    BACKEND["⚙️ SmartHaven Backend"]

    SOCKET["⚡ Socket.IO"]

    DASH["⚛️ React Dashboard"]

    DHT --> ESP
    MQ --> ESP

    ESP --> OLED
    ESP --> NETWORK

    NETWORK --> BACKEND

    BACKEND --> SOCKET
    SOCKET --> DASH
```

---

# 📡 Sensor Data Pipeline

```text
                     🌡️ DHT11
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
        🌡️ Temperature        💧 Humidity
              │                     │
              └──────────┬──────────┘
                         │
                         ▼
                    🧠 ESP32
                         │
                         ▼
                     💨 MQ-02
                         │
              ┌──────────┼──────────┐
              │          │          │
              ▼          ▼          ▼
             H₂          CO         CH₄
              │          │          │
              └──────────┼──────────┘
                         │
                         ▼
                  ⚙️ Backend
                         │
                         ▼
                    ⚡ Socket.IO
                         │
                         ▼
                  ⚛️ Dashboard
                         │
                         ▼
                   🚨 Alerts
```

---

# 🔐 Authentication Architecture

Firebase Authentication handles the user authentication layer.

```mermaid
flowchart LR

    USER["👤 User"]

    LOGIN["🔐 Login Page"]

    FIREBASE["🔥 Firebase Authentication"]

    SUCCESS["✅ Authentication Success"]

    TOKEN["🎟️ Authenticated Session"]

    DASH["🏠 Dashboard"]

    ERROR["❌ Authentication Error"]

    USER --> LOGIN

    LOGIN --> FIREBASE

    FIREBASE -->|Valid Credentials| SUCCESS

    SUCCESS --> TOKEN

    TOKEN --> DASH

    FIREBASE -->|Invalid Credentials| ERROR

    ERROR --> LOGIN
```

---

# 🔐 Authentication Features

* Email/password authentication
* Firebase Authentication
* Protected dashboard
* Login validation
* Authentication error handling
* Session-based application access
* Logout support
* Demo login support

---

# 🏠 Device Claiming

The device claiming system allows a user to associate a SmartHaven device with their account using a unique Device ID.

```mermaid
flowchart TD

    USER["👤 User"]

    DASH["🏠 Dashboard"]

    INPUT["⌨️ Enter Device ID"]

    VALIDATE["🔍 Validate Device ID"]

    CHECK{"📡 Device Available?"}

    CLAIM["🔗 Claim Device"]

    CONNECT["✅ Device Connected"]

    SOCKET["⚡ Subscribe to Real-Time Updates"]

    ERROR["❌ Device Not Found"]

    USER --> DASH

    DASH --> INPUT

    INPUT --> VALIDATE

    VALIDATE --> CHECK

    CHECK -->|Yes| CLAIM

    CLAIM --> CONNECT

    CONNECT --> SOCKET

    CHECK -->|No| ERROR

    ERROR --> INPUT
```

---

# 📡 Device Connection Flow

```text
👤 User
   │
   ▼
⌨️ Device ID
   │
   ▼
🔍 Validation
   │
   ▼
🏠 Device Found
   │
   ▼
🔗 Claim Device
   │
   ▼
📡 Device Connected
   │
   ▼
⚡ Real-Time Updates
   │
   ▼
📊 Dashboard
```

---

# 🚨 Environmental Alert System

SmartHaven can represent different environmental conditions through an alert system.

```mermaid
flowchart LR

    DATA["📊 Sensor Data"]

    PROCESS["⚙️ Alert Processing"]

    TEMP["🌡️ Temperature"]

    HUM["💧 Humidity"]

    H2["💨 H₂"]

    CO["🏭 CO"]

    CH4["🔥 CH₄"]

    AQI["🌿 AQI"]

    NORMAL["🟢 Normal"]

    WARNING["🟡 Warning"]

    CRITICAL["🔴 Critical"]

    UI["🚨 Animated Alert UI"]

    DATA --> PROCESS

    PROCESS --> TEMP
    PROCESS --> HUM
    PROCESS --> H2
    PROCESS --> CO
    PROCESS --> CH4
    PROCESS --> AQI

    TEMP --> NORMAL
    TEMP --> WARNING
    TEMP --> CRITICAL

    HUM --> NORMAL
    HUM --> WARNING

    H2 --> NORMAL
    H2 --> WARNING
    H2 --> CRITICAL

    CO --> NORMAL
    CO --> WARNING
    CO --> CRITICAL

    CH4 --> NORMAL
    CH4 --> WARNING
    CH4 --> CRITICAL

    AQI --> NORMAL
    AQI --> WARNING
    AQI --> CRITICAL

    WARNING --> UI
    CRITICAL --> UI
```

---

# 🎬 Animated UI

SmartHaven 2.0 uses **Framer Motion** to make the interface feel interactive and responsive.

The animations are not only decorative; they are used to improve transitions, feedback and visual hierarchy.

---

# ✨ Animation System

```mermaid
flowchart TB

    MOTION["🎬 Framer Motion"]

    PAGE["📄 Page Transitions"]

    SIDEBAR["🧭 Sidebar Open / Close"]

    CARDS["📊 Sensor Card Animation"]

    ALERT["🚨 Alert Animation"]

    MODAL["🪟 Modal Animation"]

    LOADING["🔄 Loading Animation"]

    BUTTON["🎯 Button Interaction"]

    THEME["🌙 Theme Transition"]

    DEVICE["📡 Device Status"]

    DATA["🧪 Dummy Data Update"]

    MOTION --> PAGE
    MOTION --> SIDEBAR
    MOTION --> CARDS
    MOTION --> ALERT
    MOTION --> MODAL
    MOTION --> LOADING
    MOTION --> BUTTON
    MOTION --> THEME
    MOTION --> DEVICE
    MOTION --> DATA
```

---

# 🎞️ Animated Experience

### 📄 Page Entry

```text
Page Load
   ↓
Opacity 0
   ↓
Fade In
   ↓
Slide Up
   ↓
Content Visible
```

### 📊 Dashboard Cards

```text
Dashboard
    ↓
Card 1
    ↓
Card 2
    ↓
Card 3
    ↓
Card 4
    ↓
Staggered Appearance
```

### 🚨 Alerts

```text
Alert Triggered
      ↓
Scale
      ↓
Fade In
      ↓
Attention State
      ↓
Dismiss
      ↓
Fade Out
```

---

# 🎨 UI / UX Design

SmartHaven is designed as a modern environment monitoring dashboard.

### Design principles

```text
          🏠 SMART HAVEN UI
                  │
       ┌──────────┼──────────┐
       │          │          │
       ▼          ▼          ▼
    Clarity    Feedback    Motion
       │          │          │
       ▼          ▼          ▼
    Data UI     Alerts     Framer Motion
       │          │          │
       └──────────┼──────────┘
                  ▼
             Better UX
```

---

# 🎨 UI Features

* ✨ Modern dashboard cards
* 🌙 Dark Mode
* ☀️ Light Mode
* 🧭 Responsive Sidebar
* 📱 Responsive Dashboard
* 🎬 Smooth transitions
* 🚨 Custom alerts
* 🪟 Custom modals
* 🔄 Loading states
* 📡 Device status
* 👤 User profile
* ⏱️ Last updated information
* 🎯 Interactive controls
* 🧪 Demo mode indicator

---

# ✨ Core Features

## 🔐 Authentication

* Firebase email/password authentication
* Login UI
* Validation
* Error handling
* Protected dashboard
* Logout
* Demo login

---

## 🏠 Smart Dashboard

Dashboard provides a centralized view of the environment.

Includes:

* Temperature
* Humidity
* H₂
* CO
* CH₄
* AQI
* Device status
* Last updated time

---

## 📡 Device Management

* Device ID input
* Device validation
* Device claiming
* Connection state
* Device status
* Real-time device updates

---

## 🌿 Environment Monitoring

SmartHaven monitors:

```text
🌡️ Temperature
💧 Humidity
💨 H₂
🏭 CO
🔥 CH₄
🌿 AQI
```

---

## 🧪 Demo Mode

* Dummy user
* Dummy device
* Dummy sensor values
* Simulated updates
* No hardware required
* UI testing
* Project demonstration

---

## 🌙 Theme

* Light Mode
* Dark Mode
* Theme-aware components
* Smooth theme transition

---

## 📱 Responsive

Designed for:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

---

# 🛠️ Technology Stack

## ⚛️ Frontend

| Technology          | Purpose                |
| ------------------- | ---------------------- |
| ⚛️ React.js         | Frontend application   |
| 🟨 JavaScript       | Application logic      |
| 🎨 Tailwind CSS     | UI styling             |
| 🧭 React Router DOM | Client-side navigation |
| 🎬 Framer Motion    | Animations             |
| 🧩 Lucide React     | Icons                  |
| ⚡ Vite              | Development and build  |

---

## ⚙️ Backend

| Technology    | Purpose                    |
| ------------- | -------------------------- |
| 🟢 Node.js    | Backend runtime            |
| 🚂 Express.js | REST API                   |
| ⚡ Socket.IO   | Real-time communication    |
| 🌐 CORS       | Cross-origin communication |
| 🔑 dotenv     | Environment configuration  |

---

## 🔥 Firebase

Used for:

* 🔐 Authentication
* 🔄 Realtime Database
* 👤 User management
* ☁️ Cloud services

---

# 🤖 IoT Stack

| Component          | Purpose                  |
| ------------------ | ------------------------ |
| 🧠 ESP32 DevKit V1 | Main IoT controller      |
| 🌡️ DHT11          | Temperature and humidity |
| 💨 MQ-02           | Gas detection            |
| 📺 OLED Display    | Local sensor information |

---

# 🧩 Complete Technology Mindmap

```mermaid
mindmap
    root((🏠 SmartHaven 2.0))

        Frontend
            React.js
            JavaScript
            Tailwind CSS
            React Router
            Framer Motion
            Lucide React
            Vite

        Backend
            Node.js
            Express.js
            REST API
            Socket.IO
            CORS
            dotenv

        Firebase
            Authentication
            Realtime Database

        IoT
            ESP32
            DHT11
            MQ-02
            OLED

        Offline
            Dummy User
            Dummy Device
            Dummy Sensor Data
            Simulation

        UI
            Dashboard
            Sidebar
            Dark Mode
            Light Mode
            Alerts
            Modals
            Animations

        Future
            Analytics
            Notifications
            AI Insights
            Mobile App
```

---

# 📦 Dependencies

## Frontend Packages

```text
react
react-dom
react-router-dom
firebase
socket.io-client
framer-motion
lucide-react
```

## Backend Packages

```text
express
socket.io
cors
dotenv
firebase-admin
```

---

# 📊 Monitoring Parameters

| Parameter        | Sensor / Source | Unit      | Dashboard |
| ---------------- | --------------- | --------- | :-------: |
| 🌡️ Temperature  | DHT11           | °C        |     ✅     |
| 💧 Humidity      | DHT11           | %         |     ✅     |
| 💨 H₂            | MQ-02           | Gas Level |     ✅     |
| 🏭 CO            | MQ-02           | Gas Level |     ✅     |
| 🔥 CH₄           | MQ-02           | Gas Level |     ✅     |
| 🌿 AQI           | Processed Data  | Index     |     ✅     |
| 📡 Device Status | Device          | State     |     ✅     |
| ⏱️ Last Updated  | Application     | Time      |     ✅     |

---

# 📂 Project Structure

```text
SmartHaven-2.0/
│
├── 📁 frontend/
│   │
│   ├── 📁 public/
│   │   ├── 📁 screenshots/
│   │   └── 📁 demo/
│   │
│   └── 📁 src/
│       │
│       ├── 📁 assets/
│       │
│       ├── 📁 components/
│       │   ├── Sidebar.jsx
│       │   ├── DashboardHeader.jsx
│       │   ├── SensorCard.jsx
│       │   ├── Alert.jsx
│       │   ├── Modal.jsx
│       │   └── ...
│       │
│       ├── 📁 pages/
│       │   ├── Login.jsx
│       │   ├── Dashboard.jsx
│       │   └── ...
│       │
│       ├── 📁 services/
│       │   ├── firebase.js
│       │   └── socket.js
│       │
│       ├── 📁 db/
│       │   └── dummyData.js
│       │
│       ├── 📁 hooks/
│       │
│       ├── 📁 context/
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── 📁 backend/
│   │
│   ├── 📁 config/
│   ├── 📁 controllers/
│   ├── 📁 routes/
│   ├── 📁 models/
│   ├── 📁 services/
│   │
│   ├── server.js
│   └── package.json
│
├── 📁 iot/
│   ├── 📁 esp32/
│   ├── 📁 sensors/
│   └── README.md
│
├── 📄 README.md
├── 📄 STEP.md
├── 📄 .gitignore
└── 📄 package.json
```

---

# 🚀 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/smarthaven-2.0.git
```

```bash
cd smarthaven-2.0
```

---

# ⚛️ Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will be available at:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Open another terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start backend:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

---

# 🔑 Environment Variables

## Frontend `.env`

```env
VITE_BACKEND_URL=http://localhost:5000

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## Backend `.env`

```env
PORT=5000


FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
```

> ⚠️ Never commit `.env` files or Firebase private credentials to GitHub.

---

# 🧪 Running Demo Mode

SmartHaven can run without physical hardware.

### Step 1 — Start Frontend

```bash
cd frontend
npm run dev
```

### Step 2 — Open Application

```text
http://localhost:5173
```

### Step 3 — Use Demo Login

Use the application's demo login functionality.

### Step 4 — Dummy Device

The application loads the dummy device configuration.

### Step 5 — Sensor Simulation

The dummy engine generates changing environmental values.

### Step 6 — Dashboard

The simulated data appears inside the sensor cards.

```text
🧪 Dummy Generator
       ↓
📊 Sensor Values
       ↓
⚛️ React State
       ↓
🏠 Dashboard
       ↓
🚨 Alerts
```

---

# 🔄 Application Lifecycle

```mermaid
flowchart TD

    START(("🚀 Application Start"))

    AUTH{"🔐 User Authenticated?"}

    LOGIN["🔐 Login Page"]

    DASH["🏠 Dashboard"]

    DEVICE{"📡 Device Connected?"}

    LIVE["📡 Live Sensor Mode"]

    DUMMY["🧪 Dummy Sensor Mode"]

    DATA["📊 Process Sensor Data"]

    ALERT["🚨 Check Environmental State"]

    UI["✨ Update Animated UI"]

    START --> AUTH

    AUTH -->|No| LOGIN

    LOGIN --> AUTH

    AUTH -->|Yes| DASH

    DASH --> DEVICE

    DEVICE -->|Yes| LIVE

    DEVICE -->|No| DUMMY

    LIVE --> DATA

    DUMMY --> DATA

    DATA --> ALERT

    ALERT --> UI

    UI --> DASH
```

---

# 📸 Screenshots

Create the following directory:

```text
frontend/public/screenshots/
```

Recommended screenshots:

```text
login.png
dashboard.png
dark-mode.png
device-claim.png
alerts.png
mobile.png
```

---

## 🔐 Login Screen

```markdown
![SmartHaven Login](./frontend/public/screenshots/login.png)
```

---

## 🏠 Dashboard

```markdown
![SmartHaven Dashboard](./frontend/public/screenshots/dashboard.png)
```

---

## 🌙 Dark Mode

```markdown
![SmartHaven Dark Mode](./frontend/public/screenshots/dark-mode.png)
```

---

## 🔗 Device Claiming

```markdown
![Device Claiming](./frontend/public/screenshots/device-claim.png)
```

---

## 🚨 Alerts

```markdown
![SmartHaven Alerts](./frontend/public/screenshots/alerts.png)
```

---

## 📱 Mobile

```markdown
![SmartHaven Mobile](./frontend/public/screenshots/mobile.png)
```

---

# 🎥 Project Demo

For a more professional GitHub presentation, add a GIF or short screen recording.

Recommended structure:

```text
frontend/
└── public/
    └── demo/
        └── smarthaven-demo.gif
```

Then add:

```markdown
<p align="center">

<img src="./frontend/public/demo/smarthaven-demo.gif" width="900"/>

</p>
```

### Recommended demo sequence

```text
🔐 Login
   ↓
🏠 Dashboard
   ↓
🧭 Sidebar
   ↓
🌙 Dark Mode
   ↓
📡 Device Status
   ↓
🧪 Dummy Sensor Updates
   ↓
🚨 Alert
   ↓
📊 Monitoring
```

---

# 📱 Responsive Design

SmartHaven is designed to adapt to different screen sizes.

```text
                  🏠 SMART HAVEN
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
       🖥️ Desktop      💻 Laptop      📱 Mobile
          │              │              │
          ▼              ▼              ▼
     Full Sidebar    Responsive UI   ☰ Sidebar
          │              │              │
          ▼              ▼              ▼
       Dashboard      Dashboard      Compact Cards
```

### Desktop

* Full navigation
* Multi-column sensor cards
* Large dashboard
* Complete monitoring information

### Tablet

* Responsive card layout
* Adaptive sidebar
* Optimized spacing

### Mobile

* Collapsible sidebar
* Compact cards
* Responsive header
* Touch-friendly controls

---

# 🌙 Theme System

SmartHaven includes both Light and Dark themes.

## ☀️ Light Mode

Designed for bright environments with a clean interface.

## 🌙 Dark Mode

Designed for comfortable monitoring in low-light environments.

Theme-aware elements include:

```text
🧭 Sidebar
📌 Header
📊 Sensor Cards
🚨 Alerts
🪟 Modals
🎯 Buttons
📄 Pages
🏠 Dashboard
```

---

# 📡 Device Status

The dashboard provides different visual device states.

```text
🟢 ONLINE

Device is connected and available.


🟡 CONNECTING

Connection is being established.


🔴 OFFLINE

Device is currently unavailable.


🧪 DEMO

Dummy / simulated sensor mode is active.
```

---

# 📊 Monitoring Overview

```text
                         🏠 SMART HAVEN
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
       🌡️ Temperature      💧 Humidity          🌿 AQI
             │                  │                  │
             └──────────────────┼──────────────────┘
                                │
                     ┌──────────┴──────────┐
                     │                     │
                     ▼                     ▼
                  💨 H₂                   🏭 CO
                     │                     │
                     └──────────┬──────────┘
                                │
                                ▼
                             🔥 CH₄
                                │
                                ▼
                         🚨 Alert System
                                │
                                ▼
                          ⚛️ Dashboard
```

---

# 🧪 Testing

SmartHaven can be tested at multiple layers.

## Frontend Testing

Check:

* Login UI
* Dashboard
* Sidebar
* Theme switching
* Responsive layout
* Sensor cards
* Alerts
* Modals
* Loading states
* Dummy mode

---

## Backend Testing

Check:

* Server startup
* API communication
* Authentication validation
* Device claiming
* Database connectivity
* Socket.IO connection

---

## IoT Testing

Check:

* ESP32 connection
* DHT11 readings
* MQ-02 readings
* OLED display
* Network communication
* Backend communication

---

## Offline Testing

Check:

```text
🧪 Dummy Login
      ↓
🧪 Dummy Device
      ↓
🧪 Sensor Simulation
      ↓
📊 Dashboard
      ↓
🚨 Alerts
```

---

# 🔒 Security

SmartHaven follows basic application security practices.

### 🔐 Authentication

Firebase Authentication provides the authentication layer.

### 🔑 Environment Variables

Sensitive values should be stored in `.env`.

### 🛡️ Protected APIs

Backend routes can validate authenticated requests.

### 🏠 Device Validation

Device IDs should be validated before device claiming.

### 🚫 Secrets

Never commit:

```text
.env
Private Keys
Passwords
API Secrets
Firebase Admin Credentials
Database Credentials
```

---

# 🗺️ Development Roadmap

```mermaid
timeline

    title SmartHaven 2.0 Development Roadmap

    Project Setup : Project initialization
                 : React + Vite

    UI Development : Tailwind CSS
                   : Responsive Components
                   : Dashboard UI

    Authentication : Firebase Authentication
                   : Login
                   : Logout
                   : Protected Access

    Dashboard : Sensor Cards
              : Device Status
              : Theme System
              : Responsive Sidebar

    Demo System : Dummy User
                : Dummy Device
                : Sensor Simulation
                : Offline Mode

    Backend : Node.js
            : Express.js
            : REST API

    Real-Time : Socket.IO
             : Live Sensor Updates

    Device Management : Device Claiming
                      : Device Validation

    IoT : ESP32
        : DHT11
        : MQ-02
        : OLED

    Monitoring : Environmental Alerts
               : Sensor Status

    Animation : Framer Motion
              : Page Transitions
              : Card Animations

    Analytics : Historical Data
              : Charts
              : Reports

    Mobile : React Native

    AI : Environmental Insights
       : Prediction
       : Smart Recommendations
```

---

# 📈 Future Analytics

Future versions can include:

* 📊 Historical sensor data
* 📈 Interactive charts
* 📅 Daily reports
* 📅 Weekly reports
* 📅 Monthly reports
* 🔍 Data filtering
* 📤 Data export
* 📉 Environmental trends

---

# 🤖 Future AI Features

Potential future AI functionality:

```text
                🤖 AI ENGINE
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
   📊 Analysis   🔍 Anomaly    🔮 Prediction
        │         Detection        │
        │            │              │
        └────────────┼──────────────┘
                     ▼
              💡 Smart Insights
                     │
                     ▼
                👤 User
```

Potential features:

* Environmental trend analysis
* Anomaly detection
* AQI prediction
* Smart recommendations
* Environmental summaries
* Pattern detection

---

# 📱 Future Mobile Application

A future React Native application can provide:

* 📱 Mobile dashboard
* 🔐 Authentication
* 📡 Device management
* 📊 Sensor monitoring
* 🚨 Push notifications
* 📈 Analytics
* 🌙 Dark mode

---

# 🏠 Future Multi-Device Architecture

SmartHaven can eventually support multiple devices.

```text
                         👤 User
                           │
                           ▼
                    🏠 SmartHaven
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
         📡 Device 1   📡 Device 2   📡 Device 3
             │             │             │
             ▼             ▼             ▼
          Room 1        Room 2        Room 3
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                     📊 Central Dashboard
```

---

# 📚 Development Documentation

The project development process is documented in:

```text
STEP.md
```

The document follows the chronological development process of SmartHaven.

```text
01. Project Setup
        ↓
02. Frontend Setup
        ↓
03. Tailwind Configuration
        ↓
04. Application Routing
        ↓
05. Firebase Setup
        ↓
06. Authentication
        ↓
07. Login UI
        ↓
08. Dashboard
        ↓
09. Sidebar
        ↓
10. Dark / Light Mode
        ↓
11. Sensor Cards
        ↓
12. Dummy Mode
        ↓
13. Dummy Sensor Generator
        ↓
14. Backend Setup
        ↓
15. REST API
        ↓
16. Socket.IO
        ↓
17. Device Claiming
        ↓
18. IoT Integration
        ↓
19. Real-Time Data
        ↓
20. Alerts
        ↓
21. Animations
        ↓
22. Testing
        ↓
23. Deployment
```

---

# 📝 Development Philosophy

SmartHaven is being developed around three major principles:

### 1. 🧩 Modular

Components and services should remain reusable and maintainable.

### 2. ⚡ Real-Time

Environmental data should be available to the dashboard with minimal delay.

### 3. 🎨 User-Friendly

Complex sensor information should be represented through simple visual interfaces.

---

# 🌐 Deployment Architecture

The application can be deployed using separate frontend and backend services.

```text
                         🌍 INTERNET
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
          ☁️ Frontend                 ☁️ Backend
             Vercel                    Render
                 │                         │
                 ▼                         ▼
             ⚛️ React                Node.js API
                 │                         │
                 │                    ⚡ Socket.IO
                 │                         │
                 └────────────┬────────────┘
                              │
```

---

# 🚀 Production Checklist

Before deployment:

```text
☐ Configure production environment variables

☐ Configure Firebase Authentication

☐ Configure Firebase database


☐ Configure backend URL

☐ Configure CORS

☐ Test authentication

☐ Test device claiming

☐ Test Socket.IO

☐ Test dummy mode

☐ Test responsive UI

☐ Test dark mode

☐ Test alerts

☐ Remove development secrets

☐ Build frontend

☐ Deploy backend

☐ Deploy frontend

☐ Test production application
```

---

# 🤝 Contributing

Contributions, improvements and suggestions are welcome.

### 1️⃣ Create a branch

```bash
git checkout -b feature/your-feature
```

### 2️⃣ Make changes

```bash
git add .
```

### 3️⃣ Commit changes

```bash
git commit -m "Add your feature"
```

### 4️⃣ Push branch

```bash
git push origin feature/your-feature
```

### 5️⃣ Create Pull Request

Open a Pull Request with a clear description of your changes.

---

# 🐛 Bug Reports

When reporting an issue, include:

```text
1. Description of the problem

2. Steps to reproduce

3. Expected behavior

4. Actual behavior

5. Browser / device

6. Console error

7. Screenshots if available
```

---

# 💡 Feature Requests

Feature requests should include:

```text
Feature Name
        ↓
Problem
        ↓
Proposed Solution
        ↓
Expected Benefit
```

---

# 📄 License

This project is currently intended for:

* Educational purposes
* IoT experimentation
* Development
* Project demonstrations
* Learning
* Portfolio purposes

A formal open-source license can be added according to the project's final distribution requirements.

---

# 👨‍💻 Developer

<div align="center">

# Abhishek Kumar Jaiswar

### Full Stack Developer • MERN Stack • Python • AI/ML • IoT • Mobile Development

<br/>

<a href="https://github.com/abhishekkjaiml">
<img src="https://img.shields.io/badge/GitHub-abhishekkjaiml-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://www.linkedin.com/in/abhishek-kumar-jaiswar-aiml/">
<img src="https://img.shields.io/badge/LinkedIn-Abhishek%20Kumar%20Jaiswar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<br/><br/>

<img src="https://skillicons.dev/icons?i=react,nodejs,python,firebase,arduino,git,github&perline=8"/>

</div>

---

<div align="center">

# 🌿 SmartHaven 2.0

<p align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1000&color=00C896&center=true&vCenter=true&width=750&height=45&lines=Monitor+Your+Environment+%F0%9F%8C%BF;Connect+Your+Devices+%F0%9F%93%A1;Experience+Real-Time+Data+%E2%9A%A1;Simulate+Without+Hardware+%F0%9F%A7%AA;Build+a+Smarter+Home+%F0%9F%8F%A0" />

</p>

<p align="center">

**🌿 Monitor • 📡 Connect • ⚡ Analyze • 🧪 Simulate • 🏠 Improve**

</p>

<p align="center">

<img src="https://img.shields.io/badge/React-⚛️-61DAFB?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Node.js-🟢-339933?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Firebase-🔥-FFCA28?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Socket.IO-⚡-010101?style=for-the-badge"/>
<img src="https://img.shields.io/badge/IoT-🤖-00979D?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Framer%20Motion-🎬-7C3AED?style=for-the-badge"/>

</p>

---

<div align="center">

### 🏠 Built with ❤️ by Abhishek Kumar Jaiswar

**SmartHaven 2.0 — Monitor smarter. Live better.**

</div>

</div>
