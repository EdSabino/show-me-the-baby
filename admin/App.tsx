import * as React from 'react';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CaseCreate } from './case/create';
import { HistoryList } from './history.list';
import { AnswerList } from './answer.list';
import { CaseList } from './case.list';
import { CaseEdit } from './case/edit';
import { HistoryEdit } from './history.edit';
import { AnswerEdit, AnswerCreate } from './answer.edit';
import { authProvider } from './authProvider';

const App = () => (
    <Admin dataProvider={simpleRestProvider('/api/admin')} authProvider={authProvider} requireAuth>
        <Resource name="case"
            list={CaseList}
            create={CaseCreate}
            edit={CaseEdit}
        />

        <Resource name="answer"
            list={AnswerList}
            create={AnswerCreate}
            edit={AnswerEdit}
        />
    </Admin>
);

export default App;
