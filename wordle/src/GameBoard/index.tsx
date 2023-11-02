import { useContext } from "react";
import WordStatesContext from "../context/WordStatesContext.jsx";
import AnswerButton from "./AnswerButton";
import CharRow from "./CharRow";
import Description from "./Description";
interface GameBoardProps {
  inputWords: string[];
  answer: string;
  changeInput: any;
  handleClick: any;
  getRandomAnswer: any;
}

const GameBoard = () => {
  const { inputWords }: GameBoardProps = useContext(WordStatesContext);

  return (
    <>
      <Description />
      <main className="mx-auto flex h-full w-full flex-row justify-center pt-8 text-center">
        <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-3">
          {inputWords.map((_, index) => {
            return <CharRow rowIndex={index} key={index} />;
          })}
        </div>
      </main>
      <AnswerButton />
    </>
  );
};

export default GameBoard;
