import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ExamEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="date" />
            <TextInput source="description" />
            <ReferenceInput source="caseId" reference="case" />
        </SimpleForm>
    </Edit>
);
