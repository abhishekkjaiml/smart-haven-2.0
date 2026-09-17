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
  Copy,
  Check,
} from "lucide-react";

import backgroundIMG from "../assets/LoginBG.png";
import backgroundIMG2 from "../assets/LoginBG2.png";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

import { Link, useNavigate } from "react-router-dom";

import { DUMMY_EMAIL, DUMMY_PASSWORD } from "../db/dummyData";
import { field } from "firebase/firestore/pipelines";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedField, setCopiedField] = useState("");

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onPawwsordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const onShowEyeClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setError("Please enter your email address");

      return;
    }

    if (!password) {
      setError("Please enter your password");

      return;
    }

    // Dummy Login Credintial Email and Password

    if (
      cleanEmail === DUMMY_EMAIL.trim().toLowerCase() &&
      password === DUMMY_PASSWORD
    ) {
      setLoading(true);

      // Login without firebase user

      try {
        if (auth.currentUser) {
          await auth.signOut();
        }
      } catch (error) {
        console.error(error);
      }

      localStorage.setItem("smarthaven_dummy_user", "true");

      window.dispatchEvent(new Event("smarthaven_dummy_user"));

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard", {
          replace: true,
        });
      }, 500);

      return;
    }

    // Login with firebase user

    try {
      setLoading(true);

      localStorage.removeItem("smarthaven_dummy_user");

      window.dispatchEvent(new Event("smarthaven-dummy-logout"));

      await signInWithEmailAndPassword(auth, cleanEmail, password);

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Login Error", error);

      switch (error?.code) {
        case "auth/user-not-found":
          setError("User not found.");
          break;

        case "auth/wrong-password":
        case "auth/invalid-credential":
          setError("Incorrect email or password.");
          break;

        case "auth/invalid-email":
          setError("Invalid email address.");
          break;

        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;

        default:
          setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDownOrPressEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleCopy = async (value, field) => {
    try {
      if(navigator?.clipboard?.writeText){
        await navigator.clipboard.writeText(value);
      }else{
        const textArea = document.createElement('textarea');

        textArea.value = value;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand('copy');

        document.body.removeChild(textArea);
      }

      setCopiedField(field);

      setTimeout(() => {
        setCopiedField('')
      }, 1500)
    } catch (error) {
      console.error("Copy failed", error);
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

        {/* Logo */}

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Home size={24} strokeWidth={2.5} />
          </div>

          <div>
            <h2 className="m-0 text-xl font-bold text-[#101936]">SmartHaven</h2>

            <p className="m-0 text-xs text-[#7180a0]">Smart Home Monitoring</p>
          </div>
        </div>

        {/* Heading */}

        <div className="relative z-10 mt-20 max-w-142.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-blue-100 text-blue-600 text-xs font-semibold mb-6 shadow-sm">
            <Wind size={15} />
            Smart Environment
          </div>

          <h1 className="m-0 text-[46px] xl:text-[54px] leading-[1.08] tracking-[-2px] font-bold text-[#101936]">
            A safer home starts
            <br />
            with <span className="text-blue-600">cleaner air.</span>
          </h1>

          <p className="m-0 mt-6 text-base leading-7 text-[#7180a0] max-w-125">
            Monitor your home's environment in real-time and keep your loved
            ones safe with intelligent air quality monitoring.
          </p>
        </div>

        {/* Illustration */}

        <div className="relative flex-1 mt-8 min-h-70 flex items-end justify-center">
          <img
            src={backgroundIMG2}
            alt="Smart Haven Environment"
            className="w-125 max-w-full object-contain drop-shadow-[0_20px_35px_rgba(35,83,140,0.12)]   rounded mb-5"
          />
        </div>

        {/* Bottom */}

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

      <div className="w-full lg:w-[45%] min-h-screen flex items-center justify-center px-5 sm:px-8 py-10 bg-white">
        <div className="w-full max-w-115">
          {/* Mobile Logo */}

          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-100">
              <Home size={24} />
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

          {/* Heading */}

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <Leaf size={15} className="text-blue-500" />
              </div>

              <span className="text-[10px] uppercase tracking-[1.5px] font-bold text-blue-600">
                Smart Environment
              </span>
            </div>

            <h1 className="m-0 text-[32px] sm:text-[36px] font-bold tracking-[-1px] text-[#101936]">
              Welcome back!
            </h1>

            <p className="m-0 mt-2 text-sm sm:text-base text-[#7180a0]">
              Sign in to continue monitoring your home.
            </p>
          </div>

          {/* Form */}

          <div className="space-y-5">
            {/* Email */}

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

            {/* Password */}

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
                    onPawwsordInputChange(e);
                    setError("");
                  }}
                  onKeyDown={handleKeyDownOrPressEnter}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full h-13.5 pl-12 pr-12 rounded-xl border border-[#dbe4f1] bg-white text-sm text-slate-800 outline-none placeholder:text-[#9aa7bc] focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={onShowEyeClick}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-[#8997b4] hover:bg-blue-50 hover:text-blue-600 border-none cursor-pointer transition"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Sign In */}

            <button
              onClick={handleLogin}
              type="button"
              className="group w-full h-13.5 rounded-xl border-none bg-linear-to-r from-[#3578f6] to-[#3471eb] text-white font-semibold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(52,113,235,0.20)] hover:from-[#2869e5] hover:to-[#2d63d4] active:scale-[0.99] cursor-pointer transition"
            >
              Sign In
              <ChevronRight
                size={19}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Signup */}

          <div className="mt-7 text-center">
            <p className="m-0 text-sm text-[#7180a0]">
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Create an account
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}

          <div className="mt-7 rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50/90 to-cyan-50/60 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck size={15} className="text-blue-500" />
              </div>

              <div>
                <p className="m-0 text-xs font-bold text-blue-700">
                  Demo Account
                </p>

                <p className="m-0 text-[9px] text-slate-400">
                  Use these credentials for testing
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <p className="m-0 text-[10px] text-slate-500 shrink-0">Email</p>

                <div className="flex items-center gap-2 min-w-0">
                  <p className="m-0 text-[10px] font-semibold text-slate-700 truncate">
                    {DUMMY_EMAIL}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleCopy(DUMMY_EMAIL, "email")}
                    title="Copy email"
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border border-blue-100 bg-white text-blue-500 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
                  >
                    {copiedField === "email" ? (
                      <Check size={13} className="text-emerald-500" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="m-0 text-[10px] text-slate-500 shrink-0">
                  Password
                </p>

                <div className="flex items-center gap-2">
                  <p className="m-0 text-[10px] font-semibold text-slate-700">
                    {DUMMY_PASSWORD}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleCopy(DUMMY_PASSWORD, "password")}
                    title="Copy password"
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border border-blue-100 bg-white text-blue-500 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
                  >
                    {copiedField === "password" ? (
                      <Check size={13} className="text-emerald-500" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="m-0 text-[10px] text-slate-500 shrink-0">
                  Demo Device
                </p>

                <div className="flex items-center gap-2">
                  <p className="m-0 text-[10px] font-semibold text-blue-600">
                    SH-ESP32-001
                  </p>

                  <button
                    type="button"
                    onClick={() => handleCopy("SH-ESP32-001", "device")}
                    title="Copy device ID"
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border border-blue-100 bg-white text-blue-500 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
                  >
                    {copiedField === "device" ? (
                      <Check size={13} className="text-emerald-500" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secure */}

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#8997b4]">
            <ShieldCheck size={16} className="text-emerald-500" />
            Secure authentication powered by SmartHaven
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
