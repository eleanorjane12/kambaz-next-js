/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as client from "../../../../client";

import { RootState } from "../../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "./reducer";

export default function QuizQuestion() {

  const { qid } = useParams();
  const dispatch = useDispatch();
  const { questions } = useSelector((state: RootState) => state.questionsReducer);
  
  


    const fetchQuestions = async () => {
      if (qid && qid !== "new") {
         const data = await client.findQuestionsForQuiz(qid as string);
         console.log("questions data:", data);
        if (data) dispatch(setQuestions(data));
      } 
  };
  
    useEffect(() => {
      fetchQuestions();
    }, [qid]);
    
    return (
    <div> 
       

        </div>);
}
        


  


