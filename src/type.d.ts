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

// interface ResFirebase {
// 	user:           User;
// 	providerId:     null;
// 	_tokenResponse: TokenResponse;
// 	operationType:  string;
// }

// interface TokenResponse {
// 	kind:         string;
// 	localId:      string;
// 	email:        string;
// 	displayName:  string;
// 	idToken:      string;
// 	registered:   boolean;
// 	refreshToken: string;
// 	expiresIn:    string;
// }

// interface User {
// 	reloadUserInfo:  ReloadUserInfo;
// }

// interface ProviderDatum {
// 	providerId:  string;
// 	uid:         string;
// 	displayName: null;
// 	email:       string;
// 	phoneNumber: null;
// 	photoURL:    null;
// }

// interface ReloadUserInfo {
// 	localId:           string;
// 	email:             string;
// 	passwordHash:      string;
// 	emailVerified:     boolean;
// 	passwordUpdatedAt: number;
// 	providerUserInfo:  ProviderUserInfo[];
// 	validSince:        string;
// 	lastLoginAt:       string;
// 	createdAt:         string;
// 	lastRefreshAt:     Date;
// }