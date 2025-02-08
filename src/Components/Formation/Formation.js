import React from 'react';
import dexpertise from "../Home/images/dexpertise.png";
import Sidebar from '../Sidebar/SideBar';
import PresentationContainer from '../PresentationContainer/PresentationContainer';

function Formation() {
    return ( 
        <section>
            <div className='ntk-body'>
                <PresentationContainer estyle={{ width: "100%", height: "12em" }} />
                
                <div className='text-center mt-3 p-3'>
                    <button className='btn btn-primary ms-3'>Building software</button>
                    <button className='btn btn-outline-primary ms-3'>Reporting</button>
                    <button className='btn btn-outline-primary ms-3'>Teaching</button>
                    <button className='btn btn-outline-primary ms-3'>Consulting</button>
                </div>
                <div className='d-flex justify-content-between px-3'>
                    <div className='col-xs-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <img width={"100%"} height={"80%"} src={dexpertise}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-xs-7 px-5 py-3'>
                        <h1>Lorem Ipsum</h1>
                        <p className='small'>
                            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                        </p>
                        <p>
                                    <button className='badge text-bg-light ms-2'>Web application</button>
                                    <button className='badge text-bg-light ms-2'>Web application</button>
                                    <button className='badge text-bg-light ms-2'>Web application</button>
                                </p>
                        <p>
                            Nam sed pharetra metus. Curabitur placerat turpis velit, non accumsan orci dapibus eget. Integer tincidunt blandit odio quis vestibulum. Sed aliquam mi in tortor egestas, efficitur ullamcorper lectus egestas. Sed vel ultrices quam. Mauris gravida rhoncus dignissim. Mauris rhoncus, sapien et finibus placerat, nisl dolor pharetra enim, eu pretium massa nisi quis odio. Suspendisse dictum tortor eget dui sodales, ac laoreet arcu feugiat. Aliquam pulvinar at neque ac fermentum. Cras odio nulla, faucibus vitae erat et, venenatis mattis sem. Phasellus volutpat ultricies nisi id aliquam. Maecenas ac lacinia elit. Nunc vel sapien non risus commodo mollis non sit amet velit. Quisque pharetra eu nisl et mattis.
                        </p>
                        
                        <div className='text-center mt-4'>
                                <button className='btn btn-primary'>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                    Commencer le cours
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
     );
}

export default Formation;