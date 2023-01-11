import React, { useEffect, useState } from 'react';
import Signs from './signs';
import History from './history';
import Exams from './exams';
import Answers from './answers';
import ClipLoader from "react-spinners/ClipLoader";

function Game() {
  const [actualPath, setPath] = useState('signs');
  const [gameCase, setCase] = useState();

  useEffect(() => {
    const actualCase = localStorage.getItem('actualCase');
    setCase(JSON.parse(localStorage.getItem('cases'))[actualCase]);
  }, []);
  
  function goTo(path) {
    console.log(gameCase)
    setPath(path);
  }

  function getContent() {
    return {
      signs: <Signs
        signs={gameCase.signs}
      />,
      history: <History
        history={gameCase.histories}
      />,
      exams: <Exams
        exams={gameCase.exams}
      />,
      answers: <Answers
        answers={gameCase.answers}
        caseId={gameCase.id}
      />
    }[actualPath];
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

  return <div style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }}>
    <div className="columns" style={{ flex: '1 0 auto' }}>
      <div className="column is-5" style={{ paddingLeft: 30, paddingRight: 0}}>
        <h3 class="title is-3">{gameCase.name}</h3>
        <h5 class="title is-5">{gameCase.description}</h5>
      </div>
      <div 
        className="column is-6"
        style={{
          verticalAlign: 'top',
          borderLeft: '1px solid black',
          paddingLeft: '10px',
          paddingRight: '10px'
        }}
      >
        <div>

        {getContent()}
        </div>
      </div>
    </div>
    
  </div>
}

export default Game
