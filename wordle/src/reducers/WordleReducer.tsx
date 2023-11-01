import WordList from "../assets/wordlist.json";

const randomIndex = Math.floor(Math.random() * WordList.length);
const answer = WordList[randomIndex].toUpperCase();

export const initialState = {
  answer: answer,
  userInput: "",
  completeRows: [...Array(6).fill(false)],
  inputWords: [...Array(6).fill("")],
  currentRow: 0,
  isGameOver: false,
};

//  定義ACTIONS變數來去核對要dispach的動作會比較方便管理，也比較不會出錯而找不到問題在哪裡
export const ACTIONS = {
  INPUT_CHAR: "INPUT_CHAR",
  SUBMIT_ROW: "SUBMIT_ROW",
  NEW_ANSWER: "NEW_ANSWER",
  DELETE_CHAR: "DELETE_CHAR",
};

const WordleReducer = (state: any, action: any) => {
  const { type, payload } = action;

  const { userInput, inputWords, currentRow, completeRows, isGameOver } = state;

  switch (type) {
    case ACTIONS.INPUT_CHAR:
      if (userInput.length < 5 && currentRow < 6 && !isGameOver) {
        const newInputWords = [...inputWords];
        const newUserInput = userInput + payload.char.toUpperCase();
        newInputWords[currentRow] = newUserInput;
        return {
          ...state,
          userInput: newUserInput,
          inputWords: newInputWords,
        };
      } else {
        return state;
      }
    case ACTIONS.NEW_ANSWER:
      return {
        ...initialState,
        answer: payload.newAnswer,
      };
    case ACTIONS.SUBMIT_ROW:
      if (currentRow < 6) {
        if (inputWords[currentRow].length === 5) {
          const newCompleteRows = [...completeRows];
          newCompleteRows[currentRow] = true;
          const newCurrentRow = currentRow + 1;
          return {
            ...state,
            completeRows: newCompleteRows,
            currentRow: newCurrentRow,
            userInput: "",
            isGameOver: inputWords[currentRow] === answer,
          };
        }
      }
      return state;
    case ACTIONS.DELETE_CHAR:
      const newInputWords = [...inputWords];
      const newUserInput = userInput.slice(0, -1);
      newInputWords[currentRow] = newUserInput;
      return {
        ...state,
        userInput: newUserInput,
        inputWords: newInputWords,
      };
    default:
      return state;
  }
};

export default WordleReducer;
