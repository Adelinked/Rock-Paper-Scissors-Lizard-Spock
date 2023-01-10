import { useEffect, useState } from "react";
import Choice from "../Choice";

const ResultState: React.FC<{
  choice: string;
  result: string[];
  setGameState: (state: string) => void;
  setChoice: (choice: string) => void;
  setScore: Function;
}> = ({ choice, result, setGameState, setChoice, setScore }) => {
  const [renderOponent, setRenderOponent] = useState("");
  const [renderResult, setRenderResult] = useState("");

  useEffect(() => {
    const id1 = setTimeout(() => setRenderOponent(result[1]), 800);
    const id2 = setTimeout(() => {
      setRenderResult(result[0]);
      updateScore(result[0]);
    }, 1600);
    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
    };
  }, []);

  const updateScore = (result: string) => {
    if (result === "DRAW") return;
    if (result === "WIN") setScore((curr: number) => curr + 1);
    else if (result === "LOSE")
      setScore((curr: number) => (curr === 0 ? 0 : curr - 1));
  };

  const playerInsideClass =
    "w-[6.2rem] h-[6.2rem]  lg:w-[14.5rem] lg:h-[14.5rem]";
  const playerOutsideClass = "border-[1rem]  lg:border-[2.2rem] ";
  return (
    <div className="flex items-center  justify-between sm:justify-evenly w-full h-full flex-wrap  lg:min-w-[940px] ">
      <div className="flex flex-col items-center justify-center order-1  ">
        <p className="order-2 sm:order-1 pt-8 sm:pb-16 tracking-widest text-sm sm:text-xl lg:text-2xl ">
          YOU PICKED
        </p>
        <Choice
          insideClass={`${choice}Bg choiceInside  ${playerInsideClass}`}
          outsideClass={`${choice}Border order-1 sm:order-2 choiceOutside ${playerOutsideClass} `}
          halo={renderResult === "WIN"}
        />
      </div>
      <div className=" flex flex-col  items-center justify-center order-3 sm:order-2 w-full h-full sm:w-52  ">
        {renderResult ? (
          <div className=" w-56  ">
            {/*<div className="pt-[90px]" />*/}
            <p className=" w-full  font-bold text-[2.6rem] text-center tracking-widest ">
              {renderResult === "DRAW" ? "DRAW" : "YOU " + renderResult}
            </p>
            {/*<div className="pt-[7px]" />*/}
            <button
              onClick={() => {
                setChoice("");
                setGameState("Initial");
              }}
              className=" w-full rounded-lg bg-white text-darkText py-4 tracking-widest text-xl hover:bg-darkText hover:text-white border-2 border-transparent hover:border-white"
            >
              PLAY AGAIN
            </button>
          </div>
        ) : null}
      </div>
      <div className="  flex flex-col items-center justify-center order-2 sm:order-3 ">
        <p className="order-2 sm:order-1 pt-8 sm:pb-16 tracking-widest text-sm sm:text-xl lg:text-2xl ">
          THE HOUSE PICKED
        </p>
        <Choice
          insideClass={`${playerInsideClass} choiceInside
            ${renderOponent === "" ? `bg-emptyChoiceBg ` : `${renderOponent}Bg`}
          `}
          outsideClass={`order-1 sm:order-2  choiceOutside ${playerOutsideClass}
            ${renderOponent === "" ? `` : `${renderOponent}Border`}`}
          halo={renderResult === "LOSE"}
        />
      </div>
    </div>
  );
};

export default ResultState;
