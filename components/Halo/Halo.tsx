const Halo = () => {
  return (
    <div className="absolute z-[-1] w-[280px] h-[280px] sm:w-[700px] sm:h-[700px] top-[calc(50%-140px)] left-[calc(50%-140px)] sm:top-[calc(50%-350px)] sm:left-[calc(50%-350px)]  rounded-full bg-ring1">
      <div className="absolute w-[220px] h-[220px] sm:w-[540px] sm:h-[540px] top-[calc(50%-110px)] left-[calc(50%-110px)] sm:top-[calc(50%-270px)] sm:left-[calc(50%-270px)] rounded-full bg-ring2">
        <div className="absolute w-[160px] h-[160px]  sm:w-[400px] sm:h-[400px] top-[calc(50%-80px)] left-[calc(50%-80px)] sm:top-[calc(50%-200px)] sm:left-[calc(50%-200px)] rounded-full bg-ring3"></div>
      </div>
    </div>
  );
};

export default Halo;
