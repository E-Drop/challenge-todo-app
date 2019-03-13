import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Todo from './components/Todo'
import NewTodo from './components/NewTodo'
import Navbar from './components/NavBar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faTimes, faPenSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faTimes, faPenSquare);
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Todo} />
      <Route path="/new" component={NewTodo} />
    </Switch>
      </div>
    );
  }
}

export default App;
