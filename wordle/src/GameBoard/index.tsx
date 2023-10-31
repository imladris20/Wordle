import { useState } from "react";
// import { useEffect } from "react";

import CharRow from "./CharRow";

const GameBoard = () => {
  const ANSWER: string = "GRAIL";

  const [inputWords, setInputWords] = useState([
    "fsdls".toUpperCase(),
    "".toUpperCase(),
    "".toUpperCase(),
    "".toUpperCase(),
    "".toUpperCase(),
    "".toUpperCase(),
  ]);

  /*   useEffect(() => {
    setInputWords([
      "dlksj".toUpperCase(),
      "wa".toUpperCase(),
      "".toUpperCase(),
      "".toUpperCase(),
      "".toUpperCase(),
      "".toUpperCase(),
    ]);
  }, []); */

  return (
    <main className="mx-auto flex w-full flex-row justify-center pt-14 text-center">
      <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-3">
        {inputWords.map((word, index) => {
          return <CharRow word={word} answer={ANSWER} key={index} />;
        })}
      </div>
    </main>
  );
};

export default GameBoard;
