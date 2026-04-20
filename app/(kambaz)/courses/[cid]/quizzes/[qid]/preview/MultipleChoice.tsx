/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FormCheck } from "react-bootstrap";


export default function MultipleChoiceQuestion({ question, onAnswer, index }: { question: any; onAnswer: (questionId: string, answer: string) => void; index: number }) {
    const [selected, setSelected] = useState<string | null>(null);

const handleSelect = (option: string) => {
    const newSelected = option === selected ? null : option;
    setSelected(newSelected);
    if (newSelected) onAnswer?.(question._id, newSelected);
  };

  return (
  <div key={question._id} className="p-3 "> 
    <div className="fill-gray"> 
        <span>({index + 1}) {question.title} </span>
    </div>
    <div> {question.questionText} </div>
    {question.choices.map((option: any) => (
    <div key={option} className=""> 
    <div className="fill-gray"> 
        <hr/>
    <FormCheck type="radio" 
    name={question._id} label={option} checked={selected === option} 
    onChange={() => handleSelect(option)}/>
    </div>
    
    </div>
  ))}

    </div>
    
  );
}