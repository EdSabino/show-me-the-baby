import { useRouter } from "next/router";
import { Button } from "../../components/Button";
import { MdKeyboardArrowLeft } from 'react-icons/md';

function Info() {
  const router = useRouter();

  const goback = () => {
    router.push({
      pathname: '/select'
    })
  }

  return <div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
    <div style={{
      zIndex: '5',
      position: 'absolute',
      top: '30px',
      left: '30px',
    }}>
      <Button onClick={goback} style={{
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: 'auto',
        marginLeft: '20px'
      }}>
        <MdKeyboardArrowLeft size="40px" />
      </Button>
    </div>
    <img src={`./info-${router.query.index}.png`} style={{ height: '100vh', objectFit: 'cover', marginRight: 'auto', marginLeft: 'auto' }} />
  </div>
}

export default Info;
