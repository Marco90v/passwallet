import { UseFormRegister } from "react-hook-form";

interface SelectProps {
  identify: keyof ItemType;
	register: UseFormRegister<ItemType>;
	type?: "text" | "password" | "email" | "number";
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
}

interface OptionsSelect {
  value: 'social' | 'banking' | 'other';
  label: string;
}

const options:OptionsSelect[] = [
  { value: 'social', label: 'Social' },
  { value: 'banking', label: 'Banking' },
  { value: 'other', label: 'Other' },
];

const Salect = (props:SelectProps) => {
  const { identify, register, className, disabled, required } = props;
  return (
    <select
      className={`w-full px-3 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent bg-white rounded-lg ${className}`}
      disabled={disabled}
      required={required}
      {...register(identify, {required})}
    >
      {
        options.map((option, index) => {
          return (
            <option
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          )
        })
      }
    </select>
  );
};

export default Salect;