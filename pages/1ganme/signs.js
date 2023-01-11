function Signs(props) {
  return <div style={{ height: '100%'}}>
    <h1 className="title">Sinais vitais</h1>
    <h5 className="title is-5">Pulso: {props.signs.pulse}</h5>
    <h5 className="title is-5">Peso: {props.signs.weight}</h5>
    <h5 className="title is-5">Altura: {props.signs.height}</h5>
  </div>
}

export default Signs;