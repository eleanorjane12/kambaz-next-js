import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";


export default function AssignmentControls() {
    return (
        <div id="wd-assignments">
   <Row> 
    <Col>  
    <InputGroup>
    <InputGroupText> <CiSearch className="position-relative me-2" /> </InputGroupText>
    <FormControl type="search" placeholder="Search..." />
  </InputGroup>
    </Col>

    <Col>
    <Col> 
  <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
  <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
    Assignment
  </Button>
  </Col>

  <Col>
  <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Group
    </Button>
    </Col>
    </Col>
    </Row>

    </div>
);}