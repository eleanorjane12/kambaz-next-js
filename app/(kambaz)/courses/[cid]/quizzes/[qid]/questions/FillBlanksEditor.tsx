import { Row, Col } from "react-bootstrap";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FillBlanksEditor({ question, onChange }: { question: any; onChange: (q: any) => void }) {
    const fbDirections = "Enter your question text, then define all possible correct answers for the blank. \nStudents will see the question followed by a small text box to type their answer.";
    const answers: string[] = question.correctAnswers || [""];
  
    return (
    <div>
      <p className="text-muted">{fbDirections}</p>
      <textarea className="form-control mb-3" rows={3} placeholder="Question text"
        value={question.question}
        onChange={(e) => onChange({ ...question, question: e.target.value })} />
      <label className="fw-bold mb-2 text-dark">Answers:</label>
        {answers.map((answer: string, i: number) => (
        <Row key={i} className="mb-2 align-items-center text-dark" >
            <Col className="col-auto">Possible Answer:</Col>
          <Col className="col-md-4">
            <input className="form-control"
              value={answer}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[i] = e.target.value;
                onChange({ ...question, correctAnswers: newAnswers });
              }} />
          </Col>
          <Col xs="auto">
            <button className="btn btn-danger btn-sm"
              onClick={() => onChange({ ...question, correctAnswers: answers.filter((_, ci) => ci !== i) })}>
              ✕
            </button>
          </Col>
        </Row>
      ))}

<br/>
      <button className="btn btn-outline-secondary btn-md float-end"
        onClick={() => onChange({ ...question, correctAnswers: [...answers, ""] })}>
        + Add Another Answer
      </button>
      <br/>
      <br/>
    </div>
  );
}