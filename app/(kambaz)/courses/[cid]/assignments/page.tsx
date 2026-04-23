/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
import * as client from "../../client";
import AssignmentControls from "./assignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControlButtons from "./assignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentIndividualButtons from "./AssignmentIndividualButtons";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { BsGripVertical} from "react-icons/bs";
import { RootState } from "../../../store";
import { v4 as uuidv4 } from "uuid";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as { currentUser: { role: string } | null };
  const isFaculty = currentUser?.role === "FACULTY";
  const [assignments, setAssignments] = useState<any[]>([]);

  const fetchAssignments = async () => {
    const data = await client.findAssignmentsForCourse(cid as string);
    setAssignments(data);
  };
  const onCreateAssignment = async () => {
  if (!cid) return;
  const newAssignment = {
    _id : uuidv4(),
    title: "New Assignment",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  };
  const assignment = await client.createAssignmentForCourse(cid as string, newAssignment);
  setAssignments([...assignments, assignment]);
};

  const onDelete = async (assignmentId: string) => {
    if (window.confirm("Delete?")) {
      await client.deleteAssignment(assignmentId);
      setAssignments(assignments.filter((a) => a._id !== assignmentId));
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);
  

 return (
  <div id="wd-assignments" >
    

    <AssignmentControls onCreateAssignment={onCreateAssignment} isFaculty={isFaculty} />
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
                      deleteAssignment={(id) => onDelete(id)}/>
    </div>
    </ListGroupItem>
))}

  </ListGroup>

  </ListGroupItem>  
  </ListGroup>

   
  </div>
);}

