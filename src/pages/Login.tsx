import { SubmitHandler, useForm } from "react-hook-form";
import FormSession from "@components/FromSession";
import Button from "@components/Button";
import LabelInput from "@components/LabelInput";
import { KeyRound, Mail } from "lucide-react";
import { getAuth, signInWithEmailAndPassword, UserCredential, UserInfo } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore"; 
import { useShallow } from "zustand/shallow";
import { useStoreFirebase } from "@store/firebase";
import { useStoreSession } from "@store/session";
import { getSalt } from "@utils/firebase";
import Alert from "@components/Alert";
import useAlertStore from "@store/alert";
// import { appFirebase } from "@utils/firebase";

interface loginProps {
  onChange: () => void;
  // onSession: () => void;
}

interface login {
  email: string;
  password: string;
}

// interface User extends UserInfo {
//   reloadUserInfo: {
//     passwordHash: string;
//   };
// }

const Login = ({onChange}:loginProps) => {
  // const {appFirebase} = useStoreFirebase(
  //   useShallow( (state => ({
  //     // db: state.db,
  //     appFirebase: state.appFirebase,
  //   })))
  // )

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

  const { register, handleSubmit } = useForm<login>({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit: SubmitHandler<login> = (data) => {
    // console.log(data)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // const user:UserInfo = userCredential.user;
      // const pH  = (user as User).reloadUserInfo.passwordHash
      // console.log(pH)
      getSalt(appFirebase, data.email).then((res) => {
        if(res){
          changeSession(true, data.email, res?.salt);
        }else{
          showAlert("Error retrieving data.", "error");
        }
      });
      // console.log(salt)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(error.code === "auth/invalid-credential"){
        showAlert("Invalid credentials.", "error");
      }else{
        showAlert("Server error.", "error");

      }
    });
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
        <Button
          color="link"
          onClick={onChange}
        >
          Create Account
        </Button>
      </FormSession>
      <Alert />
    </div>
  )
} 

export default Login;