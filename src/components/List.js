import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from './Todo';

const List = ({list,removeTodoListProp,editTodoListProp }) => {
    const renderedList = list.map(
        (item)=>( 
            <Todo 
                title={item.title} 
                completed={item.completed} 
                key={item._id} 
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
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
