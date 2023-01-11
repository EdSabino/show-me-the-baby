import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const SignEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="pulse" />
            <NumberInput source="weigth" />
            <NumberInput source="height" />
            <ReferenceInput source="caseId" reference="case" />
        </SimpleForm>
    </Edit>
);
