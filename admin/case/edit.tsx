import { BooleanInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CaseEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput multiline fullWidth source="description" />
    </SimpleForm>
  </Edit>
);
