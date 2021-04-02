import React, { useState } from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react'

const Formulaire = ({addTodo}) =>{
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const handleFormSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim()==="")return;

        addTodo({title:inputValue,completed:false});
        setInputValue("");
    };

    return (
       <Form onSubmit={handleFormSubmit}> 
            <Grid textAlign="center">
               <Grid.Row>
                    <Grid.Column width={5}>
                       <input 
                            type="text"
                            onChange={handleInputChange}
                            value={inputValue}    
                            placeholder="Enter something to do"
                        /> 
                    </Grid.Column>
                    <Grid.Column width={1}>
                       <Button circular icon positive type="submit">
                        <Icon name="plus"/>
                       </Button>
                    </Grid.Column>
               </Grid.Row> 
            </Grid>
       </Form>
    );
}
export default Formulaire;

