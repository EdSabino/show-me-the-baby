import { useEffect, useState } from "react";

function History(props) {
  const [currentCaseIndex, setCurrentCase] = useState(null);
  useEffect(() => {
    const actualCase = localStorage.getItem('actualCase');
    setCurrentCase(parseInt(actualCase));
  });

  return (<div style={{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    textAlign: 'center',
  }}>
    <img style={{
      height: '100%',
      width: 'auto',
    }} src="signs.png" />
    {props.children}
    <div style={{
      textAlign: 'left',
      position: 'absolute',
      width: '35%',
      top: '14%',
      left: '58%',
      color: 'white',
    }}>
      <div style={{
        width: '100%',
        height: '70vh',
        display: 'flex'
      }}>
        <img style={{
          width: '100%',
          height: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto'
        }} src={`/gravida${currentCaseIndex + 1}.png`} />
      </div>
    </div>
  </div>);
}

export default History;
