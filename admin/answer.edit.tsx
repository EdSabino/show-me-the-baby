import { BooleanInput, Create, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const AnswerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput multiline fullWidth source="description" />
            <NumberInput source="isCorrect" />
            <TextInput fullWidth source="possibility1" />
            <TextInput multiline fullWidth source="reason1" />
            <TextInput fullWidth source="possibility2" />
            <TextInput multiline fullWidth source="reason2" />
            <TextInput fullWidth source="possibility3" />
            <TextInput multiline fullWidth source="reason3" />
            <ReferenceInput source="caseId" reference="case" />
        </SimpleForm>
    </Edit>
);

export const AnswerCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput multiline fullWidth source="description" />
            <NumberInput source="isCorrect" />
            <TextInput fullWidth source="possibility1" />
            <TextInput multiline fullWidth source="reason1" />
            <TextInput fullWidth source="possibility2" />
            <TextInput multiline fullWidth source="reason2" />
            <TextInput fullWidth source="possibility3" />
            <TextInput multiline fullWidth source="reason3" />
            <ReferenceInput source="caseId" reference="case" />
        </SimpleForm>
    </Create>
);

