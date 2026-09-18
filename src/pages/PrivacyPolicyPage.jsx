import React from "react";
import { Link } from "react-router-dom";
import { Home, ShieldCheck, ArrowLeft } from "lucide-react";

import { useTheme } from "../context/theme-context";

const PrivacyPolicyPage = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen px-5 py-8 sm:px-8 transition-colors duration-300 ${
        darkMode ? "bg-[#0b1220]" : "bg-[#f5f8fc]"
      }`}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <Link
            to="/auth/signup"
            className={`flex items-center gap-2 text-sm font-semibold transition ${
              darkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            <ArrowLeft size={18} />
            Back to Signup
          </Link>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Home size={21} />
            </div>

            <div className="hidden sm:block">

              <h2
                className={`m-0 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#101936]"
                }`}
              >
                SmartHaven
              </h2>

              <p
                className={`m-0 text-[11px] ${
                  darkMode ? "text-slate-500" : "text-[#7180a0]"
                }`}
              >
                Smart Home Monitoring
              </p>

            </div>
          </div>
        </div>

        {/* Main Card */}

        <div
          className={`rounded-2xl border p-6 sm:p-10 transition-colors duration-300 ${
            darkMode
              ? "bg-[#111c2e] border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              : "bg-white border-[#e1e8f2] shadow-[0_10px_40px_rgba(30,70,120,0.06)]"
          }`}
        >

          {/* Title */}

          <div className="mb-8">

            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
                darkMode
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  : "bg-emerald-50 border border-emerald-100 text-emerald-600"
              }`}
            >
              <ShieldCheck size={15} />
              Privacy & Security
            </div>

            <h1
              className={`m-0 text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? "text-white" : "text-[#101936]"
              }`}
            >
              Privacy Policy
            </h1>

            <p
              className={`m-0 mt-2 text-sm ${
                darkMode ? "text-slate-500" : "text-[#7180a0]"
              }`}
            >
              Last updated: September 2026
            </p>

          </div>

          {/* Content */}

          <div
            className={`space-y-7 text-sm leading-7 ${
              darkMode ? "text-slate-400" : "text-[#5f6f8c]"
            }`}
          >

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                1. Introduction
              </h2>

              <p className="m-0">
                SmartHaven respects your privacy and is committed to protecting
                the information you provide while using our smart-home
                monitoring application.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                2. Information We Collect
              </h2>

              <p className="m-0">
                When you use SmartHaven, we may collect information such as your
                name, email address, account information, device information and
                environmental sensor readings required to provide the
                application's features.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                3. How We Use Your Information
              </h2>

              <p className="m-0">
                The information we collect may be used to create and manage your
                account, connect your smart devices, display sensor readings,
                provide environmental insights and improve the SmartHaven
                experience.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                4. Device & Sensor Data
              </h2>

              <p className="m-0">
                SmartHaven may process data received from connected devices,
                including temperature, humidity and air-quality readings. This
                information is used to display monitoring information and
                related insights inside the application.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                5. Data Security
              </h2>

              <p className="m-0">
                We take reasonable measures to protect your account and
                information from unauthorized access, alteration or misuse.
                However, no online service can guarantee complete security.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                6. Third-Party Services
              </h2>

              <p className="m-0">
                SmartHaven may use third-party services for authentication, data
                storage, hosting and application functionality. These services
                may process information according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                7. Cookies & Local Storage
              </h2>

              <p className="m-0">
                SmartHaven may use browser storage technologies such as local
                storage to maintain login sessions, device information and
                application preferences on your device.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                8. Your Choices
              </h2>

              <p className="m-0">
                You may stop using SmartHaven at any time. You can also contact
                the SmartHaven support team regarding questions about your
                account or personal information.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                9. Changes to This Privacy Policy
              </h2>

              <p className="m-0">
                This Privacy Policy may be updated periodically to reflect
                changes to SmartHaven or its services. Updated versions will
                include a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2
                className={`m-0 mb-2 text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#17213f]"
                }`}
              >
                10. Contact Us
              </h2>

              <p className="m-0">
                If you have any questions or concerns regarding this Privacy
                Policy, please contact the SmartHaven support team.
              </p>
            </section>

          </div>

          {/* Footer */}

          <div
            className={`mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              darkMode ? "border-white/10" : "border-slate-100"
            }`}
          >

            <p
              className={`m-0 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              © 2026 SmartHaven. All rights reserved.
            </p>

            <Link
              to="/auth/signup"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Back to Signup
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;