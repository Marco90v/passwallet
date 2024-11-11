import { ReactNode } from "react";
import Label from "./Label";
import Input from "./Input";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface LabelInputProps<T extends FieldValues> {
  identify: keyof T;
  label:string;
  register:UseFormRegister<T>;
  type?:"text" | "password" | "email" | "number";
  placeholder?:string;
}

const LabelInput =<T extends FieldValues>({label, identify, type, placeholder, register, ...other}:LabelInputProps<T>) => {
  return (
    <div className="flex flex-col">
      <Label className="font-semibold text-zinc-700">{label}</Label>
      <Input<T> identify={identify} type={type} placeholder={placeholder} register={register} {...other} />
    </div>
  )
}

export default LabelInput;