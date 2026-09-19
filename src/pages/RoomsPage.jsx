import React from 'react'
import DeviceClaimRoom from '../components/Rooms/DeviceClaimRoom'
import { Save } from 'lucide-react'
import { useTheme } from '../context/theme-context'

const RoomsPage = () => {

  const { darkMode } = useTheme()
  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        darkMode ? "bg-[#0b1220]" : "bg-[#f5f8fc]"
      }
      `}
    >
      <div className="min-w-full ">
        <div  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
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
        </div>
              
              {/* Device Claim */}
        <div>
          <DeviceClaimRoom />
        </div>

        

        
      </div>
    </div>
  )
}

export default RoomsPage