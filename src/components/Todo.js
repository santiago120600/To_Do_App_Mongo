import React from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';

const Todo = () => {
    return(
           <Grid.Row>
            <Grid.Column width={5}>
                <h2>Test</h2>
            </Grid.Column>
            <Grid.Column width={1}>
               <Button circular icon positive>
                <Icon name="check"/>
               </Button>
            </Grid.Column>
            <Grid.Column width={1}>
               <Button circular icon negative>
                <Icon name="remove"/>
               </Button>
            </Grid.Column>
           </Grid.Row>
    );
};
export default Todo;
