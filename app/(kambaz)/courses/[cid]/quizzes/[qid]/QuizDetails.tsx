/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as client from "../../../client";
import { RootState } from "../../../../store";
import { Button, Col, Row } from "react-bootstrap";


export default function QuizDetails() {
    const { cid } = useParams();
    const { qid } = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer as any);
    const router = useRouter();
    const isFaculty = currentUser?.role === "FACULTY";
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

const [attempts, setAttempts] = useState<any[]>([]);

const fetchAttempts = async () => {
  if (qid && currentUser?._id) {
    const data = await client.findAttemptsForQuizForStudent(qid as string, currentUser._id);
    if (data) setAttempts(data);
  }
};


  useEffect(() => {
    fetchQuiz();
    fetchAttempts();
  }, [qid]);



  if (!isFaculty) {
    return (
      <div className="p-5">
        <h2>{quiz.title}</h2>
        <hr/>
        <Row>
          <Col>
            <span>Total Points: {quiz.points}</span><br/>
          </Col>
          <Col>
            <span>Time Limit: {quiz.timeLimit} minutes</span><br/>
          </Col>
           <Col>
            <span>Multiple Attempts Allowed: {quiz.multipleAttempts ? "Yes" : "No"} </span><br/>
          </Col>
          <Col>
            <span>How Many Attempts: {quiz.howManyAttempts}</span><br/>
          </Col>
        </Row>
        <Row> 
        {attempts.length > 0 && (
        <div className="mt-4">
          <h5>Past Attempts</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Attempt</th>
                <th>Date Taken</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map((attempt: any) => (
                <tr key={attempt._id}>
                  <td>Attempt {attempt.attemptNumber}</td>
                  <td>{new Date(attempt.dateTaken).toLocaleDateString()}</td>
                  <td>{attempt.score} / {quiz.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </Row>
        <hr/>
        <p>{quiz.description}</p>
        
        <p><Button className="btn btn-danger mt-3 justify-content-center" onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/preview`)}>Start Quiz</Button></p>
      </div>
    );
  } else {
  return (
    <div className="p-4">
      <div className="d-flex justify-content-center gap-2 mb-4">
        <button onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/preview`)}
          className="btn btn-secondary">Preview</button>
        <button onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/quiz-editor`)}
          className="btn btn-secondary">Edit</button>
      </div>

      <hr />

      <table className="table">
        <tbody>
            <tbody>
                <th>Quiz Title</th>
                <td>{quiz.title}</td> 
            </tbody>
            <tr>
                <th>Quiz Type</th>
                <td>{quiz.quizType}</td>
            </tr>
            <tr>
                <th>Quiz Description</th>
                <td>{quiz.description}</td>
            </tr>
            <tr>
                <th>Points</th>
                <td>{quiz.points}</td>
            </tr>
            <tr>
                <th>Assignment Group</th>
                <td>{quiz.assignmentGroup}</td>
            </tr>
            <tr>
                <th>Shuffle Answers</th>
                <td>{quiz.shuffleAnswers ? "Yes" : "No"}</td>
            </tr>
            <tr>
                <th>Time Limit (minutes)</th>
                <td>{quiz.timeLimit}</td>
            </tr>
            <tr>
                <th>Multiple Attempts Allowed</th>
                <td>{quiz.multipleAttempts ? "Yes" : "No"}</td>
            </tr>
            {quiz.multipleAttempts && (
              <tr>
                  <th>Number of Attempts Allowed</th>
                  <td>{quiz.howManyAttempts}</td>
              </tr>
            )}
            <tr>    
                <th>Show Correct Answers</th>
                <td>{quiz.showCorrectAnswers}</td>
            </tr>
            <tr>
                <th>Access Code</th>
                <td>{quiz.accessCode || "None"}</td>
            </tr>
            
            <tr>
                <th>One Question at a Time</th>
                <td>{quiz.oneQuestionAtATime ? "Yes" : "No"}</td>
            </tr>
            <tr>
                <th>Webcam Required</th>
                <td>{quiz.webcamRequired ? "Yes" : "No"}</td>
            </tr>
            <tr>
                <th>Lock Questions After Answering</th>
                <td>{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</td>
            </tr>
            <tr>
                <th>Available Date</th>
                <td>{(quiz.availableDate?.slice(0, 10) ?? "") || "Not set"}</td>
            </tr>
            <tr>
                <th>Due Date</th>
                <td>{(quiz.dueDate?.slice(0, 10) ?? "") || "Not set"}</td>
            </tr>
            <tr>
                <th>Until Date</th>
                <td>{(quiz.untilDate?.slice(0, 10) ?? "") || "Not set"}</td>
            </tr>
            </tbody>
      </table>


      </div>

      
  );
  }
}