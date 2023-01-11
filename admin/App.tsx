import * as React from 'react';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CaseCreate } from './case/create';
import { HistoryList } from './history.list';
import { AnswerList } from './answer.list';
import { ExamList } from './exam.list';
import { CaseList } from './case.list';
import { HistoryEdit } from './history.edit';
import { ExamEdit } from './exam.edit';
import { AnswerEdit } from './answer.edit';
import { SignList } from './signs.list';
import { SignEdit } from './signs.edit';

const App = () => (
    <Admin dataProvider={simpleRestProvider('/api/admin')}>
        <Resource name="case"
            list={CaseList}
            create={CaseCreate}
        />

        <Resource name="history"
            list={HistoryList}
            edit={HistoryEdit}
            create={CaseCreate}
        />

        <Resource name="exam"
            list={ExamList}
            edit={ExamEdit}
        />

        <Resource name="answer"
            list={AnswerList}
            edit={AnswerEdit}
        />

        <Resource name="signs"
            list={SignList}
            edit={SignEdit}
        />
    </Admin>
);

export default App;
