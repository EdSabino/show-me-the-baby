import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Select() {
  const router = useRouter();
  const [cases, setCases] = useState([]);
  const [solvedCases, setSolvedCases] = useState([]);

  useEffect(() => {
    console.log('a', JSON.parse(localStorage.getItem('solvedCase') || '[]'))
    setCases(JSON.parse(localStorage.getItem('cases')));
    setSolvedCases(JSON.parse(localStorage.getItem('solvedCase') || '[]'));
  }, []);

  const handleClick = (i) => {
    localStorage.setItem('actualCase', i);
    router.push({
      pathname: '/game'
    });
  }

  const buildCards = () => {
    const cards = [];

    cases.forEach((value, i) => {
      cards.push(
        <div style={{ display: 'flex'}}>
          <div
            style={{
              margin: 'auto',
              cursor: solvedCases.includes(i) ? 'default' : 'pointer',
              color: 'white'
            }}
          >
            { value.name }
            <img
              className={solvedCases.includes(i) ? 'img-disabled' : "img-hover"}
              onClick={() => !solvedCases.includes(i) && handleClick(i)}
              src={`folder${i + 1}.png`} />
          </div>
        </div>
      );
    });

    return cards;
  }

  if (cases.length === 0) {
    return <div style={{ height: '100vh', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
      }}>
        <ClipLoader color={'#b86bff'} loading={true}  size={150} />
      </div>
    </div>;
  }

  return <div style={{ height: '100vh', position: 'relative' }}>
    <div style={{
      position: 'absolute',
      bottom: '0',
      top: '0',
      left: '0',
      overflow: 'hidden'
    }}>
      <img
        onClick={() => handleClick(i)}
        src="background-presentation.png" />
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
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
        gridGap: '0.5em',
        height: '100vh',
        paddingLeft: '50px'
      }}>
        <div style={{ display: 'flex'}}></div>
        {buildCards()}
        <div style={{ display: 'flex'}}></div>
      </div>
    </div>
  </div>;
}

export default Select;
