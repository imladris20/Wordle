import WordList from "../assets/wordlist.json";

const randomIndex = Math.floor(Math.random() * WordList.length);
const answer = WordList[randomIndex].toUpperCase();

export const initialState = {
  answer: answer,
  userInput: "",
  completeRows: [...Array(6).fill(false)],
  inputWords: [...Array(6).fill("")],
};

//  定義ACTIONS變數來去核對要dispach的動作會比較方便管理，也比較不會出錯而找不到問題在哪裡
export const ACTIONS = {
  INPUT_CHAR: "INPUT_CHAR",
  SUBMIT_ROW: "SUBMIT_ROW",
  CLICK: "CLICK",
  NEW_ANSWER: "NEW_ANSWER",
  DELETE_CHAR: "DELETE_CHAR",
};

const WordleReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.INPUT_CHAR:
      if (state.userInput.length < 5) {
        const newInputWords = [...state.inputWords];
        const newUserInput = state.userInput + payload.char.toUpperCase();
        newInputWords[payload.rowIndex] = newUserInput;
        return {
          ...state,
          userInput: newUserInput,
          inputWords: newInputWords,
        };
      }
      return state;
    case ACTIONS.CLICK:
      console.log(payload.clickMessage);
      return state;
    case ACTIONS.NEW_ANSWER:
      return {
        ...initialState,
        answer: payload.newAnswer,
      };
    case ACTIONS.SUBMIT_ROW:
      const newCompleteRows = [...state.completeRows];
      newCompleteRows[payload.rowIndex] = true;
      return {
        ...state,
        completeRows: newCompleteRows,
      };
    case ACTIONS.DELETE_CHAR:
      const newInputWords = [...state.inputWords];
      const newUserInput = state.userInput.slice(0, -1);
      newInputWords[payload.rowIndex] = newUserInput;
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
