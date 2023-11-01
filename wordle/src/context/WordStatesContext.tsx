import { createContext, useEffect, useReducer } from "react";
import WordList from "../assets/wordlist.json";
import WordleReducer, {
  ACTIONS,
  initialState,
} from "../reducers/WordleReducer";

const WordStatesContext: any = createContext(initialState);

export const WordStatesProvider = (props: any) => {
  const [state, dispatch] = useReducer(WordleReducer, initialState);

  const addCharToState = (char: any) => {
    state.userInput = state.userInput + char;
    const newState = {
      ...state,
      inputWords: [...state.inputWords],
    };
    newState.inputWords[0] = state.userInput.toUpperCase();
    return newState;
  };

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      console.log(e.key);

      if (e.key === "Enter") {
        console.log("You press enter");
      }

      if (e.key === "Backspace") {
        console.log("You press backspace");
      }

      if (/^[A-Za-z]$/.test(e.key)) {
        dispatch({
          type: ACTIONS.INPUT_CHAR,
          payload: addCharToState(e.key),
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
      payload: {
        wordState: {
          answer: newAnswer,
          userInput: "",
          completeRows: [...Array(6).fill(false)],
          inputWords: [...Array(6).fill("")],
        },
      },
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
