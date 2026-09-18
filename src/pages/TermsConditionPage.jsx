import React from "react";
import { Link } from "react-router-dom";
import { Home, ShieldCheck, ArrowLeft } from "lucide-react";

const TermsConditionPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f8fc] px-5 py-8 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/auth/signup"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            <ArrowLeft size={18} />
            Back to Signup
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-100">
              <Home size={21} />
            </div>

            <div className="hidden sm:block">
              <h2 className="m-0 text-lg font-bold text-[#101936]">
                SmartHaven
              </h2>

              <p className="m-0 text-[11px] text-[#7180a0]">
                Smart Home Monitoring
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-[#e1e8f2] shadow-[0_10px_40px_rgba(30,70,120,0.06)] p-6 sm:p-10">
          {/* Title */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4">
              <ShieldCheck size={15} />
              Legal Information
            </div>

            <h1 className="m-0 text-3xl sm:text-4xl font-bold tracking-tight text-[#101936]">
              Terms & Conditions
            </h1>

            <p className="m-0 mt-2 text-sm text-[#7180a0]">
              Last updated: September 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-7 text-sm leading-7 text-[#5f6f8c]">
            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                1. Acceptance of Terms
              </h2>

              <p className="m-0">
                By creating an account and using SmartHaven, you agree to these
                Terms & Conditions. If you do not agree with these terms, please
                do not use the SmartHaven application.
              </p>
            </section>

            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                2. Use of SmartHaven
              </h2>

              <p className="m-0">
                SmartHaven provides smart-home environmental monitoring features
                such as temperature, humidity and air-quality information. You
                agree to use the application only for lawful and appropriate
                purposes.
              </p>
            </section>

            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                3. Your Account
              </h2>

              <p className="m-0">
                You are responsible for keeping your account credentials secure.
                You should not share your password with other people or use
                another person's account without permission.
              </p>
            </section>

            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                4. Sensor Information
              </h2>

              <p className="m-0">
                Environmental readings displayed by SmartHaven are provided for
                monitoring and informational purposes. Sensor readings may vary
                depending on device configuration, connectivity and
                environmental conditions.
              </p>
            </section>

            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                5. Privacy
              </h2>

              <p className="m-0">
                SmartHaven may collect information required to provide its
                services. We aim to protect your information and use it only for
                appropriate application functionality.
              </p>
            </section>

            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                6. Service Availability
              </h2>

              <p className="m-0">
                SmartHaven may occasionally be unavailable because of
                maintenance, network problems, device connectivity or other
                technical issues.
              </p>
            </section>

            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                7. Changes to These Terms
              </h2>

              <p className="m-0">
                These Terms & Conditions may be updated from time to time.
                Continued use of SmartHaven after changes are published means
                that you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="m-0 mb-2 text-lg font-bold text-[#17213f]">
                8. Contact
              </h2>

              <p className="m-0">
                If you have questions about these Terms & Conditions, please
                contact the SmartHaven support team.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="m-0 text-xs text-slate-400">
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

export default TermsConditionPage;
