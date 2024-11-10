import { FieldValues } from "react-hook-form";

import { useState } from "react";
import { PASSWORD, TEXT } from "@utils/const";

import eye from "@assets/icons/eye.svg";
import eyeOff from "@assets/icons/eye-off.svg";

const InputBase = <T extends FieldValues>(props:InputProps<T>) => {
  const { identify, register, required=false, className="", ...other } = props;
  return (
    <input {...other} className={`p-1 m-1 rounded border-solid border-2 border-zinc-200 ${className}`} {...register(identify, {required})}  /> 
  );
}

const Input = <T extends FieldValues>(props:InputProps<T>) => {
	const { type=TEXT } = props;
	const [isView, setIsView] = useState<boolean>(false);

	if(type === "password") {
		return (
			<div className="inline relative">
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
	return (
		<InputBase {...props} />
	);
}

export default Input;