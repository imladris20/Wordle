import { useContext, useState } from "react";
import WordStatesContext from "../context/WordStatesContext.jsx";

interface GameBoardProps {
  inputWords: string[];
  answer: string;
  changeInput: any;
  handleClick: any;
  getRandomAnswer: any;
  buttonRef: any;
}

const AnswerButton = () => {
  const { getRandomAnswer, answer, buttonRef }: GameBoardProps =
    useContext(WordStatesContext);
  const [isAnswerShow, setIsAnswerShow] = useState(false);

  const handleShowAnswer = () => {
    setIsAnswerShow(!isAnswerShow);
  };

  return (
    <div className="mx-auto flex h-[100px] w-full flex-row items-center justify-center gap-20 bg-dark text-center">
      <button
        className="h-10 w-40 rounded-md bg-gray-300 p-1 font-custom text-sm font-bold"
        onClick={handleShowAnswer}
        ref={buttonRef}
      >
        {!isAnswerShow ? "點我看答案！" : `答案: ${answer}`}
      </button>
      <button
        type="button"
        className="h-10 w-40 rounded-md bg-gray-300 p-1 font-custom text-sm font-bold"
        onClick={getRandomAnswer}
        ref={buttonRef}
      >
        下一個挑戰！
      </button>
    </div>
  );
};

export default AnswerButton;
