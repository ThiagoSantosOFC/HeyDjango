import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import { WithStyles } from '@material-ui/core/styles/withStyles';

class App extends Component {

  state = {
    isLoggedIn: false,
    messages: [],
    Value: '',
    name: '',
    room: 'HeyDjango',

  }

  client = new W3CWebSocket('ws://localhost:8000/ws/chat/'+ this.state.room + '/');

  componentDidMount() {
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    this.client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
    };
  }


  render() {
  <Container component="main" maxWidth="xs">
     { this.state.isLoggedIn ? : }
  </Container>

  }

}
export default (App)