import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const HistoryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="date" />
            <TextField source="description" />
            <ReferenceField source="caseId" reference="case" />
        </Datagrid>
    </List>
);
