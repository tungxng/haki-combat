import { IconProps } from "../utils/types";
import hamsterImage from "./../images/anime-logo.png"; // Adjust the path accordingly

const Hamster: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;

  return (
    <img
      src={hamsterImage}
      alt="Hamster"
      width={24}
      height={24}
      className="text-[#d4d4d4]"
    />
  );
};

export default Hamster;
