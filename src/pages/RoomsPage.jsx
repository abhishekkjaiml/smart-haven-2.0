import { useTheme } from "../context/theme-context"

const RoomsPage = () => {

  const { darkMode } = useTheme()
  return (
    <div
      className={`
        min-h-screen p-6 transition-colors ${
          darkMode ? 'bg-[#0b1220] text-white' : 'bg-[#f5f8fc] text-[#101936]'
        }
      `}
      >
      <h1 className="m-0 text-2xl font-bold">
        Rooms
      </h1>

      <p
        className={`
          m-0 mt-2 text-sm ${
            darkMode ? "text-slate-400" : "text-slate-500"
          } 
        `}
      >
        Manage and monitor your smart home rooms.
      </p>
    </div>
  )
}

export default RoomsPage