import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/reducer";
import modulesReducer from "./courses/[cid]/modules/reducer";
import accountReducer from "./account/reducer";
import assignmentsReducer from "./courses/[cid]/assignments/reducer";
import quizzesReducer from "./courses/[cid]/quizzes/reducer";
import questionsReducer from "./courses/[cid]/quizzes/[qid]/preview/reducer";
const store = configureStore({
 reducer: { coursesReducer, modulesReducer, accountReducer, assignmentsReducer, quizzesReducer, questionsReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;