/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as client from "../../../../client";
import { v4 as uuidv4 } from "uuid";
import MultipleChoiceQuestion from "./MultipleChoice";
import FillBlanksQuestion from "./FillBlanks";
import TrueFalseQuestion from "./TrueFalse";
import { Button } from "react-bootstrap";



export default function QuizQuestion({ onAnswer }: { onAnswer: (questionId: string, answer: string) => void; lastAttempt: Record<string, string> | undefined }) {

const { cid, qid } = useParams();


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
    questions: [],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  


const fetchQuiz = async () => {
  if (qid && qid !== "new") {
    const data = await client.findQuizById(qid as string);
    if (data) setQuiz({ ...data, questions: data.questions || [] });
  }
};

    

useEffect(() => {
  fetchQuiz();
}, [qid]);

const currentQuestion = quiz.questions[currentIndex];

  if (!currentQuestion) {
    return (
    <div>
       End of quiz! Hit submit.
        </div>);

  }


    return (
        
        <div>    
         
        <div className="p-3 mb-3 wd-border-gray w-100">
        {currentQuestion.type === "multiple_choice" && 
          <MultipleChoiceQuestion question={currentQuestion} onAnswer={onAnswer} index={currentIndex} />}
        {currentQuestion.type === "true_false" && 
          <TrueFalseQuestion question={currentQuestion} onAnswer={onAnswer} index={currentIndex} />}
        {currentQuestion.type === "fill_in_blank" && 
          <FillBlanksQuestion question={currentQuestion} index={currentIndex} />}
      </div>
  <div className="d-flex justify-content-between mt-3 mb-3">
        <Button 
          className="btn-secondary flex-start" 
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}>
          Back
        </Button>
        
           <Button className="btn-danger" onClick={() => setCurrentIndex(currentIndex + 1)}>Next</Button>
        
      </div>
        </div>
    );
}  

  


