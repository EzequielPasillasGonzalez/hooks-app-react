import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { FocusScreen } from "./04-useRef/FocusScreen.tsx";
// import { PokemonPage } from "./03-examples/PokemonPage.tsx";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords.tsx";
// import { TasksApp } from "./05-useReducer/TaskApp.tsx";
// import { TrafficLight } from "./01-useState/TrafficLight.tsx";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook.tsx";
// import { MemoHook } from "./06-memos/MemoHook.tsx";
import { MemoCounter } from "./06-memos/MemoCounter.tsx";
import { InstagromApp } from "./07-useOptimistic/InstagromApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords/> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    <InstagromApp />
  </StrictMode>,
);
