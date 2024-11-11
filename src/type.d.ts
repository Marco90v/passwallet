// interface Login {
//   email: string
//   password: string
// }

interface InputProps<T> {
  identify: keyof T;
	register: UseFormRegister<T>;
	type?: "text" | "password" | "email" | "number";
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
}

interface ButtonProps {
  children: ReactNode;
	className?: string;
  type?: "submit" | "button";
	onClick?: () => void;
	disabled?: boolean;
  color?: "green" | "red" | "blue" | "link";
}

interface LabelProps{
	children: ReactNode;
	className?: string;
}

type Theme = "light" | "dark";
