import React, { Component, Fragment } from 'react';

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center"> Projects</h1>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="row">
                                <div className="col">
                                    <h1>Project 1</h1>
                                </div>
                                <div className="col">
                                    <h1>Project 2</h1>
                                </div>
                                <div className="col">
                                    <h1>Project 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Projects;
