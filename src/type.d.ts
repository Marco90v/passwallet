interface InputProps<T extends FieldValues> {
  identify: string;
	register: UseFormRegister<T>;
	type?: "text" | "password" | "email" | "number";
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
}

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "button";
	onClick?: () => void;
	disabled?: boolean;
  color?: "green" | "red" | "blue";
}

interface LabelProps{
	children: ReactNode;
	className?: string;
}

type Theme = "light" | "dark";
