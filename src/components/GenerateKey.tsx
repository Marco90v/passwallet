import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { keyGenerate } from "@utils/functions";

interface IFormGenerateKey {
  keyName: string;
}

const GenerateKey = () => {
  const { register, handleSubmit, setValue } = useForm<IFormGenerateKey>( {
    defaultValues: {
      keyName: "",
    },
  });

  const onSubmit = () => {
    const randomLong = Math.floor(Math.random() * (15 - 10) + 10); 
    const key = keyGenerate(randomLong);
    setValue("keyName", key);
  };

  return (
    <form className="flex gap-2 m-1" onSubmit={handleSubmit(onSubmit)}>
      <Input<IFormGenerateKey> identify="keyName" type="text" placeholder="Key" register={register} disabled className="disabled:cursor-text bg-zinc-200 text-zinc-900 w-44" />
      <Button color="green" type="submit">Generate</Button>
    </form>
  );
};

export default GenerateKey;