import { ReactNode } from "react";

interface LiProps {
  children: ReactNode;
  className?: string;
}

const Li = (props:LiProps) => {
  const { children, className } = props;
  return (
    <li className={`cursor-pointer text-zinc-300 font-bold hover:text-white transition-colors ${className}`}>
      {children}
    </li>
  );
};

export default Li;