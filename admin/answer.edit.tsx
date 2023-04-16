import { BooleanInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const AnswerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput multiline fullWidth source="description" />
            <BooleanInput source="isCorrect" />
            <TextInput multiline fullWidth source="reason" />
            <ReferenceInput source="caseId" reference="case" />
        </SimpleForm>
    </Edit>
);
