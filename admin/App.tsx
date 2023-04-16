import * as React from 'react';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CaseCreate } from './case/create';
import { HistoryList } from './history.list';
import { AnswerList } from './answer.list';
import { CaseList } from './case.list';
import { CaseEdit } from './case/edit';
import { HistoryEdit } from './history.edit';
import { AnswerEdit } from './answer.edit';

const App = () => (
    <Admin dataProvider={simpleRestProvider('/api/admin')}>
        <Resource name="case"
            list={CaseList}
            create={CaseCreate}
            edit={CaseEdit}
        />

        <Resource name="history"
            list={HistoryList}
            edit={HistoryEdit}
            create={CaseCreate}
        />

        <Resource name="answer"
            list={AnswerList}
            edit={AnswerEdit}
        />
    </Admin>
);

export default App;
