import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useDashboard from "../../hooks/useDashboard";
import { Link2, RefreshCw } from "lucide-react";
import { DUMMY_DEVICE_ID } from "../../db/dummyData";

const DeviceClaimRoom = () => {
  const { isDemo } = useDashboard();
  const { isDummyUser } = useAuth();

  const [Search, setSearch] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [claimedDeviceId, setClaimedDeviceId] = useState("");
  const [deviceClaimed, setDeviceClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [alertData, setAlertData] = useState(null);

  const CLAIMED_DEVICE_KEY = "smarthaven_claimed_device";

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
  }, []);

  //Claim Device

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

  return (
    <section>
      {!deviceClaimed ? (
        <div className="w-full rounded-3xl border border-blue-100 bg-linear-to-br from-white via-blue-50/60 to-slate-50 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
              <Link2 size={30} />
            </div>
            <h2 className="mt-5 mb-0 text-2xl font-bold text-slate-800">
              Connect Your Device
            </h2>

            <p className="mt-2 mb-0 text-sm leading-6 text-slate-500 max-w-xl mx-auto">
              Claim your SmartHaven environment monitoring device to unlock your
              rooms and view live sensor data.
            </p>

            <div className="mt-7 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Link2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    // onKeyDown={}
                    placeholder="Enter Device ID"
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleClaimDevice}
                  disabled={loading}
                  className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-semibold flex items-center justify-center gap-2 transition cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div>
                      <RefreshCw size={17} className="animate-spin" />
                      Connecting...
                    </div>
                  ) : (
                    <div>
                      <Link2 />
                      Claim Device
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Device Clained {claimedDeviceId}</>
      )}
    </section>
  );
};

export default DeviceClaimRoom;
