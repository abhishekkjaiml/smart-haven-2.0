import DeviceClaimRoom from "../components/Rooms/DeviceClaimRoom";
import SearchRooms from "../components/Rooms/SearchRooms";

import { useTheme } from "../context/theme-context";
import { useDevice } from "../context/device-context";

import { Plus, Unplug } from "lucide-react";

const RoomsPage = () => {
  const { darkMode } = useTheme();
  const { deviceClaimed, resetDevice } = useDevice();

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        darkMode ? "bg-[#0b1220]" : "bg-[#f5f8fc]"
      }`}
    >
      <div className="min-w-full">
        {/* =========================================================
            Page Header
        ========================================================= */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h1
              className={`m-0 text-[30px] sm:text-[34px] font-bold tracking-[-1px] ${
                darkMode ? "text-white" : "text-[#101936]"
              }`}
            >
              Rooms
            </h1>

            <p
              className={`m-0 mt-2 text-sm ${
                darkMode ? "text-slate-400" : "text-[#7180a0]"
              }`}
            >
              Monitor the environment of every room in your home.
            </p>
          </div>

          {deviceClaimed && (
            <div className="flex flex-wrap gap-4">
              {/* Disconnect */}
              <button
                type="button"
                onClick={resetDevice}
                className="w-fit h-11 px-5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                <Unplug size={18} />
                Disconnect
              </button>

              {/* Add Room */}
              <button
                type="button"
                className="w-fit h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                <Plus size={18} />
                Add Room
              </button>
            </div>
          )}
        </div>

        {/* =========================================================
            Search Rooms
        ========================================================= */}

        <div>
          <SearchRooms />
        </div>

        {/* =========================================================
            Device Claim / Rooms
        ========================================================= */}

        <div>
          <DeviceClaimRoom />
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
