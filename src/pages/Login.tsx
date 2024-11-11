import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@components/Button";
import Input from "@components/Input";
import Label from "@components/Label";

import key from "@assets/icons/key.svg";
import { ReactNode } from "react";
import FormSession from "@components/FromSession";

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
    <div className="flex items-center justify-center h-screen">
      <FormSession
        handleSubmit={handleSubmit(onSubmit)}
      >
        <DivContent>
          <Label className="font-semibold text-zinc-700">Email</Label>
          <Input<login> identify="email" type="email" placeholder="Email" register={register}  />
        </DivContent>
        <DivContent>
          <Label className="font-semibold text-zinc-700">Password</Label>
          <Input<login> identify="password" type="password" placeholder="Password" register={register} />
        </DivContent>
        <DivContent>
          <Button color="blue" type="submit" className="w-[7rem] ml-auto">
            Login
            <img src={key} alt="key" />
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