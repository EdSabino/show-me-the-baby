import axios from "axios";
import { useState } from "react";

function Answers(props) {
  const [correctAnswers, setCorrectAnswers] = useState({});

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formattedAnswers = props.answers.map(answer => ({
          answerId: answer.id,
          checked: !!event.target[`id-${answer.id}`].checked
        }));

      const response = await axios.post('/api/check', {
        caseId: props.caseId,
        answers: formattedAnswers
      });

      setCorrectAnswers(response.data.correctAnswers.reduce((prev, next) => {
        prev[`id-${next.id}`] = next;
        return prev;
      }, {}));
    } catch (e) {
      console.log(e);
    }
  }

  const buildAnswers = () => {
    const answers = [];
    for (let i = 0; i < props.answers.length; i = i + 2) {
      answers.push(
        <div className="columns" style={{ paddingLeft: '15px' }}>
          {buildAnswer(props.answers[i])}
          {props.answers[i + 1] ? buildAnswer(props.answers[i + 1]) : ''}
        </div>
      );
    }

    return <>{answers}</>
  }

  const buildAnswer = (answer) => {
    return <div className="column" style={{ border: '1px solid black', padding: 10 }}>
      <label className="checkbox">
        <input id={`id-${answer.id}`} type="checkbox" style={{ marginRight: '5px' }} />
        <span
          className="is-4"
          style={
            !correctAnswers?.[`id-${answer.id}`] || correctAnswers?.[`id-${answer.id}`]?.wasRight ? {} : {
              color: 'red'
            }
          }
        >{answer.description}</span>
      </label>
      {Object.values(correctAnswers).length > 0 ? <div style={{ fontSize: '0.7rem' }}>{correctAnswers[`id-${answer.id}`].reason}</div> : ''}
    </div>
  }

  return <div style={{ height: '100%'}}>
    <h1 className="title">Respostas</h1>
    <form onSubmit={handleSubmit}>
      {buildAnswers()}
      <button type="submit" className="button" style={{ marginTop: 'auto'}}>Continuar</button>
    </form>
  </div>
}

export default Answers;