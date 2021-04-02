import React from 'react';
import { Container } from 'semantic-ui-react'
import Formulaire from './components/Form';
import Section from './components/Section';
import List from './components/List';

const appTitle = "To-Do App";

const todoList = [
    {title:"Test #1",completed:false},
    {title:"Test #2",completed:false},
    {title:"Test #3",completed:true}
];

const App = () => {
    return <div>
        <Container textAlign='center'>
            <Section>
                <h1>{appTitle}</h1>
            </Section>
            <Section>
                <Formulaire/>
            </Section>
            <Section>
                <List list={todoList}/>
            </Section>
        </Container>
    </div>;
};

export default App;
