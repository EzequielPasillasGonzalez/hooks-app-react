import { useRef } from "react";

export const FocusScreen = () => {
  //* durante la cracion del componente primero creamos la variable
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    // inputRef.current?.focus();
    inputRef.current?.select();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>

      <input
        //   Ya que se cargo el componente podemos hacer la referencia
        ref={inputRef}
        type="text"
        className="bg-white text-black px-4 rounded-md"
        autoFocus
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Set Focus
      </button>
    </div>
  );
};
