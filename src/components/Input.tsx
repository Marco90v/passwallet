import { FieldValues } from "react-hook-form";

import { useState } from "react";
import { EMAIL, PASSWORD, TEXT } from "@utils/const";

import eye from "@assets/icons/eye.svg";
import eyeOff from "@assets/icons/eye-off.svg";
import mail from "@assets/icons/mail.svg";

const InputBase = <T extends FieldValues> (props:InputProps<T>) => {
  const { identify, register, required=false, className="", type=TEXT, ...other } = props;
  return (
    <input {...other}  id={identify} className={`${type===PASSWORD && "pr-8 w-full"} ${type===EMAIL && "pl-8 w-full"} p-1 m-1 rounded border-solid border border-zinc-200 ${className}`} {...register(identify, {required})}  /> 
  );
}

const Input = <T extends FieldValues> (props:InputProps<T>) => {
	const { type=TEXT, className="" } = props;
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
					className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer"
					onClick={() => setIsView(!isView)}
				/>
			</div>
		);
	}
	return (
		<InputBase {...props} />
	);
}

export default Input;