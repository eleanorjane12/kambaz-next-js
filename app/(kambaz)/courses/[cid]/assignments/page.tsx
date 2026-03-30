/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
import * as client from "../../client";
import { useParams } from "next/navigation";
import AssignmentControls from "./assignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../modules/LessonControlButtons";
import AssignmentControlButtons from "./assignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments } from "./reducer";
import { useState, useEffect } from "react";
import { RootState } from "../../../store";
import AssignmentIndividualButtons from "./AssignmentIndividualButtons";


export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  const [assignmentName, setAssingmentName] = useState("");

  const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };
    const onCreateAssignmentForCourse = async () => {
      if (!cid) return;
      const newAssignment = { name: assignmentName, course: cid };
      const mod = await client.createAssignmentForCourse(cid as string, newAssignment);
      dispatch(setAssignments([...assignments, mod]));
    };
     const onRemoveAssignment = async (assignmentId: string) => {
      await client.deleteAssignment(assignmentId);
      dispatch(setAssignments(assignments.filter((m: any) => m._id !== assignmentId)));
    };

    
    useEffect(() => {
    fetchAssignments();
  }, []);
  

 return (
  <div id="wd-assignments" >
    <AssignmentControls />
    <ListGroup className="rounded-0" id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons  />
      </div>
      
<ListGroup className="rounded-0">
       {assignments.map((assignment: any) => (
  <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1 d-flex align-items-center" >
    <BsGripVertical className="me-2 fs-3" />
    <MdOutlineAssignment className="me-2 fs-3 text-success" />

    <div className="d-flex flex-column">
      <Link href={`/courses/${cid}/assignments/${assignment._id}`}
        className="text-decoration-none text-dark" >

        <span className="fs-4">{assignment.title} </span>
        <div className="fs-6 text-muted">
          <span className="text-danger">Multiple modules </span>
          <span>| <b>Not available until</b> {assignment.available} | <b>Due</b> {assignment.due} | {assignment.pts}</span>
        </div>
      </Link>

    </div>

    <div className="ms-auto">
      <AssignmentIndividualButtons assignmentId={assignment._id}
                      deleteAssignment={(id) => onRemoveAssignment(id)}/>
    </div>
    </ListGroupItem>
))}

  </ListGroup>

  </ListGroupItem>  
  </ListGroup>

   
  </div>
);}

