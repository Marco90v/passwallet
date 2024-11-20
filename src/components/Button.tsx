import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
	className?: string;
  type?: TypeButton;
	onClick?: () => void;
	disabled?: boolean;
  color?: "green" | "red" | "blue" | "link" | "indigo";
}

const getColor = (color:string) => {
  if(color === "green") {
    return "rounded-md bg-green-600 border-green-600 text-white hover:bg-green-700"
  }
  if(color === "red") {
    return "rounded-md bg-red-600 border-red-600 text-black hover:bg-red-700"
  }
  if(color === "indigo") {
    return "rounded-md bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700"
  }
  if(color === "blue") {
    return "rounded-md bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
  }
  if(color === "link") {
    return " bg-transparent border-transparent  text-indigo-600 content-center underline underline-offset-2 hover:text-indigo-700"
  }
  return "text-black"
}

const Button = (props:ButtonProps) => {
  const { children, className, onClick, type="button", disabled=false, color="" } = props;
  return (
    <button
    // rounded-md m-1 px-4 py-1 flex gap-1 border-solid border-2 justify-center items-center
      className={`${getColor(color)} flex gap-1 justify-center items-center transition-colors duration-300 ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      >
        {children}
    </button>
  )
};

export default Button;