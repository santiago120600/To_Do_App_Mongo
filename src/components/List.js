import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from './Todo';

const List = ({list}) => {
    const renderedList = list.map((item)=> <Todo title={item.title} completed={item.completed} key={item.title}/>);
   return(
        <Grid textAlign="center">
           {renderedList}
        </Grid>
    ); 
};
 export default List;
