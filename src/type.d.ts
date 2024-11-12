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
