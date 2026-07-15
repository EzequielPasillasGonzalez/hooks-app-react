import { useTrafficLight } from "./hooks/useTrafficLight.tsx";
import { useCountdown } from "./hooks/useCountdown.tsx";

export const TrafficLightWithHook = () => {
  const { countdown, porcentaje, greenLight, redLight, yellowLight } =
    useCountdown(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Semáforo con useEffect</h1>
        <h2 className="text-white text-xl">Countdown {countdown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${porcentaje}% ` }}
          ></div>
        </div>

        <div className={`w-32 h-32 ${redLight} rounded-full`}></div>

        <div className={`w-32 h-32 ${yellowLight}  rounded-full`}></div>

        <div className={`w-32 h-32 ${greenLight} rounded-full`}></div>
      </div>
    </div>
  );
};
