import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import Button from "@components/Button";
import FormSession from "@components/FromSession";
import LabelInput from "@components/LabelInput";
import { Mail } from "lucide-react";
import { useShallow } from "zustand/shallow";
import { useStoreFirebase } from "@store/firebase";
import { saveSalt } from "@utils/firebase";
import Alert from "@components/Alert";
import useAlertStore from "@store/alert";
import { ERROR, WARNING } from "@utils/const";
import { useStoreSession } from "@store/session";

interface CreateAccountProps {
  onChange: () => void;
}

const CreateAccount = ({onChange}:CreateAccountProps) => {

  const {appFirebase} = useStoreFirebase(
    useShallow( (state => ({
      appFirebase: state.appFirebase,
    })))
  )

  const {showAlert} = useAlertStore(
    useShallow( (state => ({
      showAlert: state.showAlert,
    })))
  )

  const {changeSession} = useStoreSession(
    useShallow( (state => ({
      changeSession: state.changeSession,
    })))
  )

  const methods = useForm<createAccount>();

  const onSubmit: SubmitHandler<createAccount> = (data) => {
    const auth = getAuth();
    if(data.password === data.rePassword) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        saveSalt(appFirebase, data).then((res) => {
          changeSession(true, data.email, res.salt, data.password);
        }).catch((error) => {
          console.log(error);
          showAlert("Error saving data.", ERROR)
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        showAlert(errorMessage, ERROR)
      });
    } else {
      console.log("la contraseña no es igual")
      showAlert("The password does not match.", WARNING)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <FormProvider {...methods}>
        <FormSession
          onSubmit={onSubmit}
        >
          <h1 className="text-3xl font-bold text-black text-center">Welcome</h1>
          <LabelInput<createAccount>
            label="Email"
            identify="email"
            type="email"
            placeholder="Email"
            icon={<Mail className="text-indigo-800" />}
          />
          <LabelInput<createAccount>
            label="Password"
            identify="password"
            type="password"
            placeholder="Password"
          />
          <LabelInput<createAccount>
            label="Password"
            identify="rePassword"
            type="password"
            placeholder="Repeat Password"
          />
          <Button color="green" type="submit">
            Create Account
          </Button>
          <Button
            color="link"
            onClick={onChange}
          >
            Login
          </Button>
        </FormSession>
      </FormProvider>
      <Alert />
    </div>
  )
}

export default CreateAccount;