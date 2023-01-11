import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const SignList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="pulse" />
            <NumberField source="weigth" />
            <NumberField source="height" />
            <ReferenceField source="caseId" reference="case" />
        </Datagrid>
    </List>
);
