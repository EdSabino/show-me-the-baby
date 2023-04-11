import { useRouter } from "next/router";
import { Button } from "../../components/Button";

function Start() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    router.push({
      pathname: '/presentation'
    });
  }

  return <div style={{ height: '100vh', position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      msTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)'
    }}>
      <form onSubmit={handleSubmit}>
        <img src="./logo2.png" width="300px" />
        
        <div style={{ display: 'flex', width: '100%', marginTop: '20px'}}>
          <Button type="submit" style={{ margin: 'auto'}}>Iniciar</Button>
        </div>
      </form>
    </div>
  </div>
}

export default Start;
