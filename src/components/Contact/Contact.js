import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <h2 className="text-center">Contact Us</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 pb-5">

                    <form>
                        <div className="card border-primary rounded-0">
                            <div className="card-header p-0">
                                <div className="bg-info text-white text-center py-2">
                                    <h3><i className="fa fa-envelope" />contact us by email:</h3>
                                    <p className="m-0">Please fill the form and submit</p>
                                </div>
                            </div>
                            <div className="card-body p-3">

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-user text-info"/>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="nombre" name="nombre"
                                               placeholder="Username" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i
                                                className="fa fa-envelope text-info" /></div>
                                        </div>
                                        <input type="email" className="form-control" id="nombre" name="email"
                                               placeholder="tolik@gmail.com" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i
                                                className="fa fa-comment text-info"/></div>
                                        </div>
                                        <textarea className="form-control" placeholder="Please type text here..."
                                                  required/>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <input type="submit" value="Send message"
                                           className="btn btn-info btn-block rounded-0 py-2" />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;