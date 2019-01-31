import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddProduct from './containers/AddProduct';
import './App.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
              <Route path='/' exact render={()=><h1>Home Page</h1>} />
              <Route path='/add' exact component={AddProduct} />
              <Route render={()=><h1>Not found 404</h1>} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
