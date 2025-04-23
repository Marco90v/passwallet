import { BLUE, GREEN, INDIGO, LINK, RED } from "@utils/const";
import { ReactNode } from "react";

type TypeColors = "green" | "red" | "blue" | "link" | "indigo";

interface ButtonProps {
  children: ReactNode;
	className?: string;
  type?: TypeButton;
	onClick?: () => void;
	disabled?: boolean;
  color?: TypeColors;
}

const getColor = (color:string) => {
  if(color === GREEN) {
    return "rounded-md bg-green-600 border-green-600 text-white py-2 hover:bg-green-700"
  }
  if(color === RED) {
    return "rounded-md bg-red-600 border-red-600 text-black py-2 hover:bg-red-700"
  }
  if(color === INDIGO) {
    return "rounded-md bg-indigo-600 border-indigo-600 text-white py-2 hover:bg-indigo-700"
  }
  if(color === BLUE) {
    return "rounded-md bg-blue-600 border-blue-600 text-white py-2 hover:bg-blue-700"
  }
  if(color === LINK) {
    return " bg-transparent border-transparent  text-indigo-600 content-center underline underline-offset-2 hover:text-indigo-700"
  }
  return "text-black"
}

const Button = (props:ButtonProps) => {
  const { children, className, onClick, type="button", disabled=false, color="" } = props;
  return (
    <button
      className={`${getColor(color)} flex gap-1 justify-center items-center transition-colors duration-300 disabled:cursor-not-allowed ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      >
        {children}
    </button>
  )
};

export default Button;