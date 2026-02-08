import { FormLabel,  FormControl, Col, Row, FormSelect, Form, FormGroup, FormCheck, InputGroup, Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function AssignmentEditor() {
 return (
    <div id="wd-assignment-editor"> 
    <FormLabel> Assignment Name </FormLabel>
    <FormControl type="text" defaultValue="A1 - ENV + HTML" />
     <br/> 
    <FormControl as="textarea" style={{ height: "300px" }} defaultValue="This assignment is available online. Submit a link to the landing page
    of your Web application eunning on Netlify. The landing page should include the following: your full name and section Links to each of the lab 
    assignments Link to the Kanbaz application Links to all relevant source code repositories The Kanbas application should include a link to naviagate
    back to the landing page." /> 
    <br/>
    <br/>
    
    <div id="wd-assignment-details">
    <Row className="mb-3" >
       <FormLabel column sm={2}> Points </FormLabel>
       <Col sm={10}>
           <FormControl type="number" defaultValue="100" />
       </Col>
   </Row>
    
    <Row className="mb-3" > 
       <FormLabel column sm={2}> Assignment Group </FormLabel>
       <Col sm={10}>
    <FormSelect>
     <option value="0" defaultChecked>ASSIGNMENTS</option>
     <option value="1">QUIZZES</option>
     <option value="2">EXAMS</option>
     <option value="3">PROJECTS</option>
  </FormSelect>
    </Col>
  </Row>

   <Row className="mb-3" > 
    <FormLabel column sm={2}> Display Grade As </FormLabel>
        <Col sm={10}>
        <FormSelect>
            <option value="0" defaultChecked>Percentage</option>
            <option value="1">Fraction</option>
            <option value="2">Letter Grade</option>
        </FormSelect>
    </Col>
    </Row>

    <Row className="mb-3 " > 
    <FormLabel column sm={2}> Submission Type </FormLabel>
     <Col sm={10}>
        <div className="mb-3 wd-border-gray p-3" >
            <FormSelect className="mb-4" >
                <option value="0" defaultChecked>Online</option>
                <option value="1">In-Person</option>
            </FormSelect>
            Online Entry Options
            <FormCheck className="m-4" type="checkbox" defaultChecked={false} label="Text Entry"/>
            <FormCheck className="m-4" type="checkbox" defaultChecked={false} label="Website URL"/>
            <FormCheck className="m-4" type="checkbox" defaultChecked={false} label="Media Recordings"/>
            <FormCheck className="m-4" type="checkbox" defaultChecked={false} label="Student Annotation"/>
            <FormCheck className="m-4" type="checkbox" defaultChecked={false} label="File Upload"/>
        </div>
        </Col> 
    </Row>

    <Row className="mb-3" > 
    <FormLabel column sm={2}> Asssign </FormLabel>
     <Col sm={10}>
        <div className="mb-3 wd-border-gray p-3" >
           <FormLabel> Assign to </FormLabel>
           <FormControl type="text" defaultValue="Everyone"/> <br/>
            <FormLabel> Due </FormLabel>
            <FormControl type="date" defaultValue="2026-05-13" id="wd-due-date-picker"/>

           <Row className="mt-3 mb-3">
            <Col>
            <FormLabel> Available from </FormLabel>
            <FormControl type="date" defaultValue="2026-05-13" id="wd-due-date-picker"/>
            </Col>
            <Col>
            <FormLabel> Until </FormLabel>
            <FormControl type="date" id="wd-until-date-picker"/>
            </Col>
           </Row>

         </div>
        </Col> 
    </Row>
    
    
   

    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-assignment">
       Cancel
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment">
    
       Save
     </Button>
    
    
    </div>
    </div>

);}