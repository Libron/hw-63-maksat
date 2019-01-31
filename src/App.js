import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Biography from "./components/Biography/Biography";
import Contact from "./components/Contact/Contact";
import {NavLink} from 'react-router-dom';
import Add from "./components/Add/Add";
import Home from "./components/Home/Home";
import ReadMore from "./components/ReadMore/ReadMore";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="header">
                        <div className="logo"><p>My blog</p></div>
                        <nav className="nav header__nav">
                            <ul className="nav__list">
                                <li className="nav__item"><NavLink to='/' className="nav__link">Home</NavLink></li>
                                <li className="nav__item">|</li>
                                <li className="nav__item"><NavLink to='/add' className="nav__link">Add</NavLink></li>
                                <li className="nav__item">|</li>
                                <li className="nav__item"><NavLink to='/biography' className="nav__link">About us</NavLink></li>
                                <li className="nav__item">|</li>
                                <li className="nav__item"><NavLink to='/contact' className="nav__link">Contact
                                    Us</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/add" component={Add}/>
                        <Route path="/biography" component={Biography}/>
                        <Route path="/posts/:id&:title&:time&:description" component={ReadMore}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
