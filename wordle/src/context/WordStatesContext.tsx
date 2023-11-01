import { createContext, useReducer } from "react";
import WordList from "../assets/wordlist.json";
import WordleReducer, {
  ACTIONS,
  initialState,
} from "../reducers/WordleReducer";

const WordStatesContext: any = createContext(initialState);

export const WordStatesProvider = (props: any) => {
  const [state, dispatch] = useReducer(WordleReducer, initialState);

  const changeInput = (inputContent: any) => {
    const word = inputContent;
    const newInputWord = word;

    dispatch({
      type: ACTIONS.CHANGE_INPUT,
      payload: {
        inputWords: newInputWord,
      },
    });
  };

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
          inputWords: [
            "Billy".toUpperCase(),
            "Grace".toUpperCase(),
            "Trail".toUpperCase(),
            "GRAIL".toUpperCase(),
            newAnswer.toUpperCase(),
            "".toUpperCase(),
          ],
        },
      },
    });
  };

  const value = {
    changeInput,
    handleClick,
    getRandomAnswer,
    inputWords: state.inputWords,
    answer: state.answer,
  };

  return (
    <WordStatesContext.Provider value={value}>
      {props.children}
    </WordStatesContext.Provider>
  );
};

export default WordStatesContext;
