function History(props) {
  const buildHistories = () => {
    const histories = [];
    props.histories?.forEach(history => {
      histories.push(buildHistory(history));
    });

    return <>{histories}</>
  }

  const buildHistory = (history) => {
    console.log(history.date)
    return <>
      <span className="title is-6">
        {
          new Date(history.date.replace(/(\d+[/])(\d+[/])/, '$2$1'))
            .toLocaleString('pt-BR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })
        }
      </span>
      <div className="is-6">{history.description}</div>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'white',
        marginBottom: '15px'
      }}></div>
    </>
  }

  return (<div style={{
    display: props.actualPath === 'history' ? 'block' : 'none',
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
      <h3 className="title" style={{ marginBottom: '0' }}>Histórico</h3>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'white',
        marginBottom: '15px'
      }}></div>
      <div style={{
        width: '100%',
        overflowY: 'auto'
      }}>
        {buildHistories()}
      </div>
    </div>
  </div>);
}

export default History;
