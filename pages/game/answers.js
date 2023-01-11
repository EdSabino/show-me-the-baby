import axios from "axios";
import { useState } from "react";

function Answers(props) {
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [points, setPoints] = useState(null);

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

      setPoints(response.data.points);
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
    return <div className="column" style={{ padding: 10 }}>
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
      {Object.values(correctAnswers).length > 0 ? <div style={{ fontSize: '0.7rem', color: '#0ae50a', fontWeight: 'bold' }}>{correctAnswers[`id-${answer.id}`].reason}</div> : ''}
    </div>
  }

  return (<div style={{
    display: props.actualPath === 'answers' ? 'block' : 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    textAlign: 'center',
  }}>
    <img style={{
      height: '100%',
      width: 'auto',
    }} src="signs.png" />
    {
      !!points && <div style={{
        textAlign: 'left',
        position: 'absolute',
        width: '39%',
        top: '14%',
        left: '12%',
        color: 'white'
      }}>
        <h3 className="title" style={{ marginBottom: '0' }}>Pontos: {points}</h3>
      </div>
    }
    <div style={{
      textAlign: 'left',
      position: 'absolute',
      width: '39%',
      top: '14%',
      left: '56%',
      color: 'white'
    }}>
      <h3 className="title" style={{ marginBottom: '0' }}>Respostas</h3>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'white',
        marginBottom: '15px'
      }}></div>
      <div style={{
        width: '100%',
        overflowY: 'auto',
        height: '70vh',
        scrollbarWidth: 'thin',

      }}>
        <form onSubmit={handleSubmit}>
          {buildAnswers()}
          <button type="submit" className="button" style={{ marginTop: 'auto'}}>Continuar</button>
        </form>
      </div>
    </div>
  </div>);
}

export default Answers;
