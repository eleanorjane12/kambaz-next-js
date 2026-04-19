/* eslint-disable @typescript-eslint/no-explicit-any */
export default function MultipleChoiceEditor({ question, onChange }: { question: any; onChange: (q: any) => void }) {
    const mcqDirections = "Enter your question and multiple answers, then select one correct answer.";

  return (
    <div>
      <p className="text-muted">{mcqDirections}</p>
      <textarea className="form-control mb-3" rows={3} placeholder="Question text"
        value={question.question}
        onChange={(e) => onChange({ ...question, question: e.target.value })} />
      <label className="fw-bold mb-2">Choices:</label>

      {question.choices?.map((choice: string, i: number) => (
        <div key={i} className="d-flex align-items-center gap-2 mb-2">
          <input type="radio" name={`correct-${question._id}`}
            checked={question.correctAnswer === choice}
            onChange={() => onChange({ ...question, correctAnswer: choice })} />
          <input className="form-control" value={choice}
            onChange={(e) => {
              const newChoices = [...question.choices];
              newChoices[i] = e.target.value;
              onChange({ ...question, choices: newChoices });
            }} />
          <button className="btn btn-danger btn-sm"
            onClick={() => onChange({ ...question, choices: question.choices.filter((_: any, ci: number) => ci !== i) })}>
            ✕
          </button>
        </div>
      ))}
      <button className="btn btn-outline-secondary btn-sm"
        onClick={() => onChange({ ...question, choices: [...question.choices, "New Option"] })}>
        + Add Choice
      </button>
    </div>
  );
}