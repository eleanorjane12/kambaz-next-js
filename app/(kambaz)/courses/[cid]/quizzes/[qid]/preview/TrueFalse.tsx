/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FormCheck } from "react-bootstrap";


export default function TrueFalseQuestion({ question, onAnswer, index }: { question: any; onAnswer: (questionId: string, answer: string) => void; index: number }) {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (option: string) => {
    const newSelected = option === selected ? null : option;
    setSelected(newSelected);
    if (newSelected) onAnswer?.(question._id, newSelected);
  };

  return (
  <div key={question._id} className=""> 
    <div className="ms-3"> 
        <span>({index + 1}) {question.title} </span>
    </div>
    <div> {question.questionText} </div>

    <div key={question.options} className="p-3 "> 
    <div > 
<hr/>
    <FormCheck type="radio" 
    name={question._id} label="True" checked={selected === "True"} 
    onChange={() => handleSelect("True")}/>
    <hr/>
    <FormCheck type="radio" className="mt-2"
    name={question._id} label="False" checked={selected === "False"} 
    onChange={() => handleSelect("False")}/>

    </div>
    
    </div>


    </div>
    
  );
}