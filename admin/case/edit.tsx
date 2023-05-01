import { BooleanInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CaseEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput label="Nome" source="name" />
      <TextInput multiline fullWidth source="description" />
      <TextInput multiline fullWidth label="Finalização" source="finalizeMessage" />
    </SimpleForm>
  </Edit>
);
