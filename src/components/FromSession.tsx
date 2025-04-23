import { ReactNode } from "react";
import shield from "@assets/icons/shield.svg";
import { SubmitHandler, useFormContext } from "react-hook-form";

interface props {
  onSubmit: SubmitHandler<any>;
  children:ReactNode;
}
const FormSession = ({onSubmit, children}:props) => {

  const { handleSubmit } = useFormContext();

  return (
    <form
      className="m-auto flex flex-col w-[500px] gap-4 p-8 border-solid border border-zinc-200 bg-white rounded-2xl shadow-xl"
      onSubmit={handleSubmit(onSubmit)}
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