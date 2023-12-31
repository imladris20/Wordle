import { createContext, useEffect, useReducer, useRef } from "react";
import WordList from "../assets/wordlist.json";
import WordleReducer, {
  ACTIONS,
  initialState,
} from "../reducers/WordleReducer";

const WordStatesContext: any = createContext(initialState);

export const WordStatesProvider = (props: any) => {
  const [state, dispatch] = useReducer(WordleReducer, initialState);
  const buttonRef: any = useRef();

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      buttonRef.current.blur();
      if (e.key === "Enter") {
        dispatch({
          type: ACTIONS.SUBMIT_ROW,
          payload: {},
        });
      }

      if (e.key === "Backspace") {
        dispatch({
          type: ACTIONS.DELETE_CHAR,
          payload: {},
        });
      }

      if (/^[A-Za-z]$/.test(e.key)) {
        dispatch({
          type: ACTIONS.INPUT_CHAR,
          payload: { char: e.key },
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * WordList.length);
    const newAnswer = WordList[randomIndex].toUpperCase();
    dispatch({
      type: ACTIONS.NEW_ANSWER,
      payload: { newAnswer },
    });
  };

  const value = {
    getRandomAnswer,
    inputWords: state.inputWords,
    answer: state.answer,
    completeRows: state.completeRows,
    buttonRef: buttonRef,
  };

  return (
    <WordStatesContext.Provider value={value}>
      {props.children}
    </WordStatesContext.Provider>
  );
};

export default WordStatesContext;
