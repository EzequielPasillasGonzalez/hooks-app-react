import { useMemo } from "react";
import { useCounter } from "../03-examples/hooks/useCounter.tsx";

const heavyStuff = (iteratioNumber: number) => {
  console.time("Heavy_stuff_started");

  for (let index = 0; index < iteratioNumber; index++) {
    console.log("ahi vamos...");
  }

  console.timeEnd("Heavy_stuff_started");

  return `${iteratioNumber} iteraciones realizadas`;
};
export const MemoCounter = () => {
  const { counter, increment } = useCounter(40000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  // * Use memo memoriza el valor computado
  const myHeavyValue = useMemo(
    () => heavyStuff(counter),
    [
      // le indica cada cuanto debe memorizar
      counter,
    ],
  );

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyValue}</h1>

      <h4>Counter: {counter}</h4>
      <h4>Counter: {counter2}</h4>

      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
      >
        +1
      </button>

      <button
        onClick={increment2}
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
      >
        +1 - Counter 2
      </button>
    </div>
  );
};
