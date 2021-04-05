import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from './Todo';

const List = ({list,removeTodo,editTodoListProp }) => {
    const renderedList = list.map(
        (item, idx)=>( 
            <Todo 
                title={item.title} 
                completed={item.completed} 
                key={idx} 
                removeTodo={(e) => removeTodo(item._id)}
                editTodoItemProp={(updatedItem)=>editTodoListProp(item._id,updatedItem)}
            />
        )
    );
   return(
        <Grid textAlign="center">
           {renderedList}
        </Grid>
    ); 
};
 export default List;
