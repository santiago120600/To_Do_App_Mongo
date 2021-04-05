import todos from './apis';

import React, { useState, useEffect } from "react";
import { Container } from 'semantic-ui-react'
import Formulaire from './components/Form';
import Section from './components/Section';
import List from './components/List';

const appTitle = "To-Do App";

const App = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const {data} = await todos.get("/todos");
            setTodoList(data);
        }
        fetchData();
    },[]);

    const addTodo = async (item) =>{
        const {data} = await todos.post("/todos",item);
        setTodoList((oldList)=>[...oldList,data]);
    };

    const removeTodo = async (id) =>{
       await todos.delete(`/todos/${id}`);
       setTodoList((oldList)=> oldList.filter((item)=> item._id !== id));
    };

    const editTodo = async (id,item) =>{
       await todos.put(`/todos/${id}`,item);
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
                <List
                    list={todoList}   
                    removeTodoListProp={removeTodo}
                    editTodoListProp={editTodo}
                />
            </Section>
        </Container>
    </div>;
};

export default App;
