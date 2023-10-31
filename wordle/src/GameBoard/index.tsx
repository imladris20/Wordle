import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CharRow from "./CharRow";

const GameBoard = () => {
  const ANSWER: string = "GRAIL";

  const [inputWords, setInputWords] = useState([...Array(6).fill("")]);

  useEffect(() => {
    setInputWords([
      "dlksj".toUpperCase(),
      "water".toUpperCase(),
      "brAIL".toUpperCase(),
      "grail".toUpperCase(),
      "t".toUpperCase(),
      "".toUpperCase(),
    ]);
  }, []);

  return (
    <main className="mx-auto flex w-full flex-row justify-center pt-14 text-center">
      <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-3">
        {inputWords.map((word) => {
          return <CharRow word={word} answer={ANSWER} key={uuidv4()} />;
        })}
      </div>
    </main>
  );
};

export default GameBoard;
