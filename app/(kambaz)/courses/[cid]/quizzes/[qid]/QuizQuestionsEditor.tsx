/* eslint-disable react-hooks/set-state-in-effect */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import * as client from "../../../client";
import { v4 as uuidv4 } from "uuid";
import MultipleChoiceEditor from "./questions/MultipleChoiceEditor";
import TrueFalseEditor from "./questions/TrueFalseEditor";
import FillBlanksEditor from "./questions/FillBlanksEditor";

export default function QuizQuestionsEditor() {
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
  

  const totalPoints = quiz.questions.reduce((sum: number, q: any) => sum + (q.points || 0), 0);

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



const updateQuestion = (id: string, updates: any) => {
  setQuiz({
    ...quiz,
    questions: quiz.questions.map((q: any) => q._id === id ? { ...q, ...updates } : q)
  });
};

const deleteQuestion = (id: string) => {
  setQuiz({
    ...quiz,
    questions: quiz.questions.filter((q: any) => q._id !== id)
  });
};

const onSave = async () => {
  if (qid && qid !== "new") {
    await client.updateQuiz(quiz);
  } else {
    await client.createQuiz(cid as string, quiz);
  }
  router.push(`/courses/${cid}/quizzes`);
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
    <div id="wd-quiz-questions-editor" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Total Points: {totalPoints}</h5>
        <button className="btn btn-secondary" onClick={addQuestion}>
          <FaPlus className="me-2" /> New Question
        </button>
      </div>

      {quiz.questions.map((q: any) => (
        <div key={q._id} className="border rounded p-3 mb-3">
          {q.editing ? (
            <div>
              <div className="d-flex gap-2 mb-3 align-items-center">
                <input className="form-control w-25" value={q.title}
                  onChange={(e) => updateQuestion(q._id, { title: e.target.value })}
                  placeholder="Question Title" />
                <select className="form-select w-25" value={q.type}
                  onChange={(e) => updateQuestion(q._id, { type: e.target.value })}>
                  <option value="multiple_choice">Multiple Choice</option>
                  <option value="true_false">True/False</option>
                  <option value="fill_in_blank">Fill in the Blank</option>
                </select>
                <div className="d-flex align-items-center gap-2">
                  <label>pts:</label>
                  <input className="form-control" style={{ width: "80px" }} type="number"
                    value={q.points}
                    onChange={(e) => updateQuestion(q._id, { points: Number(e.target.value) })} />
                </div>
              </div>

              {q.type === "multiple_choice" && (
                <MultipleChoiceEditor question={q}
                  onChange={(updated: any) => updateQuestion(q._id, updated)} />
              )}

              {q.type === "true_false" && (
                <TrueFalseEditor question={q}
                  onChange={(updated: any) => updateQuestion(q._id, updated)} />
              )}

              {q.type === "fill_in_blank" && (
                <FillBlanksEditor question={q}
                  onChange={(updated: any) => updateQuestion(q._id, updated)} />
              )}


              <div className="d-flex justify-content-end gap-2 mt-3">
                <button className="btn btn-danger btn-sm"
                  onClick={() => deleteQuestion(q._id)}>Delete</button>
                <button className="btn btn-secondary btn-sm"
                  onClick={() => updateQuestion(q._id, { editing: false })}>Cancel</button>
                <button className="btn btn-primary btn-sm"
                  onClick={() => updateQuestion(q._id, { editing: false })}>Save</button>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <b>{q.title}</b> — {q.points} pts
                <div className="text-muted small">
                  {q.type.replace("_", " ")} | {q.question}
                </div>
              </div>
              <button className="btn btn-outline-secondary btn-sm"
                onClick={() => updateQuestion(q._id, { editing: true })}>Edit</button>
            </div>
          )}
        </div>
      ))}

      <hr className="border border-1 border-dark" />
      <div className="d-flex gap-2">
        <button className="btn btn-secondary"
          onClick={() => router.push(`/courses/${cid}/quizzes`)}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
}