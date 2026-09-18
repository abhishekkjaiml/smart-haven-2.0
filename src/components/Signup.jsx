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
  Activity,
} from "lucide-react";

import backgroundIMG2 from "../assets/LoginBG2.png";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../services/firebase";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

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


  // Password Toggle

  const onShowPasswordClick = () => {
    setShowPassword((prev) => !prev);
  };

  const onShowConfirmPasswordClick = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // Signup
  
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


    // Firebase Signup

    try {
      setLoading(true);

      localStorage.removeItem("smarthaven_dummy_user");

      window.dispatchEvent(new Event("smarthaven-dummy-logout"));

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        cleanEmail,
        password,
      );

      // Update Firebase Profile

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

  // Enter Key

  const handleKeyDownOrPressEnter = (e) => {
    if (e.key === "Enter") {
      handleSignup();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f5f8fc] flex">
      {/* =====================================================
          LEFT SECTION
      ===================================================== */}

      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-linear-to-br from-[#eaf4ff] via-[#f4f9ff] to-[#eef8f7] px-12 xl:px-20 py-10 flex-col">
        {/* Decorative Background */}

        <div className="absolute -top-32 -left-32 w-100 h-100 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 w-112.5 h-112.5 rounded-full bg-emerald-200/20 blur-3xl" />

        <div className="absolute top-[35%] right-[8%] w-72 h-72 rounded-full bg-cyan-100/20 blur-3xl" />

        {/* =====================================================
            Logo
        ===================================================== */}

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Home size={24} strokeWidth={2.5} />
          </div>

          <div>
            <h2 className="m-0 text-xl font-bold text-[#101936]">SmartHaven</h2>

            <p className="m-0 text-xs text-[#7180a0]">Smart Home Monitoring</p>
          </div>
        </div>

        {/* =====================================================
            Heading
        ===================================================== */}

        <div className="relative z-10 mt-20 max-w-142.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-blue-100 text-blue-600 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles size={15} />
            Smart Environment
          </div>

          <h1 className="m-0 text-[46px] xl:text-[54px] leading-[1.08] tracking-[-2px] font-bold text-[#101936]">
            Build a smarter
            <br />
            home with <span className="text-blue-600">SmartHaven.</span>
          </h1>

          <p className="m-0 mt-6 text-base leading-7 text-[#7180a0] max-w-125">
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
            className="w-125 max-w-full object-contain drop-shadow-[0_20px_35px_rgba(35,83,140,0.12)] rounded mb-5"
          />
        </div>

        {/* =====================================================
            Bottom
        ===================================================== */}

        <div className="relative z-10 flex items-center gap-3 text-sm text-[#7180a0]">
          <div className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
            <ShieldCheck size={18} className="text-emerald-500" />
          </div>

          <div>
            <p className="m-0 text-xs font-semibold text-[#52617d]">
              Your home. Your health. Your data.
            </p>

            <p className="m-0 mt-0.5 text-[10px] text-slate-400">
              Private & secure environmental monitoring
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT SECTION
      ===================================================== */}

      <div className="w-full lg:w-[45%] min-h-screen flex items-center justify-center px-5 sm:px-8 py-10 bg-white relative overflow-hidden">
        {/* Decorative Background */}

        <div className="absolute -top-32 -right-32 w-90 h-90 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-cyan-100/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-115">
          {/* =====================================================
              Mobile Logo
          ===================================================== */}

          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-100">
              <Home size={24} strokeWidth={2.5} />
            </div>

            <div>
              <h2 className="m-0 text-xl font-bold text-[#101936]">
                SmartHaven
              </h2>

              <p className="m-0 text-xs text-[#7180a0]">
                Smart Home Monitoring
              </p>
            </div>
          </div>

          {/* =====================================================
              Heading
          ===================================================== */}

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <Leaf size={15} className="text-blue-500" />
              </div>

              <span className="text-[10px] uppercase tracking-[1.5px] font-bold text-blue-600">
                Smart Environment
              </span>
            </div>

            <h1 className="m-0 text-[32px] sm:text-[36px] font-bold tracking-[-1px] text-[#101936]">
              Create your account
            </h1>

            <p className="m-0 mt-2 text-sm sm:text-base text-[#7180a0]">
              Join SmartHaven and start monitoring your home.
            </p>
          </div>

          {/* =====================================================
              Form
          ===================================================== */}

          <div className="space-y-4">
            {/* ===================================================
                Full Name
            =================================================== */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#34415f]">
                Full Name
              </label>

              <div className="relative group">
                <UserRound
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8997b4] group-focus-within:text-blue-500 transition-colors"
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
                  className="w-full h-13.5 pl-12 pr-4 rounded-xl border border-[#dbe4f1] bg-white text-sm text-slate-800 outline-none placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>
            </div>

            {/* ===================================================
                Email
            =================================================== */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#34415f]">
                Email Address
              </label>

              <div className="relative group">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8997b4] group-focus-within:text-blue-500 transition-colors"
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
                  className="w-full h-13.5 pl-12 pr-4 rounded-xl border border-[#dbe4f1] bg-white text-sm text-slate-800 outline-none placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>
            </div>

            {/* ===================================================
                Password
            =================================================== */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#34415f]">
                Password
              </label>

              <div className="relative group">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8997b4] group-focus-within:text-blue-500 transition-colors"
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
                  className="w-full h-13.5 pl-12 pr-12 rounded-xl border border-[#dbe4f1] bg-white text-sm text-slate-800 outline-none placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={onShowPasswordClick}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-[#8997b4] hover:bg-blue-50 hover:text-blue-600 border-none cursor-pointer transition"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* ===================================================
                Confirm Password
            =================================================== */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#34415f]">
                Confirm Password
              </label>

              <div className="relative group">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8997b4] group-focus-within:text-blue-500 transition-colors"
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
                  className="w-full h-13.5 pl-12 pr-12 rounded-xl border border-[#dbe4f1] bg-white text-sm text-slate-800 outline-none placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={onShowConfirmPasswordClick}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-[#8997b4] hover:bg-blue-50 hover:text-blue-600 border-none cursor-pointer transition"
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

            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2
                size={15}
                className={
                  password.length >= 6 ? "text-emerald-500" : "text-slate-300"
                }
              />

              <p className="m-0 text-[10px] font-medium text-slate-500">
                Password should contain at least 6 characters
              </p>
            </div>

            {/* Term and Condition */}

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
                    : "bg-white border-[#cbd5e1] hover:border-blue-400"
                }`}
                aria-label="Agree to Terms and Conditions"
              >
                {agreeToTerms && (
                  <CheckCircle2 size={15} className="text-white" />
                )}
              </button>

              <p className="m-0 text-xs leading-5 text-[#7180a0]">
                I agree to the{" "}
                <button
                  type="button"
                  className="p-0 border-none bg-transparent text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                >
                  <Link to='/terms'>
                    Terms & Conditions
                  </Link>
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="p-0 border-none bg-transparent text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                >
                  <Link to='/privacy-policy'>
                    Privacy Policy
                  </Link>
                </button>
                .
              </p>
            </div>

            {/* ===================================================
                Error
            =================================================== */}

            {error && (
              <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl border border-red-100 bg-red-50">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />

                <p className="m-0 text-xs font-medium text-red-600">{error}</p>
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
            <p className="m-0 text-sm text-[#7180a0]">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* =====================================================
              Security
          ===================================================== */}

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#8997b4]">
            <ShieldCheck size={16} className="text-emerald-500" />
            Secure authentication powered by SmartHaven
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
