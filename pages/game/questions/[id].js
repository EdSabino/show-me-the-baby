import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Bubble } from '../../../components/Bubble';
import { Button } from '../../../components/Button';
import { MdPlayArrow } from 'react-icons/md';
import parse from 'html-react-parser';

function Questions() {
  const router = useRouter();
  const [currentCase, setCase] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [reason, setReason] = useState(null);
  const [success, setSuccess] = useState(false);
  const [clicked, setClicked] = useState([]);
  const [currentClicked, setCurrentClicked] = useState(0);

  useEffect(() => {
    const actualCase = localStorage.getItem('actualCase');
    setCase(JSON.parse(localStorage.getItem('cases'))[actualCase]);
  }, []);

  useEffect(() => {
    if (!currentCase) return;
    const index = parseInt(router.query.id);
    console.log(currentCase, index)
    setAnswer(currentCase.answers[(index - 1) || 0]);
  }, [currentCase, router.query.id]);

  const choose = (i) => {
    setCurrentClicked(i);
    if (i === answer.isCorrect) {
      setSuccess(true);
    }
    setReason(answer[`reason${i}`]);
    setClicked([...clicked, i]);
  }

  const goToNext = () => {
    const index = parseInt(router.query.id);
    setSuccess(false);
    setClicked([]);
    setReason(null);
    if (index === 5) {
      const actualCase = localStorage.getItem('actualCase');
      const solvedCases = JSON.parse(localStorage.getItem('solvedCase') || '[]');
      localStorage.setItem('solvedCase', JSON.stringify([...solvedCases, parseInt(actualCase)]))
      return router.push('/game/finalize');
    }

    router.push(`/game/questions/${index + 1}`);
  }

  if (!answer) return <div></div>;

  return <div style={{ height: '100vh', position: 'relative' }}>
    <div style={{
      position: 'absolute',
      bottom: '0',
      top: '0',
      left: '0',
      overflow: 'hidden'
    }}>
      <img
        src="/background-presentation.png" />
    </div>
    <div style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: '10',
        backgroundColor: 'black',
        opacity: '0.6'
      }}></div>
    <div style={{
      position: 'absolute',
      padding: '30px',
      left: 0,
      top: 0,
      zIndex: '20',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }}>
      <div className="columns" style={{
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
        <div className="column is-half">
          <div className="columns is-multiline is-3">
            <div className="column is-full">
              <Bubble style={{ border: '2px solid white'}}>{parse(answer.description)}</Bubble>
            </div>
            <div className="column is-full">
              <Button style={{ fontWeight: 'bold', width: '100%', wordWrap: 'break-word', whiteSpace: 'pre-wrap', padding: '30px', height: 'auto' }} disabled={clicked.includes(1)} error={1 !== answer.isCorrect && clicked.includes(1)} onClick={() => choose(1)}>{parse(answer.possibility1)}</Button>
            </div>
            <div className="column is-full">
              <Button style={{ fontWeight: 'bold', width: '100%', wordWrap: 'break-word', whiteSpace: 'pre-wrap', padding: '30px', height: 'auto' }} disabled={clicked.includes(2)} error={2 !== answer.isCorrect && clicked.includes(2)} onClick={() => choose(2)}>{parse(answer.possibility2)}</Button>
            </div>
            <div className="column is-full">
              <Button style={{ fontWeight: 'bold', width: '100%', wordWrap: 'break-word', whiteSpace: 'pre-wrap', padding: '30px', height: 'auto' }} disabled={clicked.includes(3)} error={3 !== answer.isCorrect && clicked.includes(3)} onClick={() => choose(3)}>{parse(answer.possibility3)}</Button>
            </div>
          </div>
        </div>
        {reason && <div className="column is-half" style={{display: 'flex'}}>
          <Bubble className="column is-full" style={{ marginTop: 'auto', marginBottom: 'auto' }} error={answer.isCorrect !== currentClicked}>{reason}</Bubble>
        </div>}
        {success && <div style={{
          zIndex: '5',
          position: 'absolute',
          bottom: '30px',
          right: '30px',
        }}>
          <Button onClick={goToNext} style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            marginTop: 'auto',
            marginLeft: '20px'
          }}>
            <MdPlayArrow size="40px" />
          </Button>
        </div>}
      </div>
    </div>
  </div>
}

export default Questions;
