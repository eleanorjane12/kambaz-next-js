/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FormLabel,  FormControl, Col, Row, FormSelect, FormCheck, Button } from "react-bootstrap";
import * as db from "../../../../database";
import { useParams } from "next/navigation";

export default function AssignmentEditor() {
    const { cid } = useParams();
    const { aid } = useParams();
    const assignments = db.assignments;
 return (
    <div  id="wd-assignment-editor"> 
    {assignments.filter((assignment: any) => assignment._id === aid && assignment.course === cid).map((assignment: any) => (
        <div key={assignment._id}>
    <FormLabel> Assignment Name </FormLabel>
    <FormControl type="text" defaultValue={assignment.title} />
     <br/> 
    <FormControl as="textarea" style={{ height: "300px" }} defaultValue={assignment.description} /> 
    <br/>
    <br/>
    
    <div id="wd-assignment-details">
    <Row className="mb-3" >
       <FormLabel column sm={2}> Points </FormLabel>
       <Col sm={10}>
           <FormControl type="number" defaultValue={assignment.pts} />
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
            <FormControl type="date" defaultValue={assignment.due} id="wd-due-date-picker"/>

           <Row className="mt-3 mb-3">
            <Col>
            <FormLabel> Available from </FormLabel>
            <FormControl type="date" defaultValue={assignment.availableFrom} id="wd-available-from-date-picker"/>
            </Col>
            <Col>
            <FormLabel> Until </FormLabel>
            <FormControl type="date" defaultValue={assignment.due} id="wd-until-date-picker"/>
            </Col>
           </Row>

         </div>
        </Col> 
    </Row>
    

    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-assignment" href={`/courses/${cid}/home`}>
       Cancel
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment" href={`/courses/${cid}/home`}>
    
       Save
     </Button>
    
    
    </div>
    </div>
    ))}

    </div>

);}