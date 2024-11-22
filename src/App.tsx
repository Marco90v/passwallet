import { useForm, SubmitHandler } from "react-hook-form"
import Input from "@components/Input";
import Button from "@components/Button";
import Label from "@components/Label";
import ChangeTheme from "@components/ChangeTheme";
import Login from "@pages/Login";
import CreateAccount from "@pages/CreateAccount";
import {Dashboard} from "@pages/Dashboard";
import { useState } from "react";
import { useStoreSession } from "@store/session";
import { useShallow } from "zustand/shallow";

// const themeInitial = localStorage.getItem("theme") || "light";
// document.documentElement.classList.remove("light", "dark");
// document.documentElement.classList.add(themeInitial);

function App() {

	const {L_A, session, changeL_A, changeSession} = useStoreSession(
    useShallow( (state => ({
      L_A: state.L_A,
      session: state.session,
      changeL_A: state.changeL_A,
      changeSession: state.changeSession,
    })))
  )

	return session ?
		<Dashboard  onLogout={() => changeSession()} /> :
		L_A ? <Login onChange={() => changeL_A()} onSession={() => changeSession()} /> : <CreateAccount onChange={() => changeL_A()} />

}

export default App;
