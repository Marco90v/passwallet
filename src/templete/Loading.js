import Col from "react-bootstrap/Col";
import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
    return( <Col xs={{ span: 6, offset: 5 }}> <ImSpinner2 className="spinnerIni" /> </Col> );
}

export default Loading;