import React, { useState } from 'react';
import {Navbar, Button} from 'react-bootstrap';
import DragIndicator from '@material-ui/icons/DragIndicator';
import pin from '../../assets/images/pin.png';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar style={{backgroundColor: props.color}} >
      <Navbar.Brand style={{'font-family':'SaucerBB'}}>{props.title}</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Button style={{backgroundColor:"blue"}} onClick={props.moveCallback}><i class="fa fa-arrows" aria-hidden="true" style={{color:"white"}} ></i></Button>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Example;
