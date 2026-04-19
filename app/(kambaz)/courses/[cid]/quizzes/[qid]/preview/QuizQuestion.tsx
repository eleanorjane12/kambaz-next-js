/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as client from "../../../../client";
import { v4 as uuidv4 } from "uuid";

export default function QuizQuestion() {

  const { qid } = useParams();
  const router = useRouter();
  const [questions, setQuestions] = useState<any[]>([]);


  

  const addQuestion = () => {
    setQuestions([...questions, {
      _id: uuidv4(),
      type: "multiple_choice",
      title: "New Question",
      points: 1,
      question: "",
      choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: "Option 1",
      editing: true,
    }]);
  };

    const fetchQuestion = async () => {
      if (qid && qid !== "new") {
         const data = await client.findQuestionsForQuiz(qid as string);
        if (data) setQuestions(data);
      } 
  };
  
    useEffect(() => {
      fetchQuestion();
    }, [qid]);
    
    return (
        <div className="border-grey mt-5">
            {questions.map((question: any) => (
  <div key={question._id} className="wd-lesson p-3 ps-1 d-flex align-items-center" >
    <span> {question.question}</span>

    </div>

))}
     </div>
        

    );
  



}