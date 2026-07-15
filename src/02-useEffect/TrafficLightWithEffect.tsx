import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLiightWithEffectColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
  const [countdown, setCountdown] = useState<number>(5);
  const [light, setLight] = useState<TrafficLiightWithEffectColor>("red");

  //* Es mejor tener dos efectos separados en vez de combinar logica

  // * Efecto para contador
  useEffect(
    () => {
      if (countdown <= 0) return;

      const intevalId = setInterval(() => {
        console.log("SetInterval llamado");
        setCountdown((prev) => prev - 1);
      }, 1000);

      // * Una funcion de limpieza
      return () => {
        console.log(`Cleanup effect`);
        clearInterval(intevalId);
      };
    },
    // * Es un arreglo de dependencias opcionales, pero indican cada cuanto se tiene que disparar el efecto
    [countdown],
  );

  // * Efecto para cambio de color
  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);
    switch (light) {
      case "red":
        setLight("green");
        break;
      case "yellow":
        setLight("red");
        break;

      case "green":
        setLight("yellow");
        break;
      default:
        break;
    }
  }, [countdown, light]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Semáforo con useEffect</h1>
        <h2 className="text-white text-xl">Countdown {countdown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(countdown / 5) * 100}% ` }}
          ></div>
        </div>

        <div
          className={`w-32 h-32 ${light == "red" ? colors[light] : `bg-gray-500`} rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${light == `yellow` ? colors[light] : `bg-gray-500`}  rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${light == `green` ? colors[light] : `bg-gray-500`} rounded-full`}
        ></div>
      </div>
    </div>
  );
};
