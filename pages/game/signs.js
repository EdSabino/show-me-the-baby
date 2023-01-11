function Signs(props) {
  return (<div style={{
    display: props.actualPath === 'signs' ? 'block' : 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    textAlign: 'center',
  }}>
    <img style={{
      height: '100%',
      width: 'auto',
    }} src="signs.png" />
    <div style={{
      textAlign: 'left',
      position: 'absolute',
      width: '35%',
      top: '14%',
      left: '56%',
      color: 'white'
    }}>
      <h3 className="title" style={{ marginBottom: '0' }}>Sinais vitais</h3>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'white',
        marginBottom: '15px'
      }}></div>
      <h5 className="title is-5">Pulso: {props.signs?.pulse}</h5>
      <h5 className="title is-5">Peso: {props.signs?.weigth}</h5>
      <h5 className="title is-5">Altura: {props.signs?.height}</h5>
    </div>
  </div>);
}

export default Signs;
