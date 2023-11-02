import { useContext, useState } from "react";
import WordStatesContext from "../context/WordStatesContext.jsx";
import CharRow from "./CharRow";
interface GameBoardProps {
  inputWords: string[];
  answer: string;
  changeInput: any;
  handleClick: any;
  getRandomAnswer: any;
}

const GameBoard = () => {
  const { inputWords, getRandomAnswer, answer }: GameBoardProps =
    useContext(WordStatesContext);

  let [isAnswerShow, setIsAnswerShow] = useState(false);

  const handleShowAnswer = () => {
    setIsAnswerShow(!isAnswerShow);
  };

  return (
    <>
      <main className="mx-auto flex w-full flex-row justify-center pt-14 text-center">
        <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-3">
          {inputWords.map((_, index) => {
            return <CharRow rowIndex={index} key={index} />;
          })}
        </div>
      </main>
      <div className="bg-dark mx-auto mb-10 flex h-[150px] w-full flex-row items-center justify-center gap-20 text-center">
        <button
          className="h-10 w-40 rounded-md bg-gray-300 p-1 pl-3 text-left text-xs"
          onClick={handleShowAnswer}
        >
          {!isAnswerShow ? "Click me to see answer!" : `Answer: ${answer}`}
        </button>
        <button
          className="h-10 w-40 rounded-md bg-gray-300 p-1 text-xs"
          onClick={getRandomAnswer}
        >
          Play another question!
        </button>
      </div>
    </>
  );
};

export default GameBoard;
