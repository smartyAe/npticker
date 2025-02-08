import React from 'react';
import imgHome from '../../home-img.png';
import logo from '../../logo-lg-nptker.png';
import dexpertise from "./images/dexpertise.png";
import intervention from "./images/intervention.png";
import formation from "./images/formation.png";
import ambition from "./images/ambition.png";
import PresentationContainer from '../PresentationContainer/PresentationContainer';
import BorderedMsg from '../PresentationContainer/BorderedMsg';

function Home() {
    return (
        <div className='ntk-body'>
            <PresentationContainer text1="Welcome to" text2="Stop struggling with it, we are here! Let try it out together !" estyle={{ width: "100%", height: "12em" }} img={imgHome} logo={logo} />
            <BorderedMsg estyle={{ width: "50%", height: "3em", margin: "3.5% 25% 2%" }} text={{ class: "ntk-h1", content: "Overview" }} />
            <div>
                <p className='py-3 px-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a sollicitudin ex. Nam mollis ut urna ac euismod. Aliquam eleifend lacus sit amet tristique euismod. Curabitur ornare quam sem, vel iaculis velit lacinia ut. Mauris a dapibus nulla, at convallis erat. Vestibulum metus nulla, egestas at urna ac, tempus euismod ligula. Mauris ultrices felis sodales diam maximus, vel gravida orci pellentesque.
                </p>
            </div>
            <div className='d-flex justify-content-between text-center'>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <div className="card-body">
                        <h5 className="card-title">Building software</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">View more</a>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <div className="card-body">
                        <h5 className="card-title">Reporting</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">View more</a>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <div className="card-body">
                        <h5 className="card-title">Teaching</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">View more</a>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <div className="card-body">
                        <h5 className="card-title">Consulting</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">View more</a>
                    </div>
                </div>

            </div>

            <BorderedMsg estyle={{ width: "50%", height: "3em", margin: "3.5% 25% 2%" }} text={{ class: "ntk-h1", content: "Work process" }} />
            <div>
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BorderedMsg estyle={{ width: "50%", height: "3em", margin: "3.5% 25% 2%" }} text={{ class: "ntk-h1", content: "Great clients We've worked with" }} />
            <div>
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <blockquote class="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <blockquote class="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BorderedMsg estyle={{ width: "50%", height: "3em", margin: "3.5% 25% 2%" }} text={{ class: "ntk-h1", content: "Take a look to some projects" }} />
            <div>
                <div className='d-flex justify-content-between p-3'>
                    <div className="card col-xs-12 col-sm-6 col-md-4 ms-3" style={{ height: "10%" }}>
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className='text-center'>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                            </p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-4 ms-3" style={{ height: "10%" }}>
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className='text-center'>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                            </p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-4 ms-3" style={{ height: "10%" }}>
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className='text-center'>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                                <button className='badge text-bg-light ms-2'>Web application</button>
                            </p>
                        </div>
                    </div>

                </div>
                <div className='text-center'>
                        <button className='btn btn-outline-primary'>view all projects</button>
                </div>
            </div>
            <BorderedMsg estyle={{ width: "50%", height: "3em", margin: "3.5% 25% 2%" }} text={{ class: "ntk-h1", content: "Our lastest posts" }} />
            <div>
                <div className='d-flex justify-content-between p-3'>
                    <div className="card col-xs-12 col-sm-6 col-md-6 ms-3">
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-6 ms-3">
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                    <div className="card col-xs-12 col-sm-6 col-md-6 ms-3">
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-6 ms-3">
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
                <div className='text-center'>
                    <button className='btn btn-outline-primary'>view all posts</button>
                </div>
            </div>
        </div>
    );
}

export default Home;