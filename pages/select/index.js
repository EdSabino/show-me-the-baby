import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Select() {
  const router = useRouter();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    setCases(JSON.parse(localStorage.getItem('cases')));
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
              cursor: 'pointer',
              color: 'white'
            }}
          >
            { value.name }
            <img
              className="img-hover"
              onClick={() => handleClick(i)}
              src="folder1.png" />
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
        gridGap: '0.5em',
        height: '100vh',
        paddingLeft: '50px'
      }}>
        {buildCards()}
      </div>
    </div>
  </div>;
}

export default Select;
