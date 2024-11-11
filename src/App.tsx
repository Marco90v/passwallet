import { useForm, SubmitHandler } from "react-hook-form"
import Input from "@components/Input";
import Button from "@components/Button";
import Label from "@components/Label";
import ChangeTheme from "@components/ChangeTheme";
import Login from "./pages/Login";

interface IFormInput {
  firstName: string
  password: string
}

const themeInitial = localStorage.getItem("theme") || "light";
document.documentElement.classList.remove("light", "dark");
document.documentElement.classList.add(themeInitial);

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
		<>
			{/* <form onSubmit={handleSubmit(onSubmit)}>
				<Input identify="firstName" type="text" placeholder="First Name" register={register} />
				<Input identify="password" type="password" placeholder="Password" register={register} />
				<Button type="submit" >Submit</Button>
				<Button color="red" >Submit</Button>
				<Button color="green" >Submit</Button>
				<Label>Label</Label>
			</form>
			<ChangeTheme /> */}
			<Login />
		</>
	);
}

export default App;
