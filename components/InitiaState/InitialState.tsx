import { memo } from "react";
import Choice from "../Choice";

const choices = ["scissors", "paper", "rock", "lizard", "spock"];
const position: { [index: string]: string } = {
  scissors: "left-[calc(50%-3rem)] sm:left-[calc(50%-4.5rem)]",
  paper:
    "left-[calc(80%-2rem)] top-[25%] sm:left-[calc(80%-2rem)] sm:top-[25%]",
  rock: "left-[calc(70%-2rem)] bottom-0 sm:left-[calc(70%-2rem)]",
  lizard: "left-[calc(20%-2rem)] bottom-0 sm:left-[calc(20%-2rem)]",
  spock:
    "left-[calc(10%-2rem)] top-[25%] sm:left-[calc(10%-2rem)] sm:top-[25%]",
};
const InitialState: React.FC<{
  setChoice: (choice: string) => void;
  setGameState: (state: string) => void;
}> = ({ setChoice, setGameState }) => {
  const initInsideClass =
    "w-[5rem] h-[5rem] sm:w-[8.5rem] sm:h-[8.5rem] cursor-pointer hover:bg-blue-300 active:bg-yellow-300";
  const initOutsideClass = "border-[0.8rem] sm:border-[1rem] absolute z-[0]";
  const handleChoice = (e: any) => {
    setChoice(e.target.id);
    setGameState("Result");
  };
  return (
    <div className="playDivBg w-[334px] sm:w-[666px] h-full relative min-w-[320px] sm:min-w-[666px]">
      {choices.map((i) => (
        <Choice
          insideClass={`${i}Bg choiceInside ${initInsideClass}`}
          outsideClass={`${i}Border choiceOutside ${initOutsideClass} ${position[i]}`}
          handleChoice={handleChoice}
          id={i}
          key={i}
        />
      ))}
    </div>
  );
};

export default memo(InitialState);
