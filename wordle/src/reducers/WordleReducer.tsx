import WordList from "../assets/wordlist.json";

const randomIndex = Math.floor(Math.random() * WordList.length);
const answer = WordList[randomIndex].toUpperCase();

export const initialState = {
  answer: answer,
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

  const { inputWords, currentRow, completeRows, isGameOver, answer } = state;

  switch (type) {
    case ACTIONS.INPUT_CHAR:
      if (currentRow === 6) {
        return state;
      }
      if (inputWords[currentRow].length < 5 && currentRow < 6 && !isGameOver) {
        const newInputWords = [...inputWords];
        const newUserInput =
          inputWords[currentRow] + payload.char.toUpperCase();
        newInputWords[currentRow] = newUserInput;
        return {
          ...state,
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
          const inputBeforeSubmit = inputWords[currentRow];
          return {
            ...state,
            completeRows: newCompleteRows,
            currentRow: newCurrentRow,
            isGameOver: inputBeforeSubmit === answer,
          };
        }
      }
      return state;
    case ACTIONS.DELETE_CHAR:
      const newInputWords = [...inputWords];
      const newUserInput = inputWords[currentRow].slice(0, -1);
      newInputWords[currentRow] = newUserInput;
      return {
        ...state,
        inputWords: newInputWords,
      };
    default:
      return state;
  }
};

export default WordleReducer;
