import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle.tsx";
import { MySubTitle } from "./ui/MySubTitle.tsx";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  const handleMyAPICall = useCallback(() => {
    console.log("Llamara a mi API -", subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} callMyAPI={handleMyAPICall} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle(`Hello ,` + Date.now().toString())}
      >
        Cambiar titulo
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubTitle("World")}
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};
