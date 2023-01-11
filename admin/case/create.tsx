import * as React from "react";
import {
  BooleanInput,
  Button,
  Create,
  DateInput,
  DateTimeInput,
  NumberInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const CaseCreate = (props: any) => {
  const [historiesCount, setHistoriesCount] = React.useState(0);
  const [examsCount, setExamsCount] = React.useState(0);
  const [answersCount, setAnswersCount] = React.useState(0);

  const buildHistoriesForm = () => {
    const hist = [];

    for (let i = 0; i < historiesCount; i++) {
      hist.push(<div key={`hist.${i}`}>
        <DateTimeInput label="Data" source={`histories.createMany.data[${i}].date`} />
        <TextInput style={{ marginLeft: '20px' }} multiline label="Descrição" source={`histories.createMany.data[${i}].description`}  />
      </div>)
    }

    return hist
  }

  const buildExamsForm = () => {
    const hist = [];

    for (let i = 0; i < examsCount; i++) {
      hist.push(<div key={`exams.${i}`}>
        <DateTimeInput label="Data" source={`exams.createMany.data[${i}].date`} />
        <TextInput style={{ marginLeft: '20px' }} multiline label="Descrição" source={`exams.createMany.data[${i}].description`}  />
      </div>)
    }

    return hist
  }

  const buildAnswersForm = () => {
    const hist = [];

    for (let i = 0; i < answersCount; i++) {
      hist.push(<div key={`answers.${i}`}>
        <BooleanInput label="Está certa?" source={`answers.createMany.data[${i}].isCorrect`}  />
        <TextInput style={{ marginLeft: '20px' }} multiline label="Descrição" source={`answers.createMany.data[${i}].description`}  />
        <TextInput style={{ marginLeft: '20px' }} multiline label="Justificativa" source={`answers.createMany.data[${i}].reason`}  />
      </div>)
    }

    return hist
  }

  return <Create {...props}>
    <SimpleForm>
      <TextInput label="Nome" source="name" />
      <TextInput multiline fullWidth label="Descrição" source="description" />
      <h3>Signs</h3>
      <div>
        <NumberInput label="Peso" source="signs.create.weigth" />
        <NumberInput style={{ marginLeft: '20px' }} label="altura" source="signs.create.height" />
        <TextInput style={{ marginLeft: '20px' }} label="Pulso" source="signs.create.pulse" />
      </div>

      <div style={{ display: 'flex' }}>
        <h3>Hiistorico</h3>
        <Button label="ADD historico" onClick={() => setHistoriesCount(historiesCount + 1)} />
      </div>
      {buildHistoriesForm()}

      <div style={{ display: 'flex' }}>
        <h3>Exames</h3>
        <Button label="ADD exames" onClick={() => setExamsCount(examsCount + 1)} />
      </div>
      {buildExamsForm()}

      
      <div style={{ display: 'flex' }}>
        <h3>Respostas</h3>
        <Button label="ADD resposta" onClick={() => setAnswersCount(answersCount + 1)} />
      </div>
      {buildAnswersForm()}
    </SimpleForm>
  </Create>;
};
