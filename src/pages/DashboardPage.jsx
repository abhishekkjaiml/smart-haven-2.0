import useDashboard from "../hooks/useDashboard";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DeviceClaim from "../components/dashboard/DeviceClaim";
import SensorDataCard from "../components/dashboard/SensorDataCard";
import HealthMessage from "../components/dashboard/HealthMessage";
import AlertModal from "../components/dashboard/AlertModal";

const DashboardPage = ({ isDummyUser = false, logout, }) => {
  const dashboard = useDashboard({
    isDummyUser,
  });

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${ dashboard.darkMode ? "bg-[#0b1220]" : "bg-[#f5f8fc]" }`}
    >
      {/* Header */}

      <DashboardHeader
        darkMode={dashboard.darkMode}
        setDarkMode={dashboard.setDarkMode}
        isDemo={dashboard.isDemo}
        userName={dashboard.userName}
        userInitial={dashboard.userInitial}
        onMenuClick={dashboard.onMenuClick}
      />

      {/* Main */}

      <main>
        
        {/* Device Claim  */}

        <DeviceClaim
          deviceId={dashboard.deviceId}
          loading={dashboard.loading}
          deviceClaimed={dashboard.deviceClaimed}
          darkMode={dashboard.darkMode}
          isDemo={dashboard.isDemo}
          handleDeviceChange={dashboard.handleDeviceChange}
          claimDevice={dashboard.claimDevice}
          clearDevice={dashboard.clearDevice}
        />

        {/* Sensor Data */}

        {dashboard.deviceClaimed && (
          <>
            <SensorDataCard
              data={dashboard.data}
              darkMode={dashboard.darkMode}
              isDemo={dashboard.isDemo}
              lastUpdated={dashboard.lastUpdated}
              startDummyData={dashboard.startDummyData}
            />

            {/* Health Message */}

            <HealthMessage
              darkMode={dashboard.darkMode}
            />
          </>
        )}
      </main>

      {/* Alert Model */}

      <AlertModal
        alertData={dashboard.alertData}
        setAlertData={dashboard.setAlertData}
      />
    </div>
  );
};

export default DashboardPage;