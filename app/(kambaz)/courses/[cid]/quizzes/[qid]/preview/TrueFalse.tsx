/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FormCheck } from "react-bootstrap";


export default function TrueFalseQuestion({ question, index }: { question: any; index: number }) {
    const [selected, setSelected] = useState<string | null>(null);

  return (
  <div key={question._id} className="p-3 "> 
    <div className="fill-gray"> 
        <span>({index + 1}) {question.title} </span>
    </div>
    <div> {question.questionText} </div>

    <div key={question.options} className="p-3 "> 
    <div className="fill-gray"> 

    <FormCheck type="checkbox" 
    name={question._id} label="True" checked={selected === "True"} 
    onChange={() => setSelected("True")}/>
    <FormCheck type="checkbox" className="mt-2"
    name={question._id} label="False" checked={selected === "False"} 
    onChange={() => setSelected("False")}/>

    </div>
    
    </div>


    </div>
    
  );
}