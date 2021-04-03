import React, {useState} from 'react';
import { Container } from 'semantic-ui-react'
import Formulaire from './components/Form';
import Section from './components/Section';
import List from './components/List';

const appTitle = "To-Do App";

const list = [
    { id: 1, title:"Test #1",completed:false},
    { id: 2, title:"Test #2",completed:false},
    { id: 3, title:"Test #3",completed:true}
];

const App = () => {
    const [todoList, setTodoList] = useState(list);

    const addTodo = (item) =>{
        setTodoList((oldList)=>[...oldList,item]);
    };

    const removeTodo = (id) =>{
       setTodoList((oldList)=> oldList.filter((item)=> item.id !== id));
    };

    return <div>
        <Container textAlign='center'>
            <Section>
                <h1>{appTitle}</h1>
            </Section>
            <Section>
                <Formulaire addTodo={addTodo}/>
            </Section>
            <Section>
                <List list={todoList}  removeTodo={removeTodo}/>
            </Section>
        </Container>
    </div>;
};

export default App;
