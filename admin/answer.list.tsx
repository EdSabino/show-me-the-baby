import { BooleanField, Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const AnswerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
            <TextField source="reason" />
            <ReferenceField source="caseId" reference="case" />
        </Datagrid>
    </List>
);
