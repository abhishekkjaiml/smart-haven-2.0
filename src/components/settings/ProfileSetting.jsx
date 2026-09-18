import { Frown, Mail, MapPin, Phone, User } from "lucide-react";
import { dummySettings, dummyProfileSettings } from "../../db/dummyData";
// import {isDemo, current_username} from '../../hooks/UseSetting'
import { useState } from "react";
import { useTheme } from "../../context/theme-context";
import { UseSetting } from "../../hooks/UseSetting";

const ProfileSetting = () => {
  const [profile, setProfile] = useState(dummySettings.profile);

  const {
    user,
    current_username,
    isDemo,
    userEmail,
    contact_number,
    profilePhoto,
    userFirstName,
    userLastName,
  } = UseSetting();

  const { darkMode } = useTheme();

  return (
    <div
      className={`mt-7 rounded-2xl border overflow-hidden transition-colors duration-300 ${
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
              ? "bg-blue-500/10 text-blue-400"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          <User size={20} />
        </div>
        <div>
          <h2
            className={`m-0 text-base font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Profile Settings
          </h2>
          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-[#8997b4]"
            }`}
          >
            Update your personal information.
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-7">
          <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#3949c9] to-[#2c3bb7] text-white flex items-center justify-center text-2xl font-bold shadow-md">
            {!isDemo &&
              (profilePhoto ? (
                <img
                  src={profilePhoto}
                  className="w-full h-full rounded-full object-cover p-0.5"
                  alt="Profile"
                />
              ) : (
                <div>
                  {userFirstName.charAt(0)}
                  {userLastName.charAt(0)}
                </div>
              ))}

            {isDemo &&
              (profile.profileImg ? (
                <img
                  src={profile.profileImg}
                  className="w-full h-full rounded-full object-cover p-0.5"
                  alt="Profile"
                />
              ) : (
                <div>
                  {profile.firstName.charAt(0)}
                  {profile.lastName.charAt(0)}
                </div>
              ))}
          </div>

          <div className="text-center sm:text-left">
            <h3
              className={`m-0 text-lg font-bold ${
                darkMode ? "text-white" : "text-[#101936]"
              }`}
            >
              {/* {profile.displayName} */}

              {isDemo ? profile.displayName : current_username}
            </h3>

            <p
              className={`m-0 mt-1 text-sm ${
                darkMode ? "text-slate-500" : "text-[#7180a0]"
              }`}
            >
              {isDemo ? "Demo Account" : "Firebase Account"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}

          <div>
            <label
              className={`block mb-2 text-xs font-semibold ${
                darkMode ? "text-slate-300" : "text-[#34415f]"
              }`}
            >
              First Name
            </label>

            <div className="relative">
              <User
                size={17}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-slate-500" : "text-[#8997b4]"
                }`}
              />

              <input
                type="text"
                value={`${isDemo ? profile.firstName : userFirstName}`}
                readOnly
                // onChange={}
                className={`w-full h-12 pl-11 pr-4 rounded-xl border outline-none text-sm transition ${
                  darkMode
                    ? "bg-[#0b1220] border-white/10 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    : "bg-white border-slate-200 text-[#101936] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                }`}
              />
            </div>
          </div>

          {/* Last Name */}

          <div>
            <label
              className={`block mb-2 text-xs font-semibold ${
                darkMode ? "text-slate-300" : "text-[#34415f]"
              }`}
            >
              Last Name
            </label>

            <input
              readOnly
              type="text"
              value={`${isDemo ? profile.lastName : userLastName}`}
              //   onChange={}
              className={`w-full h-12 px-4 rounded-xl border outline-none text-sm transition ${
                darkMode
                  ? "bg-[#0b1220] border-white/10 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  : "bg-white border-slate-200 text-[#101936] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              }`}
            />
          </div>

          {/* Email */}

          <div>
            <label
              className={`block mb-2 text-xs font-semibold ${
                darkMode ? "text-slate-300" : "text-[#34415f]"
              }`}
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={17}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-slate-500" : "text-[#8997b4]"
                }`}
              />

              <input
                type="email"
                value={`${isDemo && profile.email}`}
                readOnly
                className={`w-full h-12 pl-11 pr-4 rounded-xl border outline-none text-sm ${
                  darkMode
                    ? "bg-[#0b1220] border-white/10 text-slate-500"
                    : "bg-slate-50 border-slate-200 text-slate-500"
                }`}
              />
            </div>
          </div>

          {/* Phone */}

          <div>
            <label
              className={`block mb-2 text-xs font-semibold ${darkMode ? "text-slate-300" : "text-[#34415f]"}`}
            >
              Phone
            </label>

            <div className="relative">
              <Phone
                size={17}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-slate-500" : "text-[#8997b4]"
                }`}
              />

              <input
                readOnly
                type="text"
                value={`${isDemo ? profile.phone : contact_number}`}
                // onChange={}
                className={`w-full h-12 pl-11 pr-4 rounded-xl border outline-none text-sm transition ${darkMode ? "bg-[#0b1220] border-white/10 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" : "bg-white border-slate-200 text-[#101936] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"}`}
              />
            </div>
          </div>

          {/* Location */}

          <div>
            <label
              className={`block mb-2 text-xs font-semibold ${
                darkMode ? "text-slate-300" : "text-[#34415f]"
              }`}
            >
              Location
            </label>

            <div className="relative">
              <MapPin
                size={17}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-slate-500" : "text-[#8997b4]"
                }`}
              />

              <input
                readOnly
                value={profile.location}
                // onChange={}
                className={`w-full h-12 pl-11 pr-4 rounded-xl border outline-none text-sm transition ${
                  darkMode
                    ? "bg-[#0b1220] border-white/10 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    : "bg-white border-slate-200 text-[#101936] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                }`}
              />
            </div>
          </div>

          {/* Timezone */}

          <div>
            <label
              className={`block mb-2 text-xs font-semibold ${
                darkMode ? "text-slate-300" : "text-[#34415f]"
              }`}
            >
              Timezone
            </label>

            <input
              value={profile.timezone}
              readOnly
              className={`w-full h-12 px-4 rounded-xl border outline-none text-sm ${
                darkMode
                  ? "bg-[#0b1220] border-white/10 text-slate-500"
                  : "bg-slate-50 border-slate-200 text-slate-500"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
