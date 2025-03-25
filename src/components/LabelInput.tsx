import { FieldValues, UseFormRegister } from "react-hook-form";
import Label from "@components/Label";
import Input from "@components/Input";

interface LabelInputProps<T extends FieldValues> extends InputProps<T> {
  label:string;
}

const LabelInput =<T extends FieldValues>({label, identify, type, placeholder, icon, ...other}:LabelInputProps<T>) => {
  return (
    <div className="flex flex-col">
      <Label className="font-semibold text-zinc-700">{label}</Label>
      <Input
        identify={identify}
        type={type}
        placeholder={placeholder}
        // register={register} {...other}
        icon={icon}
      />
    </div>
  )
}

export default LabelInput;