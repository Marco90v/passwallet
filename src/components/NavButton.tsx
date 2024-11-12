import { cloneElement, ReactElement } from "react";
import Button from "@components/Button";

interface INavButton {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavButton({ icon, label, isActive, onClick }:INavButton) {
  return (
    <Button
        onClick={onClick}
        className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
          isActive
            ? 'border-indigo-500 text-slate-900'
            : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
        }`}
    >
      {cloneElement(icon as ReactElement, { className: 'h-5 w-5 mr-2' })}
      {label}
    </Button>
  );
}

export default NavButton;