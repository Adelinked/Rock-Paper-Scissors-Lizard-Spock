import Image from "next/image";
const LogoBonus = () => {
  return (
    <div className="relative w-14 h-14 sm:w-28 sm:h-28 ">
      <Image
        src="/images/logo-bonus.svg"
        alt=""
        fill
        className="object-cover"
      />{" "}
    </div>
  );
};

export default LogoBonus;
