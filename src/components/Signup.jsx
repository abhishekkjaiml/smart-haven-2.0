import { useState } from "react";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Wind,
  Leaf,
  ChevronRight,
  Home,
  UserRound,
  CheckCircle2,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";

import backgroundIMG2 from "../assets/LoginBG2.png";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../services/firebase";

import { Link, useNavigate } from "react-router-dom";

import { useTheme } from "../context/theme-context";

const Signup = () => {
  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // =========================================================
  // Input Handlers
  // =========================================================

  const onUiModeBtnClick = () => {
    setDarkMode((prev) => !prev);
  };

  const onNameInputChange = (e) => {
    setName(e.target.value);
  };

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordInputChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // =========================================================
  // Password Toggle
  // =========================================================

  const onShowPasswordClick = () => {
    setShowPassword((prev) => !prev);
  };

  const onShowConfirmPasswordClick = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // =========================================================
  // Signup
  // =========================================================

  const handleSignup = async () => {
    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      setError("Please enter your full name.");
      return;
    }

    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please create a password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    // =========================================================
    // Firebase Signup
    // =========================================================

    try {
      setLoading(true);

      localStorage.removeItem("smarthaven_dummy_user");

      window.dispatchEvent(new Event("smarthaven-dummy-logout"));

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        cleanEmail,
        password,
      );

      // =========================================================
      // Update Firebase Profile
      // =========================================================

      if (userCredential?.user) {
        await updateProfile(userCredential.user, {
          displayName: cleanName,
        });
      }

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Signup Error", error);

      switch (error?.code) {
        case "auth/email-already-in-use":
          setError("An account with this email already exists.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/weak-password":
          setError("Password is too weak. Please use a stronger password.");
          break;

        case "auth/operation-not-allowed":
          setError("Email/password signup is currently unavailable.");
          break;

        case "auth/network-request-failed":
          setError("Network error. Please check your internet connection.");
          break;

        default:
          setError("Unable to create your account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // Enter Key
  // =========================================================

  const handleKeyDownOrPressEnter = (e) => {
    if (e.key === "Enter") {
      handleSignup();
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex transition-colors duration-300 ${
        darkMode ? "bg-[#0b1220]" : "bg-[#f5f8fc]"
      }`}
    >
      {/* =====================================================
          LEFT SECTION
      ===================================================== */}

      <div
        className={`hidden lg:flex lg:w-[55%] relative overflow-hidden px-12 xl:px-20 py-10 flex-col transition-colors duration-300 ${
          darkMode
            ? "bg-linear-to-br from-[#101c31] via-[#0d182a] to-[#102420]"
            : "bg-linear-to-br from-[#eaf4ff] via-[#f4f9ff] to-[#eef8f7]"
        }`}
      >
        {/* Decorative Background */}

        <div
          className={`absolute -top-32 -left-32 w-100 h-100 rounded-full blur-3xl ${
            darkMode ? "bg-blue-500/10" : "bg-blue-200/20"
          }`}
        />

        <div
          className={`absolute -bottom-40 -right-32 w-112.5 h-112.5 rounded-full blur-3xl ${
            darkMode ? "bg-emerald-500/10" : "bg-emerald-200/20"
          }`}
        />

        <div
          className={`absolute top-[35%] right-[8%] w-72 h-72 rounded-full blur-3xl ${
            darkMode ? "bg-cyan-500/5" : "bg-cyan-100/20"
          }`}
        />

        {/* =====================================================
            Logo
        ===================================================== */}

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Home size={24} strokeWidth={2.5} />
          </div>

          <div>
            <h2
              className={`m-0 text-xl font-bold ${
                darkMode ? "text-white" : "text-[#101936]"
              }`}
            >
              SmartHaven
            </h2>

            <p
              className={`m-0 text-xs ${
                darkMode ? "text-slate-500" : "text-[#7180a0]"
              }`}
            >
              Smart Home Monitoring
            </p>
          </div>
        </div>

        {/* =====================================================
            Heading
        ===================================================== */}

        <div className="relative z-10 mt-20 max-w-142.5">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 shadow-sm ${
              darkMode
                ? "bg-white/5 border-white/10 text-blue-400"
                : "bg-white/80 border-blue-100 text-blue-600"
            }`}
          >
            <Sparkles size={15} />
            Smart Environment
          </div>

          <h1
            className={`m-0 text-[46px] xl:text-[54px] leading-[1.08] tracking-[-2px] font-bold ${
              darkMode ? "text-white" : "text-[#101936]"
            }`}
          >
            Build a smarter
            <br />
            home with <span className="text-blue-500">SmartHaven.</span>
          </h1>

          <p
            className={`m-0 mt-6 text-base leading-7 max-w-125 ${
              darkMode ? "text-slate-400" : "text-[#7180a0]"
            }`}
          >
            Create your account and start monitoring your home's environment in
            real-time with intelligent air quality insights.
          </p>
        </div>

        {/* =====================================================
            Illustration
        ===================================================== */}

        <div className="relative flex-1 mt-8 min-h-70 flex items-end justify-center">
          <img
            src={backgroundIMG2}
            alt="Smart Haven Environment"
            className={`w-125 max-w-full object-contain rounded mb-5 transition-all duration-300 ${
              darkMode
                ? "drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
                : "drop-shadow-[0_20px_35px_rgba(35,83,140,0.12)]"
            }`}
          />
        </div>

        {/* =====================================================
            Bottom
        ===================================================== */}

        <div
          className={`relative z-10 flex items-center gap-3 text-sm ${
            darkMode ? "text-slate-400" : "text-[#7180a0]"
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-sm ${
              darkMode ? "bg-white/5" : "bg-white/80"
            }`}
          >
            <ShieldCheck size={18} className="text-emerald-500" />
          </div>

          <div>
            <p
              className={`m-0 text-xs font-semibold ${
                darkMode ? "text-slate-300" : "text-[#52617d]"
              }`}
            >
              Your home. Your health. Your data.
            </p>

            <p
              className={`m-0 mt-0.5 text-[10px] ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Private & secure environmental monitoring
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT SECTION
      ===================================================== */}

      <div
        className={`w-full lg:w-[45%] min-h-screen flex items-center justify-center px-5 sm:px-8 py-10 relative overflow-hidden transition-colors duration-300 ${
          darkMode ? "bg-[#0f1728]" : "bg-white"
        }`}
      >
        {/* Decorative Background */}

        <div
          className={`absolute -top-32 -right-32 w-90 h-90 rounded-full blur-3xl pointer-events-none ${
            darkMode ? "bg-blue-500/5" : "bg-blue-100/30"
          }`}
        />

        <div
          className={`absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
            darkMode ? "bg-cyan-500/5" : "bg-cyan-100/20"
          }`}
        />

        <div className=" z-10 w-full max-w-115">
          <div className="absolute top-6 right-6 z-20">
            <button
              type="button"
              onClick={onUiModeBtnClick}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              className={`group relative flex items-center gap-2.5 w-34.5 h-11 px-2 rounded-full border shadow-sm cursor-pointer transition-all duration-300 ${
                darkMode
                  ? "bg-[#111c2e] border-white/10 shadow-blue-500/10"
                  : "bg-white border-slate-200 shadow-slate-200/60"
              }`}
            >
              {/* Sun */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  !darkMode
                    ? "bg-amber-50 text-amber-500 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                <Sun size={17} strokeWidth={2.3} />
              </div>

              {/* Toggle Track */}
              <div
                className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                    : "bg-slate-200"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300 ${
                    darkMode ? "left-5" : "left-0.5"
                  }`}
                />
              </div>

              {/* Moon */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  darkMode ? "bg-blue-500/10 text-blue-400" : "text-slate-400"
                }`}
              >
                <Moon size={17} strokeWidth={2.3} />
              </div>
            </button>
          </div>
          {/* =====================================================
              Mobile Logo
          ===================================================== */}

          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Home size={24} strokeWidth={2.5} />
            </div>

            <div>
              <h2
                className={`m-0 text-xl font-bold ${
                  darkMode ? "text-white" : "text-[#101936]"
                }`}
              >
                SmartHaven
              </h2>

              <p
                className={`m-0 text-xs ${
                  darkMode ? "text-slate-500" : "text-[#7180a0]"
                }`}
              >
                Smart Home Monitoring
              </p>
            </div>
          </div>

          {/* =====================================================
              Heading
          ===================================================== */}

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-blue-500/10" : "bg-blue-50"
                }`}
              >
                <Leaf
                  size={15}
                  className={darkMode ? "text-blue-400" : "text-blue-500"}
                />
              </div>

              <span
                className={`text-[10px] uppercase tracking-[1.5px] font-bold ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Smart Environment
              </span>
            </div>

            <h1
              className={`m-0 text-[32px] sm:text-[36px] font-bold tracking-[-1px] ${
                darkMode ? "text-white" : "text-[#101936]"
              }`}
            >
              Create your account
            </h1>

            <p
              className={`m-0 mt-2 text-sm sm:text-base ${
                darkMode ? "text-slate-400" : "text-[#7180a0]"
              }`}
            >
              Join SmartHaven and start monitoring your home.
            </p>
          </div>

          {/* =====================================================
              FORM
          ===================================================== */}

          <div className="space-y-4">
            {/* ===================================================
                Full Name
            =================================================== */}

            <div>
              <label
                className={`block mb-2 text-sm font-semibold ${
                  darkMode ? "text-slate-300" : "text-[#34415f]"
                }`}
              >
                Full Name
              </label>

              <div className="relative group">
                <UserRound
                  size={19}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    darkMode
                      ? "text-slate-500 group-focus-within:text-blue-400"
                      : "text-[#8997b4] group-focus-within:text-blue-500"
                  }`}
                />

                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    onNameInputChange(e);
                    setError("");
                  }}
                  onKeyDown={handleKeyDownOrPressEnter}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className={`w-full h-13.5 pl-12 pr-4 rounded-xl border text-sm outline-none transition ${
                    darkMode
                      ? "bg-[#111c2e] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      : "bg-white border-[#dbe4f1] text-slate-800 placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  }`}
                />
              </div>
            </div>

            {/* ===================================================
                Email
            =================================================== */}

            <div>
              <label
                className={`block mb-2 text-sm font-semibold ${
                  darkMode ? "text-slate-300" : "text-[#34415f]"
                }`}
              >
                Email Address
              </label>

              <div className="relative group">
                <Mail
                  size={19}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    darkMode
                      ? "text-slate-500 group-focus-within:text-blue-400"
                      : "text-[#8997b4] group-focus-within:text-blue-500"
                  }`}
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    onEmailInputChange(e);
                    setError("");
                  }}
                  onKeyDown={handleKeyDownOrPressEnter}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={`w-full h-13.5 pl-12 pr-4 rounded-xl border text-sm outline-none transition ${
                    darkMode
                      ? "bg-[#111c2e] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      : "bg-white border-[#dbe4f1] text-slate-800 placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  }`}
                />
              </div>
            </div>

            {/* ===================================================
                Password
            =================================================== */}

            <div>
              <label
                className={`block mb-2 text-sm font-semibold ${
                  darkMode ? "text-slate-300" : "text-[#34415f]"
                }`}
              >
                Password
              </label>

              <div className="relative group">
                <LockKeyhole
                  size={19}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    darkMode
                      ? "text-slate-500 group-focus-within:text-blue-400"
                      : "text-[#8997b4] group-focus-within:text-blue-500"
                  }`}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    onPasswordInputChange(e);
                    setError("");
                  }}
                  onKeyDown={handleKeyDownOrPressEnter}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className={`w-full h-13.5 pl-12 pr-12 rounded-xl border text-sm outline-none transition ${
                    darkMode
                      ? "bg-[#111c2e] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      : "bg-white border-[#dbe4f1] text-slate-800 placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  }`}
                />

                <button
                  type="button"
                  onClick={onShowPasswordClick}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center border-none cursor-pointer transition ${
                    darkMode
                      ? "text-slate-500 hover:bg-blue-500/10 hover:text-blue-400"
                      : "text-[#8997b4] hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* ===================================================
                Confirm Password
            =================================================== */}

            <div>
              <label
                className={`block mb-2 text-sm font-semibold ${
                  darkMode ? "text-slate-300" : "text-[#34415f]"
                }`}
              >
                Confirm Password
              </label>

              <div className="relative group">
                <LockKeyhole
                  size={19}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    darkMode
                      ? "text-slate-500 group-focus-within:text-blue-400"
                      : "text-[#8997b4] group-focus-within:text-blue-500"
                  }`}
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    onConfirmPasswordInputChange(e);
                    setError("");
                  }}
                  onKeyDown={handleKeyDownOrPressEnter}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className={`w-full h-13.5 pl-12 pr-12 rounded-xl border text-sm outline-none transition ${
                    darkMode
                      ? "bg-[#111c2e] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      : "bg-white border-[#dbe4f1] text-slate-800 placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  }`}
                />

                <button
                  type="button"
                  onClick={onShowConfirmPasswordClick}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center border-none cursor-pointer transition ${
                    darkMode
                      ? "text-slate-500 hover:bg-blue-500/10 hover:text-blue-400"
                      : "text-[#8997b4] hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* ===================================================
                Password Requirement
            =================================================== */}

            <div
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-colors ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              <CheckCircle2
                size={15}
                className={
                  password.length >= 6
                    ? "text-emerald-500"
                    : darkMode
                      ? "text-slate-600"
                      : "text-slate-300"
                }
              />

              <p
                className={`m-0 text-[10px] font-medium ${
                  darkMode ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Password should contain at least 6 characters
              </p>
            </div>

            {/* ===================================================
                Terms & Conditions
            =================================================== */}

            <div className="flex items-start gap-3 px-1 py-1">
              <button
                type="button"
                onClick={() => {
                  setAgreeToTerms((prev) => !prev);
                  setError("");
                }}
                className={`mt-0.5 w-5 h-5 shrink-0 rounded-md border flex items-center justify-center cursor-pointer transition ${
                  agreeToTerms
                    ? "bg-blue-600 border-blue-600"
                    : darkMode
                      ? "bg-[#111c2e] border-white/15 hover:border-blue-500"
                      : "bg-white border-[#cbd5e1] hover:border-blue-400"
                }`}
                aria-label="Agree to Terms and Conditions"
              >
                {agreeToTerms && (
                  <CheckCircle2 size={15} className="text-white" />
                )}
              </button>

              <p
                className={`m-0 text-xs leading-5 ${
                  darkMode ? "text-slate-500" : "text-[#7180a0]"
                }`}
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className={`font-semibold transition-colors ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className={`font-semibold transition-colors ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* ===================================================
                Error
            =================================================== */}

            {error && (
              <div
                className={`flex items-center gap-2 px-3.5 py-3 rounded-xl border ${
                  darkMode
                    ? "border-red-500/20 bg-red-500/10"
                    : "border-red-100 bg-red-50"
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />

                <p
                  className={`m-0 text-xs font-medium ${
                    darkMode ? "text-red-400" : "text-red-600"
                  }`}
                >
                  {error}
                </p>
              </div>
            )}

            {/* ===================================================
                Create Account
            =================================================== */}

            <button
              onClick={handleSignup}
              type="button"
              disabled={loading}
              className="group w-full h-13.5 rounded-xl border-none bg-linear-to-r from-[#3578f6] to-[#3471eb] text-white font-semibold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(52,113,235,0.20)] hover:from-[#2869e5] hover:to-[#2d63d4] hover:shadow-[0_12px_28px_rgba(52,113,235,0.28)] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer transition-all duration-200"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>

                  <ChevronRight
                    size={19}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </button>
          </div>

          {/* =====================================================
              Login
          ===================================================== */}

          <div className="mt-6 text-center">
            <p
              className={`m-0 text-sm ${
                darkMode ? "text-slate-500" : "text-[#7180a0]"
              }`}
            >
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className={`font-semibold transition-colors ${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* =====================================================
              Security
          ===================================================== */}

          <div
            className={`mt-6 flex items-center justify-center gap-2 text-xs ${
              darkMode ? "text-slate-600" : "text-[#8997b4]"
            }`}
          >
            <ShieldCheck size={16} className="text-emerald-500" />
            Secure authentication powered by SmartHaven
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
