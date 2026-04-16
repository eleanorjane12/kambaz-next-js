/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const initialState = {
  quizzes: [],
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: uuidv4(),
        lessons: [],
        name: quiz.name,
        course: quiz.course,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: moduleId }) => {
      state.quizzes = state.quizzes.filter(
        (m: any) => m._id !== moduleId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId ? { ...q, editing: true } : q
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;


/*
Quiz Type - Graded Quiz (default), Practice Quiz, Graded Survey, Ungraded Survey
Points - the sum of the points of all questions in the quiz
Assignment Group - Quizzes (default), Exams, Assignments, Project
Shuffle Answers - Yes (default) / No
Time Limit - 20 Minutes (default)
Multiple Attempts - No (default) / Yes
How Many Attempts - 1 (default). If Multiple Attempts is Yes, then can configure how many times the student can retake the quiz
Show Correct Answers - If and when correct answers are shown to students
Access Code - Passcode students need to type to access the quiz. Default is blank
One Question at a Time - Yes (default) / No
Webcam Required - No (default) / Yes
Lock Questions After Answering - No (default) / Yes
Due date - date the assignment is due
Available date - date assignment is available
Until date - date assignment is available until
*/