import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaClipboard } from "react-icons/fa";

const Inputs = ({input,setInput,disa,n_e,copiar}) => {
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
    
    return(
        <>{
            recorrer().map((e,i)=>{
                return(
                    e!== "type" && 
                    <Form.Group key={i} as={Row} className="mb-3" controlId={e}>
                        <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>{labelInputs(e)}</Form.Label>
                        <Col sm={4}>
                            <InputGroup size="sm" >
                                <Form.Control size="sm" type="text" placeholder={labelInputs(e)} name={e} value={input[e]} onChange={(ele)=>{setInput(ele)}} disabled={disa} />
                                {n_e && <InputGroup.Text id="basic-addon2" onClick={()=>copiar(input[e])}> <FaClipboard /> </InputGroup.Text>}
                            </InputGroup>
                        </Col>
                    </Form.Group>
                )
            })
        }</>
    );

}

export default Inputs;