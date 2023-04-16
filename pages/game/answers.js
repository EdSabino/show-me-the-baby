import axios from "axios";
import { useEffect, useState } from "react";

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
        answers: formattedAnswers,
        gameId: parseInt(localStorage.getItem('gameId')),
      });

      setPoints(response.data.points);
      localStorage.setItem('points', response.data.points);
      setCorrectAnswers(response.data.correctAnswers.reduce((prev, next) => {
        prev[`id-${next.id}`] = next;
        return prev;
      }, {}));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setPoints(parseInt(localStorage.getItem('points') || '0'));
  }, []);

  const buildAnswers = () => {
    const answers = [];
    for (let i = 0; i < props.answers?.length || 0; i++) {
      answers.push(
        <div className="columns" style={{ maxWidth: '99%', paddingLeft: '2px'}}>
          {buildAnswer(props.answers[i], i)}
        </div>
      );
    }

    return <>{answers}</>
  }

  const buildCorrectAnswers = () => {
    const answers = [];
    for (let correctAnswer of Object.values(correctAnswers)) {
      answers.push(
        <div style={{ maxWidth: '99%', paddingLeft: '2px', marginBottom: '20px'}}>
          {answers.length + 1} - {correctAnswer.reason}<br />
        </div>
      );
    }

    return <>{answers}</>
  }

  const buildAnswer = (answer, i) => {
    return <div className="column" style={{ padding: 10 }}>
      <label className="checkbox">
        <input id={`id-${answer.id}`} type="checkbox" style={{ marginRight: '5px' }} />
        <span
          className={(!correctAnswers?.[`id-${answer.id}`] || correctAnswers?.[`id-${answer.id}`]?.wasRight) ? 'content' : 'content wrong'}
          dangerouslySetInnerHTML={{ __html: `${i + 1} - ${answer.description}`}} />
      </label>
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
    {/* {
      points === null ? props.children : <div style={{
        textAlign: 'left',
        position: 'absolute',
        width: '39%',
        top: '14%',
        left: '12%',
        color: 'white'
      }}>
        <h3 className="title" style={{ marginBottom: '0' }}>Pontos: {points}</h3>
      </div>
    } */}
    <div style={{
      textAlign: 'left',
      position: 'absolute',
      width: '39%',
      top: '8%',
      left: '5%',
      color: 'white'
    }}>
      <h3 className="title" style={{ marginBottom: '0' }}>Assinale as alternativas verdadeiras</h3>
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
    <div style={{
      textAlign: 'left',
      position: 'absolute',
      width: '39%',
      top: '14%',
      left: '56%',
      color: 'white'
    }}>
      <div style={{ fontSize: '2rem'}}>
        
        Pontos: {points}
      </div>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'white',
        marginBottom: '35px'
      }}></div>
      <div style={{
        width: '100%',
        height: '70vh',
        overflowY: 'auto'
      }}>
        {buildCorrectAnswers()}
      </div>
    </div>
  </div>);
}

export default Answers;


