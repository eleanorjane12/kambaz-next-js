/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";
import { addQuiz, editQuiz, updateQuiz, deleteQuiz, setQuizzes } from "./reducer";
import { FaPlus } from "react-icons/fa6";


export default function Quizzes() {
const { cid } = useParams();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);

  const [quizName, setQuizName] = useState("");

  const fetchQuizzes = async () => {
      const quizzes = await client.findQuizzesForCourse(cid as string);
      dispatch(setQuizzes(quizzes));
    };
    const onCreateQuizForCourse = async () => {
      // if (!cid) return;
      // const newAssignment = { name: assignmentName, course: cid };
      // const mod = await client.createAssignmentForCourse(cid as string, newAssignment);
      // dispatch(setAssignments([...assignments, mod]));
    };
     const onRemoveQuiz = async (quizId: string) => {
      // await client.deleteQuiz(quizId);
      // dispatch(setQuizzes(quizzes.filter((q: any) => q._id !== quizId)));
    };

    const [name, setName] = useState("");
      const filterQuizzesByName = async (name: string) => {
         setName(name);
         if (name) {
           const quizzes = await client.findQuizzesByPartialName(name);
          setQuizzes(quizzes);
         } else {
           fetchQuizzes();
         }
      };

    
    useEffect(() => {
    fetchQuizzes();
  }, []);
  

 return (
  <div id="wd-quizzes" >
    <div id="headerbar">
      <FormControl onChange={(e) => filterQuizzesByName(e.target.value)} placeholder="Search quizzes"
             className="float-start w-25 me-2 ms-2 mt-2 wd-filter-by-name" />
             <Button variant="danger" size="lg" className="me-4 float-end" id="wd-add-quiz-btn" >
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Quiz
     </Button>
     <br /><br />
    </div>
 <hr className="me-4"/>
    <div>
    <ListGroup className="rounded-0 me-4 " id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> Quizzes 
      </div>
      
<ListGroup className="rounded-0">
       {quizzes.map((quiz: any) => (
  <ListGroupItem key={quiz._id} className="wd-lesson p-3 ps-1 d-flex align-items-center" >
    <BsGripVertical className="me-2 fs-3" />
    <MdOutlineAssignment className="me-2 fs-3 text-success" />

    <div className="d-flex flex-column">
      <Link href={`/courses/${cid}/quizzes/${quiz._id}`}
        className="text-decoration-none text-dark" >

<span className="fs-4">{quiz.title}</span>
<div className="fs-6 text-muted">
  <span>
    <b>Available Until</b> {quiz.untilDate ? new Date(quiz.untilDate).toLocaleDateString() : "N/A"} |{" "}
    <b>Due</b> {quiz.dueDate ? new Date(quiz.dueDate).toLocaleDateString() : "N/A"} |{" "}
    {quiz.points} pts
  </span>
</div>
      </Link>

    </div>

    <div className="ms-auto">
      
    </div>
    </ListGroupItem>
))}

  </ListGroup>

  </ListGroupItem>  
  </ListGroup>
  </div>

   
  </div>
);
}

