import Choice from "../Choice";

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
    <div className="  playDivBg w-[334px] sm:w-[666px] h-full relative min-w-[320px] sm:min-w-[666px]">
      <Choice
        insideClass={`scissorsBg choiceInside ${initInsideClass}`}
        outsideClass={`scissorsBorder choiceOutside ${initOutsideClass} left-[calc(50%-3rem)] sm:left-[calc(50%-4.5rem)]`}
        handleChoice={handleChoice}
        id="scissors"
      />

      <Choice
        insideClass={`paperBg choiceInside ${initInsideClass}`}
        outsideClass={`paperBorder choiceOutside ${initOutsideClass} left-[calc(80%-2rem)] top-[25%] sm:left-[calc(80%-2rem)] sm:top-[25%]`}
        handleChoice={handleChoice}
        id="paper"
      />

      <Choice
        insideClass={`rockBg choiceInside ${initInsideClass}`}
        outsideClass={`rockBorder choiceOutside ${initOutsideClass} left-[calc(70%-2rem)] bottom-0 sm:left-[calc(70%-2rem)] `}
        handleChoice={handleChoice}
        id="rock"
      />

      <Choice
        insideClass={`lizardBg choiceInside ${initInsideClass}`}
        outsideClass={`lizardBorder choiceOutside ${initOutsideClass} left-[calc(20%-2rem)] bottom-0 sm:left-[calc(20%-2rem)] `}
        handleChoice={handleChoice}
        id="lizard"
      />
      <Choice
        insideClass={`spockBg choiceInside ${initInsideClass}`}
        outsideClass={`spockBorder choiceOutside ${initOutsideClass} left-[calc(10%-2rem)] top-[25%] sm:left-[calc(10%-2rem)] sm:top-[25%]`}
        handleChoice={handleChoice}
        id="spock"
      />
    </div>
  );
};

export default InitialState;
