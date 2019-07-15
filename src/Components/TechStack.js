import React, { Component, Fragment } from 'react';
//Animated SVGs

//SVGs 
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


import { Card, CardItem, BackEndSVG, DesignSVG, FrontendSVG } from './common'

import Slide from 'react-reveal/Slide';




class TechStack extends Component {

    render() {
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
                                    <Card
                                        svgHeader={<DesignSVG fill={"#00ffd5"} className="mb-3" />}
                                        headerText="Design"
                                        slogan="Clean design patterns and content structure for User Experience.">
                                        <CardItem
                                            svgLogo={<PhotoshopLogo height={x} width={x} className="mb-2" />}
                                            title="Photoshop" />
                                        <CardItem
                                            svgLogo={<IllustratorLogo height={x} width={x} className="mb-2" />}
                                            title="Illustrator" />
                                        <CardItem
                                            svgLogo={<SketchLogo height={x} width={x} className="mb-2" />}
                                            title="Sketch" />
                                    </Card>
                                </Slide>
                            </div>
                            <div className="col-lg-4 frontStack">
                                <Slide bottom>
                                    <Card
                                        svgHeader={<FrontendSVG fill={"#00ffd5"} className="mb-3" />}
                                        headerText="Front-End"
                                        slogan="Practice clean code, optimize site performance, and latest technologies.">
                                        <div className="row">
                                            <div className="col-6">
                                                <CardItem
                                                    svgLogo={<ReactLogo height={x} width={x} className="mb-2" />}
                                                    title="React.js" />
                                                <CardItem
                                                    svgLogo={<HTMLlogo height={x} width={x} className="mb-2" />}
                                                    title="HTML5" />
                                                <CardItem
                                                    svgLogo={<CSSLogo height={x} width={x} className="mb-2" />}
                                                    title="CSS3" />
                                            </div>
                                            <div className="col-6">
                                                <CardItem
                                                    svgLogo={<SassLogo height={x} width={x} className="mb-2" />}
                                                    title="Sass" />
                                                <CardItem
                                                    svgLogo={<JqueryLogo height={x} width={x} className="mb-2" />}
                                                    title="jQuery" />
                                                <CardItem
                                                    svgLogo={<BootStrapLogo height={x} width={x} className="mb-2" />}
                                                    title="Bootstrap" />
                                            </div>
                                        </div>
                                    </Card>


                                </Slide>
                            </div>
                            <div className="col-lg-4">
                                <Slide right>
                                    <Card
                                        svgHeader={<BackEndSVG fill={"#00ffd5"} className="mb-3" />}
                                        headerText="Back-End"
                                        slogan="Application optimization, scalability, and data storage solutions.">
                                        <div className="row">
                                            <div className="col-6">
                                                <CardItem
                                                    svgLogo={<NodeJs height={x} width={x} className="mb-2" />}
                                                    title="Node.js" />
                                                <CardItem
                                                    svgLogo={<MongoDB height={x} width={x} className="mb-2" />}
                                                    title="MongoDB" />
                                                <CardItem
                                                    svgLogo={<MongooseLogo height={x} width={x} className="mb-2" />}
                                                    title="Mongoose" />
                                            </div>
                                            <div className="col-6">
                                                <CardItem
                                                    svgLogo={<ExpressJs height={x} width={x} className="mb-2" />}
                                                    title="Express.js" />
                                                <CardItem
                                                    svgLogo={<MongoLab height={x} width={x} className="mb-2" />}
                                                    title="MongoLab" />
                                                <CardItem
                                                    svgLogo={<AxiosLogo height={x} width={x} className="mb-2" />}
                                                    title="AJAX" />
                                            </div>
                                        </div>
                                    </Card>
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
