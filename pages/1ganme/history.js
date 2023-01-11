function History(props) {

  const buildHistories = () => {
    const histories = [];
    props.history.forEach(history => {
      histories.push(buildHistory(history));
    });

    return <>{histories}</>
  }

  const buildHistory = (history) => {
    return <div style={{ border: '1px solid black', padding: 10 }}>
      <span className="title is-6">
        {
          new Date(history.date)
            .toLocaleString('pt-BR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })
        }
      </span>
      <h6 className="title is-6">{history.description}</h6>
    </div>
  }

  return <div style={{ height: '100%'}}>
    <h1 className="title">Historico</h1>
    {buildHistories()}
  </div>
}

export default History;