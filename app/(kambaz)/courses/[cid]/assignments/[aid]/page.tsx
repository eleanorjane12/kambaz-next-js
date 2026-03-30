/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FormLabel, FormControl, Col, Row, FormSelect, FormCheck, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../store";
import { setAssignments } from "../../assignments/reducer";
import * as client from "../../../client";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";


export default function AssignmentEditor() {
    const { cid } = useParams();
    const { aid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const existingAssignment = assignments.find((a: any) => a._id === aid);
    const [assignment, setAssignment] = useState<any>({
    _id: uuidv4(),
    title: "New Assignment",
    description: "",
    pts: 100,
    due: "",
    available: "",
    course: cid,
  });

  useEffect(() => {
    const existing = assignments.find((a: any) => a._id === aid);
    if (existing) setAssignment(existing);
  }, [assignments]);


const onSave = async () => {
    const existing = assignments.find((a: any) => a._id === aid);
  if (existing) {
    await client.updateAssignment(assignment);
    dispatch(setAssignments(assignments.map((a: any) =>
      a._id === assignment._id ? assignment : a
    )));
  } else {
    const newAssignment = await client.createAssignmentForCourse(cid as string, assignment);
    dispatch(setAssignments([...assignments, newAssignment]));
  }
};

      const onUpdateAssignment = async (assignment: any) => {
      await client.updateAssignment(assignment);
      const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a );
      dispatch(setAssignments(newAssignments));
      
    };
    const onCreateAssignmentForCourse = async () => {
          if (!cid) return;
          const newAssignment = { name: assignment, course: cid };
          const mod = await client.createAssignmentForCourse(cid as string, newAssignment);
          dispatch(setAssignments([...assignments, mod]));
        };

 return (
    <div  id="wd-assignment-editor"> 
        <div key={assignment._id}>
    <FormLabel> Assignment Name </FormLabel>
    <FormControl type="text" value={assignment.title}  onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}/>
     <br/> 
     <FormLabel> Assignment ID </FormLabel>
    <FormControl type="text" value={assignment._id}  onChange={(e) => setAssignment({ ...assignment, _id: e.target.value })}/>
     <br/> 
    <FormControl as="textarea" style={{ height: "300px" }} value={assignment.description}  onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}/> 
    <br/>
    <br/>
    
    <div id="wd-assignment-details">
    <Row className="mb-3" >
       <FormLabel column sm={2}> Points </FormLabel>
       <Col sm={10}>
           <FormControl type="number" value={assignment.pts} onChange={(e) => setAssignment({ ...assignment, pts: e.target.value })} />
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
            <FormControl type="date" value={assignment.due} id="wd-due-date-picker" onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />

           <Row className="mt-3 mb-3">
            <Col>
            <FormLabel> Available from </FormLabel>
            <FormControl type="date" value={assignment.availableFrom} id="wd-available-from-date-picker" onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}/>
            </Col>
            <Col>
            <FormLabel> Until </FormLabel>
            <FormControl type="date" defaultValue={assignment.due} id="wd-until-date-picker"/>
            </Col>
           </Row>

         </div>
        </Col> 
    </Row>
    

    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-assignment" href={`/courses/${cid}/assignments`} >
       Cancel
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment" href={`/courses/${cid}/assignments`} onClick={() => onSave()}>
       Save
     </Button>
    
    
    </div>
    </div>


    </div>

);}