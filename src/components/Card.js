import {React, Component} from 'react';
import {Card } from 'react-bootstrap';
import CustomButton from '../components/CustomButton'

function AppCard(props)  {

    
        return(
          <div>

            <Card>
  <Card.Img variant="top" src={props.src} />
  <Card.Body>
        <Card.Title >{props.label}</Card.Title>
    <Card.Text>
    {props.text}
    </Card.Text>
          <CustomButton buttonStyle='outline-primary'>View Item</CustomButton>
  </Card.Body>
</Card>
</div>
        )  
}

export default AppCard