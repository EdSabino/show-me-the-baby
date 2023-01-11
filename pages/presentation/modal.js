import { MdPlayArrow } from "react-icons/md";
import { Bubble } from "../../components/Bubble";
import { Button } from "../../components/Button";
import { useRouter } from "next/router";
import axios from "axios";

function Modal(props) {
  const router = useRouter();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const name = event.target.name.value;
      
      const response = await axios.post('/api/new_game', {
        name
      });

      localStorage.setItem('gameId', response.data.gameId);
      localStorage.setItem('cases', JSON.stringify(response.data.cases));
      localStorage.setItem('name', name);

      router.push({
        pathname: '/introduction'
      });
    } catch (e) {
      console.log(e);
    }
  }

  return <div style={{ height: '100vh', position: 'relative' }}>
    <form onSubmit={handleSubmit}>

      <div style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: '10',
        backgroundColor: 'black',
        opacity: '0.6'
      }} onClick={props.dismiss}></div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        zIndex: '12'
      }}>
        <div className="columns">
          <Bubble className="column" style={{
            width: '50vw',
          }}>Qual seu nome?</Bubble>
        </div>
        <div className="columns" style={{
          marginTop: '35px',
          width: '30vw',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <Bubble className="column" style={{
            width: '20vw',
          }}>
            <input
              id="name"
              type="text"
              style={{
                backgroundColor: '#BF8EA0',
                border: 'none',
                width: '100%'
              }}
              placeholder="Insira seu nome"
            />
          </Bubble>
          <Button type="submit" className="column is-2" style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            marginTop: 'auto',
            marginLeft: '20px'
          }}>
            <MdPlayArrow size="40px" style={{ marginTop: '-20px', marginLeft: '-5px'}} />
          </Button>
        </div>
      </div>
    </form>
  </div>
}

export default Modal;
