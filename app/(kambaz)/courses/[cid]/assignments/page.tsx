import Link from "next/link";

import AssignmentControls from "./assignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../modules/LessonControlButtons";
import ModuleControlButtons from "../modules/ModuleControlButtons";
import AssignmentControlButtons from "./assignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";


export default function Assignments() {
 return (
  <div id="wd-assignments">
    <AssignmentControls />

    <ListGroup className="rounded-0" id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons />
      </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" /> 
          <MdOutlineAssignment className="me-2 fs-3 text-success" /> 
           <div className="d-flex flex-column">
             <Link href="/courses/1234/assignments/124"
              className="text-decoration-none text-dark">
              <span className="fs-4">A1</span>
              <div className="fs-6 text-muted"> <span className="text-danger">Multiple modules </span>
              <span>| <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100</span></div>
              </Link>
            </div>
          <div className="ms-auto">
          <LessonControlButtons />
          </div>
      </ListGroupItem>
      <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" /> 
          <MdOutlineAssignment className="me-2 fs-3 text-success" /> 
           <div className="d-flex flex-column">
              <Link href="/courses/1234/assignments/125"
              className="text-decoration-none text-dark">
              <span className="fs-4">A2</span>
              <div className="fs-6 text-muted"> <span className="text-danger">Multiple modules </span>
              <span>| <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100</span></div>
              </Link>
            </div>
          <div className="ms-auto">
          <LessonControlButtons />
          </div>
      </ListGroupItem>

      <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" /> 
          <MdOutlineAssignment className="me-2 fs-3 text-success" /> 
           <div className="d-flex flex-column">
              <Link href="/courses/1234/assignments/126"
              className="text-decoration-none text-dark">
              <span className="fs-4">A3</span>
              <div className="fs-6 text-muted"> <span className="text-danger">Multiple modules </span>
              <span>| <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100</span></div>
              </Link>
            </div>
          <div className="ms-auto">
          <LessonControlButtons />
          </div>
      </ListGroupItem>
        
        
      </ListGroup>
    </ListGroupItem>
   
  </ListGroup>

   
  </div>
);}
