import { Search } from "lucide-react";

import { useDevice } from "../../context/device-context";
import { useTheme } from "../../context/theme-context";

const SearchRooms = () => {
  const { search, setSearch, rooms } = useDevice();
  const { darkMode } = useTheme();

  const onRoomSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {rooms.length > 0  && (
        <div className="mt-5">
          <div
            className={`w-full rounded-2xl p-4 mb-6 shadow-sm border ${
              darkMode
                ? "bg-[#111c2e] border-white/10"
                : "bg-white border-slate-100"
            }`}
          >
            <div className="relative w-full">
              <Search
                size={19}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              />

              <input
                type="text"
                value={search}
                onChange={onRoomSearchChange}
                placeholder="Search rooms, room type or device ID..."
                className={`w-full h-12 pl-11 pr-4 rounded-xl border outline-none text-sm transition ${
                  darkMode
                    ? "border-white/10 bg-[#0b1220] text-slate-200 placeholder:text-slate-500 focus:bg-[#0b1220] focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                    : "border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchRooms;
