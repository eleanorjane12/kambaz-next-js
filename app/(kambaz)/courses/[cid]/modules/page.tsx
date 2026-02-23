/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client"
import { useParams } from "next/navigation";
import * as db from "../../../database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./modulesCOntrols"
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
   const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    {modules
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((module: any) => module.course === cid)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((module: any) => (
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons /> </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <ListGroupItem className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons /> </ListGroupItem>
                ))}</ListGroup>)}</ListGroupItem>))}</ListGroup>        
</div>
    </div>
);}
