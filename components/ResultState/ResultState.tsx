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
    setTimeout(() => setRenderOponent(result[1]), 800);
    setTimeout(() => {
      setRenderResult(result[0]);
    }, 1600);
  }, []);

  useEffect(() => {
    if (renderResult !== "WIN") return;
    setScore((curr: number) => curr + 1);
  }, [renderResult]);

  const playerInsideClass =
    "w-[6.5rem] h-[6.5rem]  lg:w-[14.5rem] lg:h-[14.5rem]";
  const playerOutsideClass = "border-[1.1rem]  lg:border-[2.2rem] ";
  return (
    <div className="flex items-center  justify-evenly w-full h-full flex-wrap  lg:min-w-[940px] ">
      <div className="flex flex-col items-center justify-center order-1  ">
        <p className="order-2 sm:order-1 pt-8 sm:pb-16 tracking-widest text-sm sm:text-2xl ">
          YOU PICKED
        </p>
        <Choice
          insideClass={`${choice}Bg choiceInside  ${playerInsideClass}`}
          outsideClass={`${choice}Border order-1 sm:order-2 choiceOutside ${playerOutsideClass} `}
          halo={renderResult === "WIN"}
        />
      </div>
      <div className=" flex flex-col items-center justify-center order-3 sm:order-2  ">
        {renderResult ? (
          <div className=" w-52 h-full">
            {/*<div className="pt-[90px]" />*/}
            <p className="  font-bold text-[2.6rem] text-center tracking-widest">
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
        <p className="order-2 sm:order-1 pt-8 sm:pb-16 tracking-widest text-sm sm:text-2xl ">
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