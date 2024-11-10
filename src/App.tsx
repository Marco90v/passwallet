import { useForm, Controller, SubmitHandler } from "react-hook-form"
import Input from "@components/Input";
import Button from "@components/Button";

interface IFormInput {
  firstName: string
  password: string
}

const temp = {
	value:"123",
}

function App() {
	const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      password: "",
    },
  })
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input identify="firstName" type="text" placeholder="First Name" register={register} />
			<Input identify="password" type="password" placeholder="Password" register={register} />
			<Button type="submit" >Submit</Button>
			<Button color="red" >Submit</Button>
			<Button color="green" >Submit</Button>
    </form>
	);
}

export default App;
