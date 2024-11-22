import { SubmitHandler, useForm } from "react-hook-form";
import FormSession from "@components/FromSession";
import Button from "@components/Button";
import LabelInput from "@components/LabelInput";
import { KeyRound, Mail } from "lucide-react";

interface login {
  email: string;
  password: string;
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
        <h1 className="text-2xl font-bold text-slate-800 text-center">Welcome</h1>
        <LabelInput<login>
          label="Email"
          identify="email"
          type="email"
          placeholder="Email"
          register={register}
          icon={<Mail className="text-indigo-800" />}
        />
        <LabelInput<login>
          label="Password"
          identify="password"
          type="password"
          placeholder="Password"
          register={register}
        />
        <Button color="blue" type="submit">
          Sign In
          <KeyRound className="ml-2" />
        </Button>
        <Button color="link" >
          Create Account
        </Button>
      </FormSession>
    </div>
  )
} 

export default Login;