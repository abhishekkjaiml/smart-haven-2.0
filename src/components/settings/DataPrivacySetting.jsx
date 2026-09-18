import { Database } from 'lucide-react'
import { useTheme } from '../../context/theme-context'

import { PrivacySettings } from './SettingPageData'
import { useState } from 'react'
import { dummySettings } from '../../db/dummyData'

const DataPrivacySetting = () => {

  const { darkMode } = useTheme()

  const [dataPrivacy, setDataPrivacy] = useState(
    dummySettings.privacy
  )

  const toggleDataPrivacy = (key) => {
    setDataPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  
  return (
    <section
      className={`mt-6 rounded-2xl border transition-colors duration-300 ${
          darkMode
            ? "bg-[#111c2e] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
            : "bg-white border-slate-100 shadow-[0_4px_20px_rgba(36,68,120,0.05)]"
        }`}
    >
      <div
        className={`px-6 py-5 border-b flex items-center gap-3 ${
            darkMode ? "border-white/10" : "border-slate-100"
          }`}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              darkMode
                ? "bg-amber-500/10 text-amber-400"
                : "bg-amber-50 text-amber-600"
            }`}
        >
          <Database size={20} />
        </div>

        <div>
          <h2
            className={`m-0 text-base font-bold ${
                darkMode ? "text-white" : "text-[#101936]"
              }`}
          >
            Data & Privacy
          </h2>

          <p
            className={`m-0 mt-1 text-xs ${
                darkMode ? "text-slate-500" : "text-[#8997b4]"
              }`}
          >
            Manage how your SmartHaven data is handled.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-1">
        {PrivacySettings.map((privacy) => (
          <div
            key={privacy.id}
            className={`flex items-center justify-between gap-5 py-4 border-b last:border-none ${
              darkMode ? "border-white/5" : "border-slate-50"
            }`}
          >
            <div>
              <p
                className={`m-0 text-sm font-semibold ${
                  darkMode ? "text-white" : "text-[#101936]"
                }`}
              >
                {privacy.title}
              </p>

              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-[#8997b4]"
                }`}
              >
                {privacy.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleDataPrivacy(privacy.id)}
              className={`relative shrink-0 w-11 h-6 rounded-full transition cursor-pointer ${dataPrivacy[privacy.id] ? "bg-blue-600" : darkMode ? "bg-slate-700" : "bg-slate-200"}`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition ${dataPrivacy[privacy.id] ? "left-6" : "left-1"} `}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DataPrivacySetting