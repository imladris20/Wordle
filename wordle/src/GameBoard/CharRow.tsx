import { v4 as uuidv4 } from "uuid";

const gridtemplate =
  "border-absent flex items-center justify-center rounded-md border-2 border-solid font-sans text-4xl font-semibold text-white";

const charStates = {
  absent: "border-none bg-absent",
  present: "border-none bg-present",
  correct: "border-correct bg-correct",
  inserting: "border-inserting",
};

interface CharRowProps {
  word: string;
  answer: string;
}

const CharRow = ({ word, answer }: CharRowProps) => {
  const rowArray = [];
  const answerArray: string[] = [];

  for (let i = 0; i < 5; i++) {
    if (i < word.length) {
      rowArray.push(word[i]);
    } else {
      rowArray.push(" ");
    }
    answerArray.push(answer[i]);
  }

  return (
    <>
      {rowArray.map((char, index) => {
        let state: string = "";

        if (char === " ") {
          state = charStates.inserting;
        } else if (char === answerArray[index]) {
          state = charStates.correct;
        } else if (answerArray.includes(char)) {
          state = charStates.present;
        } else {
          state = charStates.absent;
        }

        return (
          <div className={`${gridtemplate} ${state}`} key={uuidv4()}>
            {char}
          </div>
        );
      })}
    </>
  );
};

export default CharRow;
