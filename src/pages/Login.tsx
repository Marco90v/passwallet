import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormSession from "@components/FromSession";
import Button from "@components/Button";
import LabelInput from "@components/LabelInput";
import { KeyRound, Mail } from "lucide-react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useShallow } from "zustand/shallow";
import { useStoreFirebase } from "@store/firebase";
import { useStoreSession } from "@store/session";
import { getSalt } from "@utils/firebase";
import Alert from "@components/Alert";
import useAlertStore from "@store/alert";
import { ERROR } from "@utils/const";
import { useState } from "react";

interface loginProps {
  onChange: () => void;
}

interface login {
  email: string;
  password: string;
}

const Login = ({onChange}:loginProps) => {

  const {changeSession} = useStoreSession(
    useShallow( (state => ({
      changeSession: state.changeSession,
    })))
  )

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

  const [standby, setStandby] = useState(false);

  const methods = useForm<login>();

  const onSubmit: SubmitHandler<login> = (data) => {
    setStandby(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      getSalt(appFirebase, data.email).then((res) => {
        if(res){
          changeSession(true, data.email, res.salt, data.password);
        }else{
          showAlert("Error retrieving data.", ERROR);
        }
        setStandby(false);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      if(errorCode === "auth/invalid-credential"){
        showAlert("Invalid credentials.", ERROR);
      }else{
        showAlert("Server error.", ERROR);
      }
      setStandby(false);
    });
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <FormProvider {...methods}>
        <FormSession
          onSubmit={onSubmit}
        >
          <h1 className="text-2xl font-bold text-slate-800 text-center">Welcome</h1>
          <LabelInput<login>
            label="Email"
            identify="email"
            type="email"
            placeholder="Email"
            icon={<Mail className="text-indigo-800" />}
            disabled={standby}
          />
          <LabelInput<login>
            label="Password"
            identify="password"
            type="password"
            placeholder="Password"
            disabled={standby}
          />
          <Button color="blue" type="submit" disabled={standby} >
            Sign In
            <KeyRound className="ml-2" />
          </Button>
          <Button color="link" onClick={onChange} disabled={standby} >
            Create Account
          </Button>
        </FormSession>
      </FormProvider>
      <Alert />
    </div>
  )
} 

export default Login;