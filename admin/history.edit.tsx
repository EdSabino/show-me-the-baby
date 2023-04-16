import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const HistoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="date" />
            <TextInput multiline fullWidth source="description" />
            <ReferenceInput source="caseId" reference="case" />
        </SimpleForm>
    </Edit>
);
