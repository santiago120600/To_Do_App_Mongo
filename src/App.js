import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import Formulaire from './components/Form';
const appTitle = "To-Do App";

const App = () => {
    return <div>
        <Container textAlign='center'>
            <h1>{appTitle}</h1>
            <br></br>
            <Formulaire/>
        </Container>
    </div>;
};

export default App;
