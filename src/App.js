import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from "react-bootstrap";

import React, { Suspense, useState } from "react";
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import { AuthProvider, FirestoreProvider, useFirebaseApp, useSigninCheck } from 'reactfire';
import { getAuth } from 'firebase/auth';
import Loading from './templete/Loading';
import Dashboard from './components/Dashboard';
import { getFirestore } from 'firebase/firestore';
// import cryptoJs from 'crypto-js';


function App() {

  /**
   * Las siguientes lineas son para tener como referencia el metodo usado para encriptar
   */

  // const arr = [];
  // for (let index = 0; index < 100; index++) {
  //   arr.push({
  //     "11111111111111":"qwertyuiop asdfghjklñ zxcvbnm,. !#$%&/()= 1234567890",
  //     "22222222222222":"qwertyuiop asdfghjklñ zxcvbnm,. !#$%&/()= 1234567890",
  //     "33333333333333":"qwertyuiop asdfghjklñ zxcvbnm,. !#$%&/()= 1234567890",
  //     "44444444444444":"qwertyuiop asdfghjklñ zxcvbnm,. !#$%&/()= 1234567890",
  //     "55555555555555":"qwertyuiop asdfghjklñ zxcvbnm,. !#$%&/()= 1234567890",
  //     "66666666666666":"qwertyuiop asdfghjklñ zxcvbnm,. !#$%&/()= 1234567890",
  //     "77777777777777":"qwertyuiop asdfghjklñ zxcvbnm,. !#$%&/()= 1234567890"
  //   });    
  // }

  // const encrypted = cryptoJs.AES.encrypt(JSON.stringify(arr), "123456789");
  // console.log(encrypted.toString().length);

  // const decrypted = cryptoJs.AES.decrypt(encrypted, "123456789");
  // console.log(decrypted.toString(cryptoJs.enc.Utf8).length);

  const app = useFirebaseApp();
  const auth = getAuth(app);

  return(
    <AuthProvider sdk={auth}>
      <Suspense fallback={<Loading />}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <ValidationSession />
          </Row>
        </Container>
      </Suspense>
    </AuthProvider>
  );

    
  }
  
  const ValidationSession = () => {
    const firestoreInstance = getFirestore(useFirebaseApp());
    const { status, data: signInCheckResult } = useSigninCheck();
    const [state, setstate] = useState(true);

    if (status === 'loading') {
      return <Loading />;
    }
  
    if (signInCheckResult.signedIn === true) {
      return(
        <FirestoreProvider sdk={firestoreInstance}>
          <Dashboard/>
        </FirestoreProvider>
      );
    } else {
      return (
        <Col xs lg="6">
          {state ? <SignIn setstate={setstate} /> : <CreateAccount setstate={setstate} />}
        </Col>
      );
    }
  }


export default App;
