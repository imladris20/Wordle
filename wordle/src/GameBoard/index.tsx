import CharRow from "./CharRow";

const GameBoard = () => {
  const answer = "GRAIL";

  return (
    <div className="mx-auto flex w-full flex-row justify-center pt-14 text-center">
      <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-3">
        <CharRow word="WATER" answer={answer} />
        <CharRow word="AFTER" answer={answer} />
        <CharRow word="BRAIL" answer={answer} />
        <CharRow word="GRAIL" answer={answer} />
        <CharRow word="T" answer={answer} />
        <CharRow word="" answer={answer} />
      </div>
    </div>
  );
};

export default GameBoard;
