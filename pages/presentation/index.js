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
      left: '50%',
      msTransform: 'translate(-50%)',
      transform: 'translate(-50%)',
      width: '50vw'
    }}>
      <div className="columns" style={{ width: '50vw' }}>
        <div className="column is-2" style={{
          marginRight: '20px'
        }}></div>
        <Bubble className="column">Bem vindo ao jogo @-feto. Como posso lhe chamar?</Bubble>
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
