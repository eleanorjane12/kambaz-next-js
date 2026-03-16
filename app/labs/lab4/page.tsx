"use client"
import Link from "next/link";
import store from "./store";
import { Provider } from "react-redux";


import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import PassingDataOnEvent from "./PassingDataOnEvent"; 
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./redux/page";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
      <ReduxExamples/>
      <hr />
     <Link href="./lab4/react-context">React Context Examples</Link>
      <ClickEvent />
      <PassingDataOnEvent />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />  
      <ChildStateComponent counter={111} setCounter={() => {}} />
      <PassingFunctions theFunction={sayHello} />
      <hr />
      <Link href="./lab4/zustand">Zustand Examples</Link>
    </div>
    </Provider>
);}
