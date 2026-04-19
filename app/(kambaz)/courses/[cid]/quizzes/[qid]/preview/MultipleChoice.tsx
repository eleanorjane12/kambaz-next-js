/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FormCheck } from "react-bootstrap";


export default function MultipleChoiceQuestion({ question, index }: { question: any; index: number }) {
    const [selected, setSelected] = useState<string | null>(null);

  return (
  <div key={question._id} className="p-3 "> 
    <div className="fill-gray"> 
        <span>({index + 1}) {question.title} </span>
    </div>
    <div> {question.questionText} </div>
    {question.choices.map((option: any) => (
    <div key={option} className="p-3 "> 
    <div className="fill-gray"> 

    <FormCheck type="radio" 
    name={question._id} label={option} checked={selected === option} 
    onChange={() => setSelected(option === selected ? null : option)}/>
    </div>
    
    </div>
  ))}

    </div>
    
  );
}