import { Bubble } from "../../components/Bubble";
import { Button } from "../../components/Button";
import { MdPlayArrow } from 'react-icons/md';
import Modal from "./modal";
import { useState } from 'react';

function Presentation() {
  const [open, setOpen] = useState();

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
      bottom: '30px',
      width: '100vw',
    }}>
      <div className="columns"  style={{ width: '90vw', margin: 'auto' }}>
        <div className="column is-1"></div>
        <Bubble className="column" style={{ fontWeight: 'bold', textAlign: 'center' }}>
          Bem-vindo ao jogo @-feto!<br />
          Esse jogo tem o objetivo de sensibilizar e familiarizar os enfermeiros quanto a identificação precoce de fatores de risco e intervenções adequadas na gestação, buscando reduzir a mortalidade neonatal precoce.<br />
          O jogador deve assumir o papel do enfermeiro na Atenção Primária à Saúde, e através de seus conhecimentos e habilidades no cuidado pré-natal, deve tomar decisões corretas para uma adequada assistência à gestante.<br />
          Desejamos uma experiência valiosa!
        </Bubble>
        <Button className="column is-1" onClick={() => setOpen(true)} style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: 'auto',
          marginLeft: '20px'
        }}>
          <MdPlayArrow size="40px" style={{ marginTop: '-20px', marginLeft: '-5px'}} />
        </Button>
      </div>
    </div>
    { open && <Modal
      dismiss={() => setOpen(false)}
    />}
  </div>
}

export default Presentation;
