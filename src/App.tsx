import Login from "@pages/Login";
import CreateAccount from "@pages/CreateAccount";
import {Dashboard} from "@pages/Dashboard";
import { useStoreSession } from "@store/session";
import { useShallow } from "zustand/shallow";

function App() {

	const {L_A, session, changeL_A, changeSession} = useStoreSession(
    useShallow( (state => ({
      L_A: state.L_A,
      session: state.session,
      changeL_A: state.changeL_A,
      changeSession: state.changeSession,
    })))
  )

  if(session.active) {
		return <Dashboard />
  }else{
    if(L_A){
      return <Login onChange={() => changeL_A()} />
    }else{
      return <CreateAccount onChange={() => changeL_A()} />
    }
  }

}

export default App;
