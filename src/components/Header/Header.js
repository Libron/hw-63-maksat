import React, {Fragment} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

import Biography from "../Biography/Biography";
import Features from "../Features/Features";
import Contact from "../Contact/Contact";

import './Header.css';

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <div className="container clearfix">
                    <nav className="nav header__nav">
                        <ul className="nav__list">
                            <li className="nav__item"><NavLink to='/' className="nav__link">About us</NavLink></li>
                            <li className="nav__item"><NavLink to='/features' className="nav__link">Features</NavLink></li>
                            <li className="nav__item"><NavLink to='/contact' className="nav__link">Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Switch>
                <Route path="/" exact component={Biography} />
                <Route path="/features" exact component={Features} />
                <Route path="/Contact" exact component={Contact} />
            </Switch>
        </Fragment>
    );
};

export default Header;