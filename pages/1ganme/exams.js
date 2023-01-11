function Exams(props) {

  const buildExams = () => {
    const exams = [];
    props.exams.forEach(exam => {
      exams.push(buildExam(exam));
    });

    return <>{exams}</>
  }

  const buildExam = (exam) => {
    return <div style={{ border: '1px solid black', padding: 10 }}>
      <span className="title is-6">
        {
          new Date(exam.date)
            .toLocaleString('pt-BR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })
        }
      </span>
      <h6 className="title is-6">{exam.description}</h6>
    </div>
  }

  return <div style={{ height: '100%'}}>
    <h1 className="title">Exames</h1>
    {buildExams()}
  </div>
}

export default Exams;