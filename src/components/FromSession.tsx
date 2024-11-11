import { FormEvent, ReactNode } from "react";
import { FieldValues } from "react-hook-form";

import shield from "@assets/icons/shield.svg";


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
      className="m-auto flex flex-col w-[500px] gap-4 p-8 border-solid border border-zinc-200 bg-white rounded-2xl shadow-xl"
      onSubmit={accion}
    >
      <div className="flex flex-col items-center">
          <div className="bg-indigo-600 p-3 rounded-full">
            <img src={shield} alt="shield" className="w-8 h-8 text-white" />
          </div>
        </div>
      {children}
    </form>
  )
}

export default FormSession;