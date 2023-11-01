import WordList from "../assets/wordlist.json";

const randomIndex = Math.floor(Math.random() * WordList.length);
const answer = WordList[randomIndex].toUpperCase();

export const initialState = {
  answer: answer,
  inputWords: [
    "Billy".toUpperCase(),
    "Grace".toUpperCase(),
    "Trail".toUpperCase(),
    answer.toUpperCase(),
    "dsf".toUpperCase(),
    "".toUpperCase(),
  ],
};

//  定義ACTIONS變數來去核對要dispach的動作會比較方便管理，也比較不會出錯而找不到問題在哪裡
export const ACTIONS = {
  CHANGE_INPUT: "CHANGE_INPUT",
  SUBMIT_ANSWER: "SUBMIT_ANSWER",
  CLICK: "CLICK",
  NEW_ANSWER: "NEW_ANSWER",
};

const WordleReducer = (state: any, action: any) => {
  const { type, payload } = action;
  console.log("state in reducer: ", state);
  console.log("action in reducer: ", action);
  console.log("type in reducer: ", type);
  console.log("payload in reducer: ", payload);

  switch (type) {
    case ACTIONS.CHANGE_INPUT:
      return {
        ...state,
        inputWords: payload.inputWords,
        answer: payload.answer,
      };
    case ACTIONS.CLICK:
      console.log(payload.clickMessage);
      return state;
    case ACTIONS.NEW_ANSWER:
      console.log(payload.wordState.answer);
      return payload.wordState;
    default:
      return state;
  }
};

export default WordleReducer;
