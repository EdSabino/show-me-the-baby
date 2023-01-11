import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const CaseList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
