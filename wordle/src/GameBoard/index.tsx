import { useContext } from "react";
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
  const { inputWords, handleClick, getRandomAnswer, answer }: GameBoardProps =
    useContext(WordStatesContext);

  return (
    <>
      <main className="mx-auto flex w-full flex-row justify-center pt-14 text-center">
        <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-3">
          {inputWords.map((_, index) => {
            return <CharRow rowIndex={index} key={index} />;
          })}
          {/* <CharRow word={inputWords[0]} answer={answer} key="1" />
          <CharRow word={inputWords[1]} answer={answer} key="2" />
          <CharRow word={inputWords[2]} answer={answer} key="3" />
          <CharRow word={inputWords[3]} answer={answer} key="4" />
          <CharRow word={inputWords[4]} answer={answer} key="5" />
          <CharRow word={inputWords[5]} answer={answer} key="6" /> */}
        </div>
      </main>
      <div className="mx-auto my-10 flex w-[400px] flex-row items-center justify-center gap-20 text-center">
        <button
          className="h-10 w-40 rounded-md bg-gray-300 p-1 pl-3 text-left text-xs"
          onClick={handleClick}
        >
          Current Answer: {answer}
        </button>
        <button
          className="h-10 w-40 rounded-md bg-gray-300 p-1 text-xs"
          onClick={getRandomAnswer}
        >
          Give me new answer!
        </button>
      </div>
    </>
  );
};

export default GameBoard;
