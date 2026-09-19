import { createContext, useContext, useState } from "react";

const DeviceContext = createContext();

const DeviceProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [claimedDeviceId, setClaimedDeviceId] = useState("");
  const [deviceClaimed, setDeviceClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [alertData, setAlertData] = useState(null);

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
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

const useDevice = () => useContext(DeviceContext);

export { DeviceProvider, useDevice };
