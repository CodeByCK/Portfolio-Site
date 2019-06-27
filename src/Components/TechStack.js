import React, { Component, Fragment } from 'react';
import anime from 'animejs'
//Animated SVGs
import BackEndSVG from './BackEndSVG'
import DesignSVG from './DesinSVG';
import FrontendSVG from './FrontendSVG'

import { ReactComponent as ReactLogo } from '../assets/images/react.svg';
import { ReactComponent as MongoDB } from '../assets/images/mongodb.svg';
import { ReactComponent as MongoLab } from '../assets/images/mongolab.svg';
import { ReactComponent as NodeJs } from '../assets/images/nodejs.svg';
import { ReactComponent as ExpressJs } from '../assets/images/express.svg';
import { ReactComponent as BootStrapLogo } from '../assets/images/bootstrap.svg';
import { ReactComponent as CSSLogo } from '../assets/images/css-3.svg';
import { ReactComponent as SassLogo } from '../assets/images/sass.svg';
import { ReactComponent as JqueryLogo } from '../assets/images/jquery.svg';
import { ReactComponent as HTMLlogo } from '../assets/images/html-5.svg';
import { ReactComponent as AxiosLogo } from '../assets/images/axios.svg';
import { ReactComponent as MongooseLogo } from '../assets/images/mongoose.svg';
import { ReactComponent as PhotoshopLogo } from '../assets/images/photoshop-cc.svg';
import { ReactComponent as IllustratorLogo } from '../assets/images/adobe-illustrator-cc.svg';
import { ReactComponent as SketchLogo } from '../assets/images/sketch.svg';


import Slide from 'react-reveal/Slide';




class TechStack extends Component {


    // componentDidMount() {
    //     anime({
    //         targets: 'path',
    //         easing: 'easeInQuad',
    //         duration: 1500,
    //         direction: 'normal',
    //         loop: false
    //     })

    // }

    render() {
        // anime({
        //     targets: 'path',
        //     easing: 'easeInQuad',
        //     duration: 1500,
        //     direction: 'normal',
        //     loop: false
        // })

        const x = 50 // SVG dimension

        return (
            <Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col mb-4">
                                <h1 className="text-center text-white"><span className="tech-text">my</span><span className="stack-text">Stack</span></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <Slide left>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">
                                                <DesignSVG fill={"#00ffd5"} className="mb-3" />
                                                <br></br>
                                                Design
                                            </h5>
                                            <hr></hr>
                                            <p className="card-text text-center">Clean design patterns and content structure for User Experience.</p>
                                            <ul class="list-group text-center">

                                                <li class="list-group-item"><PhotoshopLogo height={x} width={x} className="mb-2" /><br></br>Photoshop</li>
                                                <li class="list-group-item"><IllustratorLogo height={x} width={x} className="mb-2" /><br></br>Illustrator</li>
                                                <li class="list-group-item"><SketchLogo height={x} width={x} className="mb-2" /><br></br>Sketch</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                            <div className="col-lg-4 frontStack">
                                <Slide bottom>

                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">
                                                <FrontendSVG fill={"#00ffd5"} className="mb-3" />
                                                <br></br>
                                                Front-End
                                        </h5>
                                            <hr></hr>
                                            <p className="card-text text-center">Practice clean code, optimize site performance, and latest technologies.</p>

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
                                </Slide>
                            </div>
                            <div className="col-lg-4">
                                <Slide right>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">
                                                <BackEndSVG fill={"#00ffd5"} className="mb-3" />
                                                <br></br>
                                                Back-End
                                        </h5>
                                            <hr></hr>
                                            <p className="card-text text-center">Application optimization, scalability, and data storage solutions. </p>
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
                                </Slide>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default TechStack;
