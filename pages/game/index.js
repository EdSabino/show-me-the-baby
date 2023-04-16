import { useRouter } from "next/router";
import { Bubble } from "../../components/Bubble";
import { Button } from "../../components/Button";
import { MdPlayArrow } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Signs from "./signs";
import Exams from "./exams";
import History from "./history";
import Answers from "./answers";
import ClipLoader from "react-spinners/ClipLoader";

function Game() {
  const router = useRouter();
  const [actualPath, setPath] = useState('history');
  const [gameCase, setCase] = useState();

  useEffect(() => {
    const actualCase = localStorage.getItem('actualCase');
    setCase(JSON.parse(localStorage.getItem('cases'))[actualCase]);
  }, []);
  
  function goTo(path) {
    console.log(gameCase)
    setPath(path);
  }

  
  if (!gameCase) {
    return <div style={{ height: '100vh', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)'
      }}>
        <ClipLoader color={'#b86bff'} loading={true}  size={150} />
      </div>
    </div>;
  }

  return <div style={{ height: '100vh', position: 'relative' }}>
    <div style={{
      zIndex: '2',
      position: 'absolute',
      bottom: '0',
      top: '0',
      left: '0',
      overflow: 'hidden'
    }}>
      <img
        src="background-colorless.png" />
    </div>
    <div style={{
      position: 'absolute',
      zIndex: '3',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      opacity: '0.6',
      bottom: '0',
      top: '0',
      left: '0',
      overflow: 'hidden'
    }}></div>
    <div style={{
      position: 'absolute',
      zIndex: '4',
      width: '100vw',
      height: '100vh',
      bottom: '0',
      left: '0',
      display: 'flex'
    }}>
    
      <History
        histories={gameCase.histories}
        actualPath={actualPath}
      >
        <div class="content" style={{
          textAlign: 'left',
          position: 'absolute',
          width: '40%',
          top: '12%',
          right: '56%',
          color: 'white',
          height: '77vh',
          overflowY: 'scroll'
        }} dangerouslySetInnerHTML={{ __html: gameCase.description }} />
      </History>
      <Answers
        answers={gameCase.answers}
        caseId={gameCase.id}
        actualPath={actualPath}
      >
        <div class="content" style={{
          textAlign: 'left',
          position: 'absolute',
          width: '40%',
          top: '12%',
          right: '56%',
          color: 'white',
          height: '77vh',
          overflowY: 'scroll'
          
        }} dangerouslySetInnerHTML={{ __html: gameCase.description }} />
      </Answers>
    </div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      bottom: 10,
      zIndex: 12,
      position:'absolute'
    }}>
      <div className="columns" style={{ width: '100vw' }}>
        <div class="column flex">
          <button class="button center" onClick={() => goTo('history')}>
            Histórico
          </button>
        </div>
        <div class="column flex">
          <button class="button center" onClick={() => goTo('answers')}>
            Responder
          </button>
        </div>
        <div class="column flex">
          <button class="button center" onClick={() => router.push({ pathname: '/select' })}>
            Escolher outro caso
          </button>
        </div>
      </div>
    </div>
  </div>
}

export default Game;
