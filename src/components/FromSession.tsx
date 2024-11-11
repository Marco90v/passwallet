import { FormEvent, ReactNode } from "react";
import { FieldValues } from "react-hook-form";

interface props<T extends FieldValues> {
  handleSubmit:()=>{};
  children:ReactNode;
}
const FormSession = <T extends FieldValues> ({handleSubmit, children}:props<T>) => {

  const accion = (e:FormEvent) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <form
      className="m-auto flex flex-col w-[500px] gap-4 p-4 border-solid border border-zinc-200 rounded-xl bg-blue-200 dark:bg-zinc-700"
      onSubmit={accion}
    >
      {children}
    </form>
  )
}

export default FormSession;