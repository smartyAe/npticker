import React from 'react';
import Sidebar from '../Sidebar/SideBar';
import PresentationContainer from '../PresentationContainer/PresentationContainer';

function Blog() {
    return (
        <section>
            <div className='ntk-body'>
                <PresentationContainer estyle={{ width: "100%", height: "12em" }} />
                
                <div className='text-center mt-3 p-3'>
                    <button className='btn btn-primary ms-3'>Programmation</button>
                    <button className='btn btn-outline-primary ms-3'>Software</button>
                    <button className='btn btn-outline-primary ms-3'>Data & Reporting</button>
                    <button className='btn btn-outline-primary ms-3'>Intelligence artificial</button>
                </div>
                <div className='mt-3'>
                    <div className="card col-xs-12 col-sm-12 col-md-12 ms-3">
                        <div className="card-body">
                            <h5 className="card-title">Domaine d'expertise</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                    <div className='text-center m-3'>
                        <button className='btn btn-primary'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Load more projects
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;