import { v4 as uuidv4 } from "uuid";

const GameBoard = () => {
  const invalidCharacter =
    "boardGrid h-17 w-17 flex items-center justify-center rounded-md border-2 border-solid border-gray-300 bg-absent font-sans text-4xl font-semibold text-white";

  const positionWrongCharacter =
    "boardGrid h-17 w-17 flex items-center justify-center rounded-md border-2 border-solid border-gray-300 bg-present font-sans text-4xl font-semibold text-white";

  const correctCharacter =
    "boardGrid h-17 w-17 flex items-center justify-center rounded-md border-2 border-solid border-gray-300 bg-correct font-sans text-4xl font-semibold text-white";

  console.log(invalidCharacter, positionWrongCharacter, correctCharacter);

  // const grids = [...Array(30).keys()].map((index) => (
  //   <div
  //     className="boardGrid h-17 w-17 rounded-md border-2 border-solid border-gray-300"
  //     key={uuidv4()}
  //   ></div>
  // ));

  return (
    <div className="mx-auto flex w-full flex-row justify-center pt-14 text-center">
      <div className="boardGridContainer grid h-[480px] w-[400px] grid-cols-5 grid-rows-6 gap-2">
        <div className="gridstyle bg-absent text-white" key={uuidv4()}>
          W
        </div>
        <div className="gridstyle bg-present text-white" key={uuidv4()}>
          A
        </div>
        <div className="gridstyle bg-absent text-white" key={uuidv4()}>
          T
        </div>
        <div className="gridstyle bg-absent text-white" key={uuidv4()}>
          E
        </div>
        <div className="gridstyle bg-present text-white" key={uuidv4()}>
          R
        </div>
        <div className="gridstyle bg-present text-white" key={uuidv4()}>
          A
        </div>
        <div className="gridstyle bg-absent text-white" key={uuidv4()}>
          F
        </div>
        <div className="gridstyle bg-absent text-white" key={uuidv4()}>
          T
        </div>
        <div className="gridstyle bg-absent text-white" key={uuidv4()}>
          E
        </div>
        <div className="gridstyle bg-present text-white" key={uuidv4()}>
          R
        </div>
        <div className="gridstyle bg-absent text-white" key={uuidv4()}>
          B
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          R
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          A
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          I
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          L
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          G
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          R
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          A
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          I
        </div>
        <div className="gridstyle bg-correct text-white" key={uuidv4()}>
          L
        </div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
        <div className="gridstyle text-absent" key={uuidv4()}></div>
      </div>
    </div>
  );
};

export default GameBoard;
