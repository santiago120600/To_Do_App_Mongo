import React, {useState} from 'react';
import { Button, Grid, Icon, Input, Header } from 'semantic-ui-react';

const Todo = ({title,completed, removeTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) =>{
        const key = e.keyCode;

        if(key === 13){
            //Enter key 
            setValue(tempValue); 
            setIsEditing(false);
        }else if(key === 27){
            //Esc key
            setTempValue(value); 
            setIsEditing(false);
        }
    }

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);        
    };
    
    const handleButtonClick = () =>{
        setCompleted((oldCompleted)=>!oldCompleted);
    };

    return(
           <Grid.Row>
                {
                isEditing ?
                <Grid.Column width={7}>
                    <Input fluid 
                        onChange={handleInputOnChange}    
                        onKeyDown={handleInputKeyDown}
                        autoFocus={true}
                        value={tempValue}
                    /> 
                </Grid.Column>
            :
               <>     
                <Grid.Column width={5} onDoubleClick={handleDivDoubleClick}>
                    <Header as="h2" color={completedState ?  "green" : "black"}>{value}</Header>
                </Grid.Column>
                <Grid.Column width={1}>
                   <Button circular icon 
                        color={completedState ? "blue" : "green"}
                        onClick={handleButtonClick}
                    >
                    <Icon name="check"/>
                   </Button>
                </Grid.Column>
                <Grid.Column width={1}>
                   <Button circular icon negative
                    onClick={removeTodo}
                    >
                    <Icon name="remove"/>
                   </Button>
                </Grid.Column>
               </>     
                }
           </Grid.Row>
    );
};
export default Todo;
