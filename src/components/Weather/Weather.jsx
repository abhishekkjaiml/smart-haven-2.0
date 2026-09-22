import {
  Cloud,
  CloudRain,
  CloudSun,
  Droplets,
  Eye,
  Gauge,
  MapPin,
  Navigation,
  Sun,
  Sunrise,
  Sunset,
  Thermometer,
  Umbrella,
  Wind,
} from "lucide-react";

import { useTheme } from "../../context/theme-context";

const Weather = () => {
  const { darkMode } = useTheme();

  // =========================================================
  // Dummy Weather Data
  // =========================================================

  const weather = {
    city: "Varanasi",
    country: "India",
    temperature: 29,
    condition: "Partly Cloudy",
    feelsLike: 31,
    humidity: 68,
    windSpeed: 14,
    windDirection: "NW",
    pressure: 1012,
    visibility: 8,
    rainChance: 24,
    uvIndex: 6,
    sunrise: "05:48 AM",
    sunset: "06:12 PM",
    high: 33,
    low: 25,
  };

  const hourlyForecast = [
    {
      time: "Now",
      temp: 29,
      icon: CloudSun,
      rain: 24,
    },
    {
      time: "04 PM",
      temp: 30,
      icon: CloudSun,
      rain: 20,
    },
    {
      time: "05 PM",
      temp: 30,
      icon: Cloud,
      rain: 18,
    },
    {
      time: "06 PM",
      temp: 29,
      icon: Cloud,
      rain: 22,
    },
    {
      time: "07 PM",
      temp: 28,
      icon: CloudRain,
      rain: 35,
    },
    {
      time: "08 PM",
      temp: 27,
      icon: CloudRain,
      rain: 42,
    },
    {
      time: "09 PM",
      temp: 27,
      icon: Cloud,
      rain: 31,
    },
  ];

  const dailyForecast = [
    {
      day: "Today",
      date: "22 Sep",
      high: 33,
      low: 25,
      condition: "Partly Cloudy",
      icon: CloudSun,
      rain: 24,
    },
    {
      day: "Tomorrow",
      date: "23 Sep",
      high: 34,
      low: 26,
      condition: "Sunny",
      icon: Sun,
      rain: 12,
    },
    {
      day: "Wednesday",
      date: "24 Sep",
      high: 32,
      low: 25,
      condition: "Cloudy",
      icon: Cloud,
      rain: 28,
    },
    {
      day: "Thursday",
      date: "25 Sep",
      high: 31,
      low: 24,
      condition: "Light Rain",
      icon: CloudRain,
      rain: 58,
    },
    {
      day: "Friday",
      date: "26 Sep",
      high: 30,
      low: 24,
      condition: "Rainy",
      icon: CloudRain,
      rain: 68,
    },
    {
      day: "Saturday",
      date: "27 Sep",
      high: 32,
      low: 25,
      condition: "Partly Cloudy",
      icon: CloudSun,
      rain: 32,
    },
  ];

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#0B1220] text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1
              className={`m-0 text-[28px] font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Weather
            </h1>

            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                darkMode
                  ? "bg-blue-950/50 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              LIVE
            </span>
          </div>

          <p
            className={`m-0 mt-1 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Current weather and forecast information
          </p>
        </div>

        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold w-fit ${
            darkMode
              ? "bg-slate-900 text-slate-300 border border-slate-800"
              : "bg-white text-slate-600 border border-slate-100"
          }`}
        >
          <MapPin
            size={16}
            className={darkMode ? "text-blue-400" : "text-blue-600"}
          />

          {weather.city}, {weather.country}
        </div>
      </div>

      {/* Main Weather */}

      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5 mb-6">
        {/* Current Weather */}

        <div
          className={`relative overflow-hidden rounded-[26px] p-6 sm:p-8 border ${
            darkMode
              ? "bg-gradient-to-br from-[#172554] via-[#111827] to-[#0F172A] border-slate-800"
              : "bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 border-blue-100"
          }`}
        >
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />

          <div className="absolute -right-10 -bottom-20 w-64 h-64 rounded-full bg-white/5" />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin size={16} />
                  {weather.city}, {weather.country}
                </div>

                <p className="m-0 mt-2 text-xs text-white/60">
                  Today, 22 September
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <CloudSun size={34} className="text-white" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end gap-3 mt-8">
              <h2 className="m-0 text-[68px] leading-none font-bold tracking-tight text-white">
                {weather.temperature}°
              </h2>

              <div className="pb-2">
                <p className="m-0 text-lg font-semibold text-white">
                  {weather.condition}
                </p>

                <p className="m-0 mt-1 text-sm text-white/65">
                  Feels like {weather.feelsLike}°
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-7">
              <span className="text-sm text-white/80">
                H: <b className="text-white">{weather.high}°</b>
              </span>

              <span className="text-sm text-white/60">
                L: <b className="text-white">{weather.low}°</b>
              </span>
            </div>
          </div>
        </div>

        {/* Weather Summary */}

        <div
          className={`rounded-[26px] border p-6 ${
            darkMode
              ? "bg-[#111827] border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2
                className={`m-0 text-base font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                Weather Summary
              </h2>

              <p
                className={`m-0 mt-1 text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Today's conditions
              </p>
            </div>

            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-blue-950/50 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <Thermometer size={20} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div
              className={`p-4 rounded-2xl ${
                darkMode ? "bg-slate-900/70" : "bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Droplets
                  size={16}
                  className={
                    darkMode ? "text-blue-400" : "text-blue-500"
                  }
                />

                <span
                  className={`text-xs ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Humidity
                </span>
              </div>

              <p
                className={`m-0 mt-2 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {weather.humidity}%
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl ${
                darkMode ? "bg-slate-900/70" : "bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Wind
                  size={16}
                  className={
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }
                />

                <span
                  className={`text-xs ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Wind
                </span>
              </div>

              <p
                className={`m-0 mt-2 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {weather.windSpeed}
                <span className="text-xs font-medium ml-1">km/h</span>
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl ${
                darkMode ? "bg-slate-900/70" : "bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Umbrella
                  size={16}
                  className={
                    darkMode ? "text-violet-400" : "text-violet-500"
                  }
                />

                <span
                  className={`text-xs ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Rain Chance
                </span>
              </div>

              <p
                className={`m-0 mt-2 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {weather.rainChance}%
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl ${
                darkMode ? "bg-slate-900/70" : "bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye
                  size={16}
                  className={
                    darkMode ? "text-emerald-400" : "text-emerald-500"
                  }
                />

                <span
                  className={`text-xs ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Visibility
                </span>
              </div>

              <p
                className={`m-0 mt-2 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {weather.visibility}
                <span className="text-xs font-medium ml-1">km</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Details */}

      <div
        className={`rounded-[24px] border p-5 sm:p-6 mb-6 ${
          darkMode
            ? "bg-[#111827] border-slate-800"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="mb-5">
          <h2
            className={`m-0 text-lg font-bold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            Weather Details
          </h2>

          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Additional atmospheric information
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className={`rounded-2xl p-4 ${
              darkMode ? "bg-slate-900/70" : "bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Gauge
                size={17}
                className={darkMode ? "text-orange-400" : "text-orange-500"}
              />

              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Pressure
              </span>
            </div>

            <p
              className={`m-0 mt-3 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {weather.pressure}
              <span className="text-xs font-medium ml-1">hPa</span>
            </p>
          </div>

          <div
            className={`rounded-2xl p-4 ${
              darkMode ? "bg-slate-900/70" : "bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Navigation
                size={17}
                className={darkMode ? "text-blue-400" : "text-blue-500"}
              />

              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Wind Direction
              </span>
            </div>

            <p
              className={`m-0 mt-3 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {weather.windDirection}
            </p>
          </div>

          <div
            className={`rounded-2xl p-4 ${
              darkMode ? "bg-slate-900/70" : "bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Sun
                size={17}
                className={darkMode ? "text-amber-400" : "text-amber-500"}
              />

              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                UV Index
              </span>
            </div>

            <p
              className={`m-0 mt-3 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {weather.uvIndex}
              <span className="text-xs font-medium ml-1">Moderate</span>
            </p>
          </div>

          <div
            className={`rounded-2xl p-4 ${
              darkMode ? "bg-slate-900/70" : "bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Eye
                size={17}
                className={
                  darkMode ? "text-emerald-400" : "text-emerald-500"
                }
              />

              <span
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Visibility
              </span>
            </div>

            <p
              className={`m-0 mt-3 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {weather.visibility}
              <span className="text-xs font-medium ml-1">km</span>
            </p>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}

      <div
        className={`rounded-[24px] border p-5 sm:p-6 mb-6 ${
          darkMode
            ? "bg-[#111827] border-slate-800"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2
              className={`m-0 text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Hourly Forecast
            </h2>

            <p
              className={`m-0 mt-1 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Weather forecast for the next few hours
            </p>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {hourlyForecast.map((item, index) => {
            const WeatherIcon = item.icon;

            return (
              <div
                key={item.time}
                className={`min-w-[105px] flex-1 rounded-2xl p-4 text-center border transition ${
                  index === 0
                    ? darkMode
                      ? "bg-blue-950/50 border-blue-900"
                      : "bg-blue-50 border-blue-100"
                    : darkMode
                      ? "bg-slate-900/70 border-slate-800"
                      : "bg-slate-50 border-slate-100"
                }`}
              >
                <p
                  className={`m-0 text-xs font-semibold ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {item.time}
                </p>

                <WeatherIcon
                  size={28}
                  className={`mx-auto mt-4 ${
                    index === 0
                      ? darkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                  }`}
                />

                <p
                  className={`m-0 mt-3 text-lg font-bold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {item.temp}°
                </p>

                <div className="flex items-center justify-center gap-1 mt-2">
                  <Droplets
                    size={11}
                    className={
                      darkMode ? "text-blue-400" : "text-blue-500"
                    }
                  />

                  <span
                    className={`text-[10px] ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {item.rain}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Forecast */}

      <div
        className={`rounded-[24px] border p-5 sm:p-6 mb-6 ${
          darkMode
            ? "bg-[#111827] border-slate-800"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="mb-5">
          <h2
            className={`m-0 text-lg font-bold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            6-Day Forecast
          </h2>

          <p
            className={`m-0 mt-1 text-xs ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Extended weather forecast
          </p>
        </div>

        <div className="space-y-2">
          {dailyForecast.map((item, index) => {
            const WeatherIcon = item.icon;

            return (
              <div
                key={item.date}
                className={`grid grid-cols-[1.2fr_0.7fr_1fr_0.8fr] items-center gap-3 p-4 rounded-2xl transition ${
                  darkMode
                    ? "hover:bg-slate-900/70"
                    : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <p
                    className={`m-0 text-sm font-bold ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {item.day}
                  </p>

                  <p
                    className={`m-0 mt-1 text-xs ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {item.date}
                  </p>
                </div>

                <WeatherIcon
                  size={26}
                  className={
                    index === 1
                      ? darkMode
                        ? "text-amber-400"
                        : "text-amber-500"
                      : darkMode
                        ? "text-blue-400"
                        : "text-blue-500"
                  }
                />

                <div className="hidden sm:block">
                  <p
                    className={`m-0 text-xs font-medium ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {item.condition}
                  </p>

                  <div className="flex items-center gap-1 mt-1">
                    <Droplets
                      size={11}
                      className={
                        darkMode ? "text-blue-400" : "text-blue-500"
                      }
                    />

                    <span
                      className={`text-[10px] ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {item.rain}% rain
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`text-sm font-bold ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {item.high}°
                  </span>

                  <span
                    className={`text-sm ml-2 ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {item.low}°
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sun Information */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          className={`rounded-[24px] border p-6 ${
            darkMode
              ? "bg-[#111827] border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                darkMode
                  ? "bg-amber-950/40 text-amber-400"
                  : "bg-amber-50 text-amber-500"
              }`}
            >
              <Sunrise size={24} />
            </div>

            <div>
              <p
                className={`m-0 text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Sunrise
              </p>

              <h3
                className={`m-0 mt-1 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {weather.sunrise}
              </h3>
            </div>
          </div>
        </div>

        <div
          className={`rounded-[24px] border p-6 ${
            darkMode
              ? "bg-[#111827] border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                darkMode
                  ? "bg-orange-950/40 text-orange-400"
                  : "bg-orange-50 text-orange-500"
              }`}
            >
              <Sunset size={24} />
            </div>

            <div>
              <p
                className={`m-0 text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Sunset
              </p>

              <h3
                className={`m-0 mt-1 text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {weather.sunset}
              </h3>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;