import React from 'react';
import imgHome from '../../home-img.png';
import logo from '../../logo-lg-nptker.png';
import dexpertise from "./images/dexpertise.png";
import intervention from "./images/intervention.png";
import formation from "./images/formation.png";
import ambition from "./images/ambition.png";
import PresentationContainer from '../PresentationContainer/PresentationContainer';
import BorderedMsg from '../BorderedMsg/BorderedMsg';

function Home() {
    return (
        <div className='ntk-body'>
            <PresentationContainer estyle={{ width: "100%", height: "12em" }} img={imgHome} logo={logo} />
            <BorderedMsg estyle={{ width: "50%", height: "3em", margin: "3.5% 25% 2%" }} text={{ class: "ntk-h1", content: "Overview" }} />

            <div className='d-flex justify-content-between'>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <img src={dexpertise} width={"40em"} height={"40%"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Domaine d'expertise</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <img src={dexpertise} width={"40em"} height={"40%"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Notre ambition</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <img src={dexpertise} width={"40em"} height={"40%"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nos formations</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-6 col-md-3 ms-3">
                    <img src={intervention} width={"40em"} height={"40%"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nos interventions</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
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
            <BorderedMsg estyle={{ width: "50%", height: "3em", margin: "3.5% 25% 2%" }} text={{ class: "ntk-h1", content: "Testmonial" }} />
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

        </div>
    );
}

export default Home;