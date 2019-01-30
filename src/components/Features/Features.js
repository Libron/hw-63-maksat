import React, {Fragment} from 'react';
import './Features.css';

import image from '../../assets/pic-laptops.png';

const Features = () => {
    return (
        <Fragment>
            <div className="features-block container limit-width">
                <div className="row no-gutters">
                    <div className="item col-md-6 col-lg-4">
                        <i className="far fa-list-alt" />
                        <h4>Powerful</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dolor vitae neque semper
                            aliquet sed et nibh. Cras quis libero quis urna commodo vulputate.</p>
                    </div>
                    <div className="item col-md-6 col-lg-4">
                        <i className="far fa-chart-bar" />
                        <h4>Creative</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dolor vitae neque semper
                            aliquet sed et nibh. Cras quis libero quis urna commodo vulputate.</p>
                    </div>
                    <div className="item col-md-6 col-lg-4">
                        <i className="fas fa-globe" />
                        <h4>Localized</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dolor vitae neque semper
                            aliquet sed et nibh. Cras quis libero quis urna commodo vulputate.</p>
                    </div>
                </div>
            </div>
            <div className="container limit-width">
                <div className="custom-border" />
            </div>
            <div className="intro-block container limit-width">
                <div className="row no-gutters">
                    <div className="intro-text col-md-12 col-lg-6">
                        <h2>Hear The Thunder?</h2>
                        <p>Let me introduce you to a clean, simple, yet powerful <span className="txt-uppercase">premium wordpress theme</span>,
                            created specifically for you.</p>
                        <a href="http://google.com" className="btn-intro">Get Started</a>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img className="img-fluid" src={image} alt="Laptops" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Features;