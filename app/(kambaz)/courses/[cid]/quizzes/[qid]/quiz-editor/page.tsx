"use client"
import { Tab, Tabs } from "react-bootstrap";
import QuizDetailsEditor from "../QuizDetailsEditor";
import QuizQuestionsEditor from "../QuizQuestionsEditor";

export default function QuizEditor() {
    return (
    <Tabs defaultActiveKey="Details" className="mb-3 text-danger">
  < Tab eventKey="Details" className="text-danger" title={"Details"}>
        <QuizDetailsEditor/>
    </Tab>
    <Tab eventKey="Questions" className="text-danger" title={"Questions"}>
        <QuizQuestionsEditor/>
    </Tab>
    </Tabs>
    )


}