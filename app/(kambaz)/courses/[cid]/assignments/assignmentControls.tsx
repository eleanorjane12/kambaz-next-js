import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "next/navigation";


export default function AssignmentControls({onCreateAssignment, isFaculty }: { onCreateAssignment: () => void; isFaculty: boolean; } ) {
  const { cid } = useParams();
 

    return (
        <div id="wd-assignments">
   <Row> 
    <Col>  
    <InputGroup>
    <InputGroupText> <CiSearch className="position-relative me-2" /> </InputGroupText>
    <FormControl type="search" placeholder="Search..." />
  </InputGroup>
    </Col>

      {isFaculty && (
    <Col>
    <Col> 
  <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment" onClick={() => onCreateAssignment()}>
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
     )}
    </Row>

    </div>
);}