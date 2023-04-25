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
        <TextInput fullWidth source={`answers.createMany.data[${i}].possibility1`} />
        <TextInput fullWidth source={`answers.createMany.data[${i}].reason1`} />
        <TextInput fullWidth source={`answers.createMany.data[${i}].possibility2`} />
        <TextInput fullWidth source={`answers.createMany.data[${i}].reason2`} />
        <TextInput fullWidth source={`answers.createMany.data[${i}].possibility3`} />
        <TextInput fullWidth source={`answers.createMany.data[${i}].reason3`} />
        <NumberInput label="Resposta certa" source={`answers.createMany.data[${i}].isCorrect`}  />
        <TextInput style={{ marginLeft: '20px' }} multiline label="Descrição" source={`answers.createMany.data[${i}].description`}  />
      </div>)
    }

    return hist
  }

  return <Create {...props}>
    <SimpleForm>
      <TextInput label="Nome" source="name" />
      <TextInput multiline fullWidth label="Descrição" source="description" />

      <div style={{ display: 'flex' }}>
        <h3>Respostas</h3>
        <Button label="ADD resposta" onClick={() => setAnswersCount(answersCount + 1)} />
      </div>
      {buildAnswersForm()}
    </SimpleForm>
  </Create>;
};
