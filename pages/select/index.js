import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "../../components/Button";

function Select() {
  const router = useRouter();
  const [cases, setCases] = useState([]);
  const [solvedCases, setSolvedCases] = useState([]);

  useEffect(() => {
    setCases(JSON.parse(localStorage.getItem('cases')));
    setSolvedCases(JSON.parse(localStorage.getItem('solvedCase') || '[]'));
  }, []);

  const handleClick = (i) => {
    localStorage.setItem('actualCase', i);
    router.push({
      pathname: '/game'
      
    });
  }

  const goToReferences = () => {
    router.push({
      pathname: '/references'
    });
  }

  const goToInfo = (i) => {
    router.push({
      pathname: '/info',
      query: { index: i}
    });
  }

  const buildCards = () => {
    const cards = [];

    cases.forEach((value, i) => {
      cards.push(
        <div class="column" style={{ display: 'flex'}}>
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
      zIndex: '5',
      position: 'absolute',
      width: 'calc(100vw - 60px)',
      bottom: '30px',
      right: '30px',
    }}>
      <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem'}}>Saiba mais</div>
      <div style={{ backgroundColor: 'white', height: '1px', width: '100%', marginBottom: '12px' }}></div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}>
        <Button error={true} onClick={() => goToInfo(1)} style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: 'auto',
          marginLeft: '20px',
        }}>
          Transtorno Materno Hipertensivo
        </Button>
        <Button error={true} onClick={() => goToInfo(2)} style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: 'auto',
          marginLeft: '20px'
        }}>
          Insuficiência Istmocervical
        </Button>
        <Button error={true} onClick={() => goToInfo(3)} style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: 'auto',
          marginLeft: '20px'
        }}>
          Infecção do Trato urinário
        </Button>
        <Button onClick={goToReferences} style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: 'auto',
          marginLeft: '20px'
        }}>
          Consultar referências
        </Button>
      </div>
    </div>
    <div style={{
      position: 'absolute',
      zIndex: '4',
      width: '100vw',
      height: '100vh',
      bottom: '0',
      left: '0',
    }}>
      <div className="columns" style={{
        gridGap: '0.5em',
        height: '100vh',
      }}>
        <div class="column"></div>
        {buildCards()}
        <div class="column"></div>
      </div>
    </div>
  </div>;
}

export default Select;
