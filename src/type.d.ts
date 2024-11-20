// interface Login {
//   email: string
//   password: string
// }

type TypeInput = "email" | "password" | "text" | "number";
type TypeButton = "button" | "submit";

interface InputProps<T> {
  identify: keyof T;
	register: UseFormRegister<T>;
	type: TypeInput;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
}

interface SelectProps<T extends FieldValues> {
  identify: keyof T;
	register: UseFormRegister<T>;
	className?: string;
	disabled?: boolean;
	required?: boolean;
}

interface LabelProps{
	children: ReactNode;
	className?: string;
}

type Theme = "light" | "dark";

type itemsNavValue = 'items' | 'add' | 'password' | 'help';
type itemsfilterValue = 'all' | 'social' | 'banking' | 'other';

interface IPage {
  label: string;
  value: itemsNavValue;
  icon: React.ReactNode;
}

interface ItemType {
  id: string;
  title: string;
  username: string;
	email: string;
  password: string;
  category: string;
  url?: string;
};
