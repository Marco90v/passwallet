// interface Login {
//   email: string
//   password: string
// }

type TypeInput = "email" | "password" | "text" | "number";
type TypeButton = "button" | "submit";

interface InputProps<T> {
  identify: string;
	// register: UseFormRegister<T>;
	type: TypeInput;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	icon?: JSX.Element;
	children?: React.ReactNode;
}

interface SelectProps<T extends FieldValues> {
  identify: keyof T;
	register: UseFormRegister<T>;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	icon?: JSX.Element;
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
}
interface createAccount {
  email: string
  password: string
  rePassword: string
}

interface salt {
	salt: string;
}

interface PasswordType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface resultType {
  result: boolean;
  message: string;
}

type actionModify = "add" | "update" | "remove";

type TypeOptionSelect = 'social' | 'banking' | 'other';

type TypeAlertState = 'success' | 'error' | 'info' | 'warning' | '';