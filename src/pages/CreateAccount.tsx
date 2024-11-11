import Button from "@components/Button"
import FormSession from "@components/FromSession"
import Input from "@components/Input"
import Label from "@components/Label"
import { ReactNode } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface createAccount {
  email: string
  password: string
  rePassword: string
}

const DivContent = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}

const CreateAccount = () => {
  
  const { register, handleSubmit } = useForm<createAccount>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<createAccount> = (data) => {
    console.log(data)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <FormSession
        handleSubmit={handleSubmit(onSubmit)}
      >
        <DivContent>
          <Label className="font-semibold text-zinc-700">Email</Label>
          <Input<createAccount> identify="email" type="email" placeholder="Email" register={register} required={true}  />
        </DivContent>
        <DivContent>
          <Label className="font-semibold text-zinc-700">Password</Label>
          <Input<createAccount> identify="password" type="password" placeholder="Password" register={register} required={true} />
        </DivContent>
        <DivContent>
          <Label className="font-semibold text-zinc-700">Password</Label>
          <Input<createAccount> identify="rePassword" type="password" placeholder="Password" register={register} required={true} />
        </DivContent>
        <DivContent>
          <Button color="green" type="submit" className="w-[11rem] ml-auto">
          Create Account
          </Button>
        </DivContent>
        <DivContent>
          <Button color="link" >
            Login
          </Button>
        </DivContent>
      </FormSession>
    </div>
  )
} 

export default CreateAccount;