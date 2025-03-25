import { FieldValues, useFormContext } from "react-hook-form";
import { useState } from "react";
import { EMAIL, PASSWORD, TEXT } from "@utils/const";
import { Eye, EyeOff } from "lucide-react";

const Input = <T extends FieldValues> (props:InputProps<T>) => {
	const { register } = useFormContext();
	const { identify, required=false, className="", type=TEXT, icon, children, ...other } = props;
	const extraClasses = `${type===PASSWORD && "pr-10" } ${type===EMAIL && "pl-10"}`;
	const [isView, setIsView] = useState<boolean>(false);

  return (
		<div className="relative flex w-full">
			<div
				className={`absolute left-2 top-1/2 -translate-y-1/2 ${type===PASSWORD && "cursor-pointer"}`}
				onClick={() => setIsView(!isView)}
			>
				{
					type === PASSWORD ?
					isView ? <EyeOff className="text-indigo-600" /> : <Eye className="text-indigo-600" /> :
					icon
				}
			</div>
			<input
				{...other}
				id={identify}
				type={type === PASSWORD ? isView ? TEXT : PASSWORD : type}
				className={`${extraClasses} text-base text-black w-full pl-10 pr-3 py-2 rounded-md shadow-sm border border-slate-200 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-indigo-500 disabled:bg-gray-400 disabled:text-slate-800 disabled:border-transparent transition-all ${className}`}
				{...register(identify, {required})}
			/>
			{children}
		</div>
  );
}

export default Input;