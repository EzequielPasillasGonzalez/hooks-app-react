import { useEffect, useState } from "react";
import { useTrafficLight } from "./useTrafficLight.tsx";

export const useCountdown = (intialCountdown: number = 5) => {
  const [countdown, setCountdown] = useState<number>(intialCountdown);
  const { light, setColor, colors } = useTrafficLight("red");

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

    setCountdown(intialCountdown);

    switch (light) {
      case "red":
        setColor("green");
        break;
      case "yellow":
        setColor("red");
        break;

      case "green":
        setColor("yellow");
        break;
      default:
        break;
    }
  }, [countdown, light]);

  return {
    // * Props
    countdown,

    // * computed
    porcentaje: (countdown / 5) * 100,
    greenLight: light === "green" ? colors[light] : colors["grey"],
    redLight: light === "red" ? colors[light] : colors["grey"],
    yellowLight: light === "yellow" ? colors[light] : colors["grey"],
  };
};
