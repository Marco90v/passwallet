import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css';
import { AuthProvider, FirestoreProvider, useFirebaseApp, useSigninCheck } from 'reactfire';
import React, { Suspense, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';
import Loading from './templete/Loading';

function App() {
  const app = useFirebaseApp();
  const auth = getAuth(app);


  return(
    <AuthProvider sdk={auth}>
      <Suspense fallback={<Loading />}>
        <Container fluid>
          <Row className="justify-content-center">
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
    const [state, setState] = useState(true);

    return(status === 'loading' ? <Loading /> : 
      signInCheckResult.signedIn === true ? <FirestoreProvider sdk={firestoreInstance}> <Dashboard/> </FirestoreProvider> :
        <Col xs="12" lg="6"> { state ? <SignIn  setState={setState} /> : <CreateAccount setState={setState} /> } </Col>
    );
  }


export default App;
