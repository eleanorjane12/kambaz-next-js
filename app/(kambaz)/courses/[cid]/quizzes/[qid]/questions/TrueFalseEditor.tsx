/* eslint-disable @typescript-eslint/no-explicit-any */
export default function TrueFalseEditor({ question, onChange }: { question: any; onChange: (q: any) => void }) {
    const tfDirections = "Enter your question and select if True or False is the correct answer.";

  return (
    <div>
      <p className="text-muted">{tfDirections}</p>
      <textarea className="form-control mb-3" rows={3} placeholder="Question text"
        value={question.question}
        onChange={(e) => onChange({ ...question, question: e.target.value })} />
      <label className="fw-bold mb-2">Answers:</label>
        <div className="form-check text-dark">
            <input className="form-check-input" type="radio" name={`tf-${question._id}`} id={`true-${question._id}`}
                checked={question.correctAnswer === "True"}
                onChange={() => onChange({ ...question, correctAnswer: "True" })} />
            <label className="form-check-label" htmlFor={`true-${question._id}`}>
                True
            </label>
        </div>
        <div className="form-check text-dark">
            <input className="form-check-input" type="radio" name={`tf-${question._id}`} id={`false-${question._id}`}
                checked={question.correctAnswer === "False"}
                onChange={() => onChange({ ...question, correctAnswer: "False" })} />
            <label className="form-check-label" htmlFor={`false-${question._id}`}>
                False
            </label>
        </div>
    </div>
  );
}