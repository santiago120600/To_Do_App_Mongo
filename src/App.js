import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import Formulaire from './components/Form';
import Section from './components/Section';
import List from './components/List';

const appTitle = "To-Do App";

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
                <List/>
            </Section>
        </Container>
    </div>;
};

export default App;
