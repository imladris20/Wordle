import { useContext } from "react";
import WordStatesContext from "../context/WordStatesContext.jsx";

const gridtemplate =
  "flex items-center justify-center rounded-md border-2 border-solid font-sans text-4xl font-semibold text-white";

const charStates = {
  initial: "border-absent bg-transparent",
  absent: "border-none bg-absent",
  present: "border-none bg-present",
  correct: "border-none bg-correct",
  inserting: "border-inserting bg-transparent",
};

interface CharRowProps {
  inputWords: string[];
  answer: string;
  completeRows: boolean[];
}

const CharRow = ({ rowIndex }: { rowIndex: number }) => {
  const rowArray = [];
  const answerArray: string[] = [];

  const { inputWords, answer, completeRows }: CharRowProps =
    useContext(WordStatesContext);

  for (let i = 0; i < 5; i++) {
    if (i < inputWords[rowIndex].length) {
      rowArray.push(inputWords[rowIndex][i]);
    } else {
      rowArray.push(" ");
    }
    answerArray.push(answer[i]);
  }

  return rowArray.map((char, index, arr) => {
    let styleState: string = "";
    let isEmpty = false;
    let isIncomplete = false;

    if (arr.includes(" ") || !completeRows[rowIndex]) {
      isIncomplete = true;
      styleState = charStates.inserting;
    }

    if (arr.every((char) => char === " ")) {
      isEmpty = true;
      styleState = charStates.initial;
    }

    if (!isEmpty && !isIncomplete) {
      styleState = charStates.absent;

      if (answerArray.includes(char)) {
        styleState = charStates.present;
      }

      if (char === answerArray[index]) {
        styleState = charStates.correct;
      }
    }

    return (
      <div className={`${gridtemplate} ${styleState}`} key={index}>
        {char}
      </div>
    );
  });
};

export default CharRow;
