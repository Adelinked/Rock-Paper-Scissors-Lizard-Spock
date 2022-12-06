import IconClose from "../svgs/IconClose";

const RulesComponent: React.FC<{
  showRules: boolean;
  setShowRules: (hide: boolean) => void;
}> = ({ showRules, setShowRules }) => {
  return (
    <>
      {showRules ? (
        <div className="fixed overflow-y-auto bg-darkBackground z-10 top-0 h-screen w-screen flex flex-col items-center  rounded-lg  ">
          <div
            onClick={() => setShowRules(false)}
            className="fixed overflow-y-auto bg-white  z-10 top-0 h-screen w-screen flex flex-col items-center sm:h-[60%] sm:w-[60%] sm:top-[25%] sm:max-w-[560px] sm:max-h-[560px] rounded-lg  "
          >
            <div className="flex w-full justify-between items-center p-8 ">
              <div className="text-darkText text-3xl text-center w-full sm:text-left ">
                RULES
              </div>
              <div
                className="cursor-pointer hidden sm:block"
                onClick={() => setShowRules(false)}
              >
                <IconClose />
              </div>
            </div>
            <div className="z-10 rulesBg w-full h-full"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RulesComponent;
