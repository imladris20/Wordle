import { useEffect, useState } from "react";
import WordList from "../assets/wordlist.json";
import CharRow from "./CharRow";

const GameBoard = () => {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * WordList.length);
    setAnswer(WordList[randomIndex].toUpperCase());
  }, []);

  const inputWords = [
    "Billy".toUpperCase(),
    "Grace".toUpperCase(),
    "Trail".toUpperCase(),
    "GRAIL".toUpperCase(),
    answer.toUpperCase(),
    "".toUpperCase(),
  ];

  return (
    <main className="mx-auto flex w-full flex-row justify-center pt-14 text-center">
      <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-3">
        {inputWords.map((word, index) => {
          return <CharRow word={word} answer={answer} key={index} />;
        })}
      </div>
    </main>
  );
};

export default GameBoard;
