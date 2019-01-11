import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';

// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <SayFullName name="Vyacheslav" surname="Sazonov" link="vk.com" />
          <SayFullName name="Petr" surname="Sazonov" link="vk.com" />
          <SayFullName name="Ivan" surname="Sazonov" link="vk.com" />
      </div>
    );
  }
}


function SayFullName(props){
  return (
      <div>
          <h1> My name is {props.name}, family - {props.surname} </h1>
          <a href={props.link}> Ссылка на мой профиль </a>
      </div>
  )
}

export default App;
