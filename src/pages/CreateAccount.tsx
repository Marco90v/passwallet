import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@components/Button";
import FormSession from "@components/FromSession";
import LabelInput from "@components/LabelInput";

interface createAccount {
  email: string
  password: string
  rePassword: string
}

const CreateAccount = () => {
  
  const { register, handleSubmit } = useForm<createAccount>({
    defaultValues: {
      email: "",
      password: "",
      rePassword: "",
    },
  })

  const onSubmit: SubmitHandler<createAccount> = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <FormSession
        handleSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold text-black text-center">Welcome</h1>
        <LabelInput<createAccount> label="Email" identify="email" type="email" placeholder="Email" register={register} />
        <LabelInput<createAccount> label="Password" identify="password" type="password" placeholder="Password" register={register} />
        <LabelInput<createAccount> label="Password" identify="rePassword" type="password" placeholder="Repeat Password" register={register} />
        <Button color="green" type="submit">
          Create Account
        </Button>
        <Button color="link" >
          Login
        </Button>
      </FormSession>
    </div>
  )
} 

export default CreateAccount;