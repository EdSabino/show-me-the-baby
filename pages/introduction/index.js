import { useRouter } from "next/router";
import { Bubble } from "../../components/Bubble";
import { Button } from "../../components/Button";
import { MdAccountBalanceWallet, MdCatchingPokemon, MdPlayArrow } from 'react-icons/md';
import { useState } from 'react';

const steps = [
  'Olá! A seguir lhe apresentaremos 3 estudos de caso. Marque apenas as opções que você considera como verdadeiras.'
];

function Introduction() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const talk = () => {
    if (typeof window !== 'undefined') {
      const name = localStorage.getItem('name');
      return steps[step].replace('<name>', name);
    }
  }

  const advance = () => {
    router.push({
      pathname: '/select'
    });
    return;
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
      zIndex: '4',
      position: 'absolute',
      bottom: '-50px',
      right: '-150px',
      overflow: 'hidden',
      width: '600px'
    }}>
      <img
        src="nurse.gif" />
    </div>
    <div style={{
      zIndex: '5',
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      msTransform: 'translate(-50%)',
      transform: 'translate(-50%)',
      width: '50vw'
    }}>
      <div className="columns" style={{ width: '50vw' }}>
        <div className="column is-2" style={{
          marginRight: '20px'
        }}></div>
        <Bubble className="column" style={{ fontWeight: 'bold', textAlign: 'center' }}>
          O jogo apresenta casos clínicos de gestantes com transtorno materno hipertensivo, insuficiência istmocervical e infecção do trato urinário.<br />
          Na dinâmica do jogo, serão apresentadas cinco questões para cada caso, com alternativas de múltipla escolha, nas quais você deverá assinalar aquela que considera verdadeira. É importante que analise cuidadosamente cada opção antes de fazer sua escolha.<br />
          Vamos começar?<br />
        </Bubble>
        <Button className="column is-1" onClick={() => advance()} style={{
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

export default Introduction;
