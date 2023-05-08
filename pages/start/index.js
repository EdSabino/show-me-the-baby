import { useRouter } from "next/router";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { log } from 'next-axiom';

function Start() {
  const router = useRouter();
  const [ranks, setRanks] = useState([]);

  const handleSubmit = async (event) => {
    log.info('Game started');
    event.preventDefault();
    localStorage.setItem('solvedCase', '[]')
    router.push({
      pathname: '/presentation'
    });
  }

  // useEffect(() => {
  //   getRanks().then((body) => setRanks(body))
  // }, []);

  // const getRanks = async () => {
  //   const response = await fetch('/api/get_ranks');
  //   return response.json();
  // }

  const renderRank = () => {
    return ranks.map((rank, i) => {
      return <li>{rank.name} - {rank.points}</li>
    })
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
    {/* <div style={{
      position: 'absolute',
      width: '20vw',
      top: '10%',
      right: '0',
      height: '100vh'
    }}>
      <h2 style={{ color: 'black !important' }}>Ranking</h2>
      <ol>
        {renderRank()}
      </ol>
    </div> */}
  </div>
}

export default Start;
