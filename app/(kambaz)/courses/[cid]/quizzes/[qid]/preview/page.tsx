/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { RootState } from "../../../../../store";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as client from "../../../../client";
import { v4 as uuidv4 } from "uuid";
import QuizQuestion from "./QuizQuestion";

export default function QuizPreview() {
      const { cid } = useParams();
    const { qid } = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer as any);
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


    return(
      <div className="p-5">
        <h2>{quiz.title}</h2>
        <hr/>
            <div> 
            <QuizQuestion/>
            </div>
            

        
      </div>
    );

    

}