import { useTheme } from "../context/theme-context";

import RoomDetailsCard from "../components/Rooms/RoomDetailsCard";

const RoomsDetails = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen w-full p-4 sm:p-5 lg:p-6 transition-colors duration-300 ${
        darkMode ? "bg-[#0B1220] text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      <RoomDetailsCard />
    </div>
  );
};

export default RoomsDetails;
