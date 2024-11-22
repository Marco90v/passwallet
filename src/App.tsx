import { useForm, SubmitHandler } from "react-hook-form"
import Input from "@components/Input";
import Button from "@components/Button";
import Label from "@components/Label";
import ChangeTheme from "@components/ChangeTheme";
import Login from "@pages/Login";
import CreateAccount from "@pages/CreateAccount";
import {Dashboard} from "@pages/Dashboard";
import { useState } from "react";



// const themeInitial = localStorage.getItem("theme") || "light";
// document.documentElement.classList.remove("light", "dark");
// document.documentElement.classList.add(themeInitial);

function App() {

	return (
		<>
			{/* <ChangeTheme /> */}
			{/* <Login /> */}
			<CreateAccount />
			{/* <Dashboard  onLogout={() => setIsAuthenticated(false)} /> */}
		</>
	);
}

export default App;
