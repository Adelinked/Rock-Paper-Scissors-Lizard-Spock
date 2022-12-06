import Halo from "../Halo";

const Choice: React.FC<{
  insideClass: string;
  outsideClass?: string;
  handleChoice?: (e: any) => void;
  id?: string;
  halo?: boolean;
}> = ({ insideClass, outsideClass, handleChoice, id, halo }) => {
  return (
    <div className={` ${outsideClass}`}>
      <div
        className={`bg-white rounded-full  ${insideClass} ${
          halo ? "relative" : "undefined"
        }`}
        onClick={(e) => (handleChoice ? handleChoice(e) : undefined)}
        id={id}
      >
        {halo ? <Halo /> : null}
      </div>
    </div>
  );
};

export default Choice;
