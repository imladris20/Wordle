import { createContext, useEffect, useReducer } from "react";
import WordList from "../assets/wordlist.json";
import WordleReducer, {
  ACTIONS,
  initialState,
} from "../reducers/WordleReducer";

const WordStatesContext: any = createContext(initialState);

export const WordStatesProvider = (props: any) => {
  const [state, dispatch] = useReducer(WordleReducer, initialState);

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      console.log(e.key);

      if (e.key === "Enter") {
        console.log("You press enter");
        dispatch({
          type: ACTIONS.SUBMIT_ROW,
          payload: {},
        });
      }

      if (e.key === "Backspace") {
        console.log("You press backspace");
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

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.CLICK,
      payload: {
        clickMessage: "I click, I do.",
      },
    });
  };

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * WordList.length);
    const newAnswer = WordList[randomIndex].toUpperCase();
    dispatch({
      type: ACTIONS.NEW_ANSWER,
      payload: { newAnswer },
    });
  };

  const value = {
    handleClick,
    getRandomAnswer,
    inputWords: state.inputWords,
    answer: state.answer,
    completeRows: state.completeRows,
  };

  return (
    <WordStatesContext.Provider value={value}>
      {props.children}
    </WordStatesContext.Provider>
  );
};

export default WordStatesContext;
