/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const initialState = {
  questions: [],
};
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addQuestion: (state, { payload: question }) => {
      const newQuestion: any = {
        _id: uuidv4(),
        questionText: question.name,
        quiz: question.quizId,
      };
      state.questions = [...state.questions, newQuestion] as any;
    },
    deleteQuestion: (state, { payload: quizId }) => {
      state.questions = state.questions.filter(
        (q: any) => q._id !== quizId);
    },
    updateQuestion: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? question : q
      ) as any;
    },
    editQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === questionId ? { ...q, editing: true } : q
      ) as any;
    },
  },
});
export const { addQuestion, deleteQuestion, updateQuestion, editQuestion, setQuestions } =
  questionsSlice.actions;
export default questionsSlice.reducer;

