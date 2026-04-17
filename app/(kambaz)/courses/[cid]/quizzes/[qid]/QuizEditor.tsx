"use client"
import { Tab, Tabs } from "react-bootstrap";
import QuizDetailsEditor from "./QuizDetailsEditor";

export default function QuizEditor() {
    return (
    <Tabs>
  <Tab className="text-danger" title={"Details"}>
    <QuizDetailsEditor/>
  </Tab>
  <Tab className="text-danger" title={"Questions"}>
    Questions
  </Tab>
  
</Tabs>
    )


}