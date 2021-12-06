import firebase from './function/firebase';
import { browserSessionPersistence, getAuth, onAuthStateChanged, setPersistence, signOut } from '@firebase/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from "react-bootstrap";
import { ImSpinner2 } from "react-icons/im";

import { useState } from "react";
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
firebase();

function App() {

  // firebase();
  // const [sesion, setsesion] = useState(localStorage.getItem("sesion") ? true : false);
  const [sesion, setSesion] = useState(undefined);
  const [state, setstate] = useState(true);
  // console.log(sesion);

  const auth = getAuth();

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     // console.log(uid);
  //     setSesion(true);
  //   } else {
  //     // console.log("sin sesion");
  //     setSesion(false);
  //   }
  // });

  // const auth = getAuth();
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  //   console.log("sesion cerrada");
  // }).catch((error) => {
  //   // An error happened.
  //   console.log("Error al cerrar");
  // });

  const elementos = () => {
    switch (sesion) {
      case undefined:
        return (
          <Col xs={{ span: 6, offset: 5 }}>
            <ImSpinner2 className="spinnerIni" />
          </Col>
        )
      case false:
        return (
          <Col xs lg="6">
            {state ? <SignIn setstate={setstate} /> : <CreateAccount setstate={setstate} />}
          </Col>
        );
      case true:
        return (
          <Col xs lg="12">
            <h1>Aqui dashboar</h1>
          </Col>
        )
      default:
        break;
    }
  }
 

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        {elementos()}
      </Row>
    </Container>
  );
}

export default App;
