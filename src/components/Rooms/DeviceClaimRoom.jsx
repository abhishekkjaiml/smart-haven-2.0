import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useDashboard from "../../hooks/useDashboard";
import {
  Link2,
  RefreshCw,
  ShieldCheck,
  X,
  AlertCircle,
  CheckCircle2,
  Info,
} from "lucide-react";
import { DUMMY_DEVICE_ID } from "../../db/dummyData";
import { div, p } from "framer-motion/client";

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

  console.log(typeof alertData);

  return (
    <section className="">
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
                  className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-semibold flex items-center justify-center transition cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex gap-2 items-center">
                      <RefreshCw size={17} className="animate-spin" />
                      Connecting...
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <Link2 />
                      Claim Device
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Demo User */}

            <div>
              {isDummyUser && (
                <div className="mt-6 rounded-2xl bg-white border border-blue-100 px-5 py-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <ShieldCheck size={18} />
                    </div>

                    <div>
                      <p className="m-0 text-xs font-bold text-slate-700">
                        Demo Device
                      </p>
                      <p className="m-0 mt-1 text-xs text-slate-500">
                        Device ID:
                        <span>{DUMMY_DEVICE_ID}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>Device Clained </>
      )}

      {alertData && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[3px]">
            {/* Model */}

            <div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="smarthaven-alert-title"
              aria-describedby="smarthaven-alert-message"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-107.5 overflow-hidden rounded-3xl bg-white shadow-[0_25px_70px_rgba(15,23,42,0.20)] animate-[scaleIn_0.2s_ease-out]"
            >
              <div
                className={`h-1.5 w-full ${
                  alertData.type === "success"
                    ? "bg-emerald-500"
                    : alertData.type === "error"
                      ? "bg-rose-500"
                      : "bg-blue-500"
                }`}
              />

              <button
                type="button"
                onClick={() => setAlertData(null)}
                className="absolute right-4 top-4 w-9 h-9 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
              >
                <X size={18} />
              </button>

              <div>
                {/* icon */}

                <div
                  className={`w-14.5 h-14.5 rounded-2xl flex items-center justify-center mb-5 ${
                    alertData.type === "success"
                      ? "bg-emerald-50 text-emerald-500"
                      : alertData.type === "error"
                        ? "bg-rose-50 text-rose-500"
                        : "bg-blue-50 text-blue-500"
                  }`}
                >
                  {alertData.type === "success" && (
                    <CheckCircle2 size={30} strokeWidth={2.2} />
                  )}

                  {alertData.type === "error" && (
                    <AlertCircle size={30} strokeWidth={2.2} />
                  )}

                  {alert.type === "info" && (
                    <Info size={30} strokeWidth={2.2} />
                  )}
                </div>

                {/* Title */}

                <h2
                  id="smarthaven-alert-title"
                  className="m-0 pr-8 text-[21px] font-bold tracking-[-0.3px] text-slate-800"
                >
                  {alertData.titale}
                </h2>

                {/* Message */}

                <p
                  id="smarthaven-alert-message"
                  className="m-0 mt-2.5 text-sm leading-6 text-slate-500"
                >
                  {alertData.message}
                </p>

                {/* Device ID */}

                {alertData.deviceId && (
                  <div
                    className={`mt-5 rounded-2xl border px-4 py-3.5 ${alertData.type === "success" ? "border-emerald-100 bg-emerald-50/70" : "border-rose-100 bg-rose-50/70"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 shrink-0 rounded-xl bg-white flex items-center justify-center ${alertData.type === "success" ? "text-emerald-500" : "text-rose-500"}`}
                      >
                        <Link2 size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.7px] text-slate-400">
                          Device ID
                        </p>

                        <p
                          className={`m-0 mt-0.5 text-sm font-bold truncate ${alertData.type === "success" ? "text-emerald-700" : "text-rose-700"}`}
                        >
                          {alertData.deviceId}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Invalind Device Hint */}

                {alertData.type === "error" && alertData.deviceId && (
                  <p className="m-0 mt-3 text-xs text-slate-400">
                    Please use the demo device ID shown above.
                  </p>
                )}

                {/* Action Button */}

                <button
                  onClick={() => setAlertData(null)}
                  className={`w-full h-12 mt-6 rounded-xl text-sm font-semibold text-white
                  flex items-center justify-center gap-2 transition cursor-pointer ${alertData.type === "success" ? "bg-emerald-500 hover:bg-emerald-600" : alertData.type === "error" ? "bg-rose-500 hover:bg-rose-600" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                  {alertData.type === "success" ? "Continue" : "Okey"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeviceClaimRoom;
