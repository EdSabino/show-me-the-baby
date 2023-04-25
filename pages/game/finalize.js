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
      padding: '30px',
      left: 0,
      top: 0,
      zIndex: '20',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="columns" style={{
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
        <div className="column is-half" style={{ display: 'flex', flexDirection: 'column' }}>
          <Bubble style={{ marginBottom: 'auto', marginTop: 'auto' }}>{currentCase.finalizeMessage}</Bubble>
        </div>
        <div className="column is-half" style={{display: 'flex'}}>
        <img style={{
          width: '100%',
          height: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto'
        }} src={`/gravida${currentCaseIndex + 1}.png`} />
        </div>
        <div style={{
          zIndex: '5',
          position: 'absolute',
          bottom: '30px',
          right: '30px',
        }}>
          <Button onClick={() => router.push('/select')} style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            marginTop: 'auto',
            marginLeft: '20px'
          }}>
            <MdPlayArrow size="40px" />
          </Button>
        </div>
      </div>
    </div>
  </div>
}

export default Finalize;
