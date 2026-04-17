"use client"
import { RootState } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FormLabel, FormControl, Row, Col, FormSelect, FormCheck, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setQuizzes } from "../../quizzes/reducer";
import * as client from "../../../client";
import { v4 as uuidv4 } from "uuid";


export default function QuizDetailsEditor() {
    const { cid } = useParams();
    const { qid } = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer as any);
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
    const [quiz, setQuiz] = useState<any>({
    _id: uuidv4(),
    quizType: "Graded Quiz",
    points: 0,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    howManyAttempts: 1,
    showCorrectAnswers: "",
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: "",
    availableDate: "",
    untilDate: "",
    published: false,
  });
  

  const fetchQuiz = async () => {
      if (qid && qid !== "new") {
         const data = await client.findQuizById(qid as string);
        if (data) setQuiz(data);
      } 
  };


  useEffect(() => {
    fetchQuiz();
  }, [qid]);


const onSave = async () => {
    await client.updateQuiz(quiz);
    dispatch(setQuizzes(quizzes.map((q: any) =>
      q._id === quiz._id ? quiz : q
    )));
  
};

      const onUpdateQuiz = async (quiz: any) => {
      await client.updateQuiz(quiz);
      const newQuizzes = quizzes.map((q: any) => q._id === quiz._id ? quiz : q );
      dispatch(setQuizzes(newQuizzes));
      
    };


 return (
    <div  id="wd-assignment-editor"> 
        <div key={quiz._id}>
    <FormLabel> Quiz Name </FormLabel>
    <FormControl type="text" value={quiz.title}  onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}/>
     <br/>  
    <FormControl as="textarea" style={{ height: "300px" }} value={quiz.description}  onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}/> 
    <br/>
    <br/>
    
    <div id="wd-assignment-details">
    <Row className="mb-3" >
       <FormLabel column sm={2}> Points </FormLabel>
       <Col sm={10}>
           <FormControl type="number" value={quiz.points} onChange={(e) => setQuiz({ ...quiz, points: e.target.value })} />
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

    <Row className="mb-3" > 
    <FormLabel column sm={2}> Asssign </FormLabel>
     <Col sm={10}>
        <div className="mb-3 wd-border-gray p-3" >
           <FormLabel> Assign to </FormLabel>
           <FormControl type="text" defaultValue="Everyone"/> <br/>
            <FormLabel> Due </FormLabel>
            <FormControl type="date" value={quiz.dueDate} id="wd-due-date-picker" onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })} />

           <Row className="mt-3 mb-3">
            <Col>
            <FormLabel> Available from </FormLabel>
            <FormControl type="date" value={quiz.availableDate} id="wd-available-from-date-picker" onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })}/>
            </Col>
            <Col>
            <FormLabel> Until </FormLabel>
            <FormControl type="date" defaultValue={quiz.untilDate} id="wd-until-date-picker"/>
            </Col>
           </Row>

         </div>
        </Col> 
    </Row>
    

    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-quiz" href={`/courses/${cid}/quizzes`} >
       Cancel
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-quiz" href={`/courses/${cid}/quizzes`} onClick={() => onSave()}>
       Save
     </Button>
    
    
    </div>
    </div>


    </div>

);
    
}

