import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import FormSession from "@components/FromSession";
import Button from "@components/Button";
import Input from "@components/Input";
import Label from "@components/Label";

import key from "@assets/icons/key.svg";
import shield from "@assets/icons/shield.svg";

interface login {
  email: string;
  password: string;
}

const DivContent = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}

const Login = () => {
  const { register, handleSubmit } = useForm<login>({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit: SubmitHandler<login> = (data) => {
    console.log(data)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <FormSession
        handleSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center">
          <div className="bg-indigo-600 p-3 rounded-full">
            <img src={shield} alt="shield" className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 text-center">Welcome</h1>
        <DivContent>
          <Label className="font-semibold text-zinc-700">Email</Label>
          <Input<login> identify="email" type="email" placeholder="Email" register={register}  />
        </DivContent>
        <DivContent>
          <Label className="font-semibold text-zinc-700">Password</Label>
          <Input<login> identify="password" type="password" placeholder="Password" register={register} />
        </DivContent>
        <DivContent>
          <Button color="blue" type="submit" className="">
            Sign In
            <img src={key} alt="key" className="ml-2" />
          </Button>
        </DivContent>
        <DivContent>
          <Button color="link" >
            Create Account
          </Button>
        </DivContent>
      </FormSession>
    </div>
  )
} 

export default Login;