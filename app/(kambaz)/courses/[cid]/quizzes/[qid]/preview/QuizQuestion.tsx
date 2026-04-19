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



export default function QuizQuestion() {

const { cid, qid } = useParams();
  const router = useRouter();


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
  

  const addQuestion = () => {
  const newQuestion = {
    _id: uuidv4(),
    type: "multiple_choice",
    title: "New Question",
    points: 1,
    question: "",
    choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 1",
    editing: true,
  };
  setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
};



const fetchQuiz = async () => {
  if (qid && qid !== "new") {
    const data = await client.findQuizById(qid as string);
    if (data) setQuiz({ ...data, questions: data.questions || [] });
  }
};

useEffect(() => {
  fetchQuiz();
}, [qid]);
    return (
        <div>     
        {quiz.questions.map((question: any, index: number) => (   
            <div key={question._id} className="p-3 mb-3 wd-border-gray">
                {question.type === "multiple_choice" && <MultipleChoiceQuestion question={question} index={index} />}
                {question.type === "true_false" && <TrueFalseQuestion question={question} index={index} />}
                {question.type === "fill_blanks" && <FillBlanksQuestion question={question} index={index} />}
            </div>
  ))}
        </div>
    );
}  

  


