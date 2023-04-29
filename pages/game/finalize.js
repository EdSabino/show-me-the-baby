import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Bubble } from '../../components/Bubble';
import { Button } from '../../components/Button';
import { MdPlayArrow } from 'react-icons/md';

function Finalize() {
  const router = useRouter();
  const [currentCase, setCase] = useState(null);
  const [currentCaseIndex, setCurrentCase] = useState(null);

  useEffect(() => {
    const actualCase = localStorage.getItem('actualCase');
    setCase(JSON.parse(localStorage.getItem('cases'))[actualCase]);
    setCurrentCase(parseInt(actualCase));
  }, []);

  if (!currentCase) return <div></div>;

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
      top: '0',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      zIndex: '15',
      display: 'flex'
    }}>
      <img
        style={{
          margin: 'auto',
          height: '90vh'
        }}
        src={`/mother${currentCaseIndex + 1}.png`} />
    </div>
    <div style={{
      zIndex: '5',
      position: 'absolute',
      bottom: '15vh',
      left: '50%',
      msTransform: 'translate(-50%)',
      transform: 'translate(-50%)',
      width: '50vw',
      zIndex: '20'
    }}>
      <div className="columns" style={{ width: '50vw' }}>
        <div className="column is-2" style={{
          marginRight: '20px'
        }}></div>
        <Bubble className="column">{currentCase.finalizeMessage}</Bubble>
        <Button className="column is-1" onClick={() => router.push('/select')} style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: 'auto',
          marginLeft: '20px'
        }}>
          <MdPlayArrow size="40px" style={{ marginTop: '-20px', marginLeft: '-5px'}} />
        </Button>
      </div>
    </div>
  </div>
}

export default Finalize;
