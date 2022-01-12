import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaClipboard } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Inputs = ({input,setInput,disa,n_e,copiar}) => {

    const [hideShow,sethideShow] = useState(false);

    
    const recorrer = () =>{
        const arr = [];
        for (const k in input) arr.push(k);
        return arr;
    }

    const labelInputs = (e) => {
        switch (e) {
            case "AccNum":
                return "Account Number";
            case "CardNum":
                return "Card Number";
            case "ExpDate":
                return "Expiration Date";
            case "PasswordCard":
                return "Card Password";
            case "SecretPhr":
                return "Secret Phrase";
            default:
                return e;
        }
    }

    const changeState = (e) => e==="Password" ? (hideShow ? "text" : "password") : "text";
    
    return(
        <>{
            recorrer().map((e,i)=>{
                return(
                    e!== "type" && 
                    <Form.Group key={i} as={Row} className="mb-3" controlId={e}>
                        <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}><strong>{labelInputs(e)}</strong></Form.Label>
                        <Col sm={4}>
                            <InputGroup size="sm" >
                                {(n_e && e==="Password") && <InputGroup.Text id="basic-addon2" className="hideShow" style={{backgroundColor: "white"}} onClick={()=>sethideShow(t=>!t)}> {hideShow ? <AiFillEyeInvisible/> : <AiFillEye />} </InputGroup.Text>}
                                <Form.Control size="sm" type={changeState(e)} placeholder={labelInputs(e)} name={e} value={input[e]} onChange={(ele)=>{setInput(ele)}} disabled={disa} />
                                {n_e && <InputGroup.Text id="basic-addon2" className="clipboard" style={{backgroundColor: "purple"}} onClick={()=>copiar(input[e])}> <FaClipboard /> </InputGroup.Text>}
                            </InputGroup>
                        </Col>
                    </Form.Group>
                )
            })
        }</>
    );

}

export default Inputs;