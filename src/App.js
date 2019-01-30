import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Biography from "./components/Biography/Biography";
import Features from "./components/Features/Features";
import Contact from "./components/Contact/Contact";
import {NavLink} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter className="App">
                <header className="header">
                    <div className="logo"><p>My blog</p></div>
                    <nav className="nav header__nav">
                        <ul className="nav__list">
                            <li className="nav__item"><NavLink to='/' className="nav__link">About us</NavLink></li>
                            <li className="nav__item"><NavLink to='/features' className="nav__link">Features</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to='/contact' className="nav__link">Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Biography}/>
                    <Route path="/features" exact component={Features}/>
                    <Route path="/Contact" exact component={Contact}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
