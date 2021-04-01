import React from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react'

const Formulaire = () =>{
    return (
       <Form> 
            <Grid textAlign="center">
               <Grid.Row>
                    <Grid.Column width={5}>
                       <input type="text" placeholder="Enter something to do"/> 
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

