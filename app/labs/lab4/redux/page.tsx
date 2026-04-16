"use client"
import { Provider } from "react-redux";
import HelloRedux from "./hello";
import TodoForm from "./todos/TodoForm";
import store from "../store";
export default function ReduxExamples() {
 return (
  <Provider store={store}>
   <div>
    
     <h2>Redux Examples</h2>
     <HelloRedux />
     <TodoForm />

   </div>
   </Provider>
 );
}
