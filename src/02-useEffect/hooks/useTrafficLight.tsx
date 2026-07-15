import { useState } from "react";

const trafficColors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  grey: "bg-gray-500",
};

type TrafficLiightWithEffectColor = keyof typeof trafficColors;

export const useTrafficLight = (
  color: TrafficLiightWithEffectColor = "red",
) => {
  const [light, setLight] = useState<TrafficLiightWithEffectColor>(color);

  const colors = trafficColors;

  const setColor = (color: TrafficLiightWithEffectColor) => {
    setLight(color);
  };

  return {
    //* Props
    light,
    colors,

    //* Methods
    setColor,
  };
};
