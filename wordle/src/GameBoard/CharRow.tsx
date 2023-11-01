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

  return rowArray.map((char, index, arr) => {
    let state: string = "";
    let isEmpty = false;
    let isIncomplete = false;

    if (arr.includes(" ")) {
      isIncomplete = true;
      state = charStates.inserting;
    }

    if (arr.every((char) => char === " ")) {
      isEmpty = true;
      state = charStates.initial;
    }

    if (!isEmpty && !isIncomplete) {
      state = charStates.absent;

      if (answerArray.includes(char)) {
        state = charStates.present;
      }

      if (char === answerArray[index]) {
        state = charStates.correct;
      }
    }

    return (
      <div className={`${gridtemplate} ${state}`} key={index}>
        {char}
      </div>
    );
  });
};

export default CharRow;
