import React, { Component, Fragment } from 'react';

import { ReactComponent as ReactLogo } from './images/react.svg';
import { ReactComponent as MongoDB } from './images/mongodb.svg';
import { ReactComponent as MongoLab } from './images/mongolab.svg';
import { ReactComponent as NodeJs } from './images/nodejs.svg';
import { ReactComponent as ExpressJs } from './images/express.svg';
import { ReactComponent as Git } from './images/git-icon.svg';
import { ReactComponent as GitHub } from './images/github-icon.svg';
import { ReactComponent as BootStrapLogo } from './images/bootstrap.svg';
import { ReactComponent as Cloudinary } from './images/cloudinary.svg';
import { ReactComponent as CSSLogo } from './images/css-3.svg';
import { ReactComponent as FireBaseLogo } from './images/firebase.svg';
import { ReactComponent as Handlebars } from './images/handlebars.svg';
import { ReactComponent as Heroku } from './images/heroku.svg';
import { ReactComponent as WordPress } from './images/wordpress-icon.svg';
import { ReactComponent as VisualStudio } from './images/visual-studio-code.svg';
import { ReactComponent as SassLogo } from './images/sass.svg';
import { ReactComponent as JqueryLogo } from './images/jquery.svg';
import { ReactComponent as JSLogo } from './images/javascript.svg';
import { ReactComponent as HTMLlogo } from './images/html-5.svg';
import { ReactComponent as Frontend } from './images/frontend.svg';
import { ReactComponent as BrowserLogo } from './images/browser.svg';
import { ReactComponent as AxiosLogo } from './images/axios.svg';
import { ReactComponent as MongooseLogo } from './images/mongoose.svg';



class TechStack extends Component {


    render() {

        const x = 75 // SVG dimension

        return (
            <Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-center text-white">Tech Stack</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            <Frontend height={100} width={100} fill={"#00ffd5"} className="mb-3" />
                                            <br></br>
                                            Front-End
                                        </h5>
                                        <p className="card-text text-center">I create my develop and design with responsiveness in mind.</p>

                                        <ul class="list-group text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <li class="list-group-item"><ReactLogo height={x} width={x} className="mb-2" /><br></br>React.js</li>
                                                    <li class="list-group-item"><HTMLlogo height={x} width={x} className="mb-2" /><br></br>HTML5</li>
                                                    <li class="list-group-item"><CSSLogo height={x} width={x} className="mb-2" /><br></br>CSS3</li>
                                                </div>
                                                <div className="col-6">
                                                    <li class="list-group-item"><SassLogo height={x} width={x} className="mb-2" /><br></br>Sass</li>
                                                    <li class="list-group-item"><JqueryLogo height={x} width={x} className="mb-2" /><br></br>jQuery</li>
                                                    <li class="list-group-item"><BootStrapLogo height={x} width={x} className="mb-2" /><br></br>Bootstrap</li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            <BrowserLogo height={100} width={100} fill={"#00ffd5"} className="mb-3" />
                                            <br></br>
                                            Back-End
                                        </h5>
                                        <p className="card-text text-center">With supporting text below as a natural lead-in </p>
                                        <ul class="list-group text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <li class="list-group-item"><NodeJs height={x} width={x} className="mb-2" /><br></br>Node.js</li>
                                                    <li class="list-group-item"><MongoDB height={x} width={x} className="mb-2" /><br></br>MongoDB</li>
                                                    <li class="list-group-item"><MongooseLogo height={x} width={x} className="mb-2" /><br></br>Mongoose</li>
                                                </div>
                                                <div className="col-6">
                                                    <li class="list-group-item"><ExpressJs height={x} width={x} className="mb-2" /><br></br>ExpressJs</li>
                                                    <li class="list-group-item"><MongoLab height={x} width={x} className="mb-2" /><br></br>MongoLab</li>
                                                    <li class="list-group-item"><AxiosLogo height={x} width={x} className="mb-2" /><br></br>AJAX</li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default TechStack;
