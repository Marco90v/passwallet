import { FieldValues } from "react-hook-form";

import { useState } from "react";
import { EMAIL, PASSWORD, TEXT } from "@utils/const";

import eye from "@assets/icons/eye.svg";
import eyeOff from "@assets/icons/eye-off.svg";
import mail from "@assets/icons/mail.svg";

const InputBase = <T extends FieldValues> (props:InputProps<T>) => {
  const { identify, register, required=false, className="", type=TEXT, ...other } = props;
	const extraClasses = `${type===PASSWORD && "pr-10"} ${type===EMAIL && "pl-10"}`;
  return (
    <input
			{...other}
			id={identify}
			type={type}
			className={`${extraClasses} w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${className}`}
			{...register(identify, {required})}
		/> 
  );
}

const Input = <T extends FieldValues> (props:InputProps<T>) => {
	const { type=TEXT } = props;
	const [isView, setIsView] = useState<boolean>(false);

	if(type === PASSWORD) {
		return (
			<div className="relative flex w-full">
				<InputBase  {...props} type={isView ? TEXT : PASSWORD} />
				<img
					src={isView ? eyeOff : eye}
					alt={isView ? "eyeOff" : "eye"}
					className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
					onClick={() => setIsView(!isView)}
				/>
			</div>
		);
	}
	if(type === EMAIL) {
		return (
			<div className="relative flex w-full">
				<InputBase  {...props} />
				<img
					src={mail}
					alt={"email"}
					className="absolute left-2 top-1/2 -translate-y-1/2"
				/>
			</div>
		);
	}
	return (
		<InputBase {...props} />
	);
}

export default Input;