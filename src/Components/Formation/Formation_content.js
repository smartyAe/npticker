import React from 'react';

function FormationContent() {
    return (
        <div className='ntk-body2'>
            <div className='row'>
                <div className='col-xs-12 col-lg-8'>
                    <div>
                        <h1 className='col-xs-12'>Lorem Ipsum</h1>
                    </div>
                    <p className='small'>
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </p>
                    <video width="100%" height="400vh" controls>
                        <source src="movie.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <div className='col-xs-12 p-3'>
                        <p>
                            <button className='badge text-bg-light ms-2'>Web application</button>
                            <button className='badge text-bg-light ms-2'>Web application</button>
                            <button className='badge text-bg-light ms-2'>Web application</button>
                        </p>
                        <p>
                            Nam sed pharetra metus. Curabitur placerat turpis velit, non accumsan orci dapibus eget. Integer tincidunt blandit odio quis vestibulum. Sed aliquam mi in tortor egestas, efficitur ullamcorper lectus egestas. Sed vel ultrices quam. Mauris gravida rhoncus dignissim. Mauris rhoncus, sapien et finibus placerat, nisl dolor pharetra enim, eu pretium massa nisi quis odio. Suspendisse dictum tortor eget dui sodales, ac laoreet arcu feugiat. Aliquam pulvinar at neque ac fermentum. Cras odio nulla, faucibus vitae erat et, venenatis mattis sem. Phasellus volutpat ultricies nisi id aliquam. Maecenas ac lacinia elit. Nunc vel sapien non risus commodo mollis non sit amet velit. Quisque pharetra eu nisl et mattis.
                        </p>

                    </div>
                    <div>

                    </div>
                </div>
                <div className='col-xs-12 col-lg-4'>
                    <div className='card'>
                        <div className='card-header text-bg-light text-center'>
                            <h2 className='card-header-title'>Liste des vidéos</h2>
                        </div>
                        <div className='card-body p-0 m-0'>
                            <ul className='list-group p-0 m-0'>
                                <li className='list-group-item'>
                                    <div className='d-flex justify-content'>
                                        <img width={130} src="https://picsum.photos/300/150?random=1" className="img-thumbnail" alt="..." />
                                        <div className='p-2'>
                                            <h5 className='v-title'>video 1: Introduction</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='d-flex justify-content'>
                                        <img width={130} src="https://picsum.photos/300/150?random=2" className="img-thumbnail" alt="..." />
                                        <div className='p-2'>
                                            <h5 className='v-title'>video 2: Introduction</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='d-flex justify-content'>
                                        <img width={130} src="https://picsum.photos/300/150?random=3" className="img-thumbnail" alt="..." />
                                        <div className='p-2'>
                                            <h5 className='v-title'>video 3: Introduction</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='d-flex justify-content'>
                                        <img width={130} src="https://picsum.photos/300/150?random=4" className="img-thumbnail" alt="..." />
                                        <div className='p-2'>
                                            <h5 className='v-title'>video 4: Introduction</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='d-flex justify-content'>
                                        <img width={130} src="https://picsum.photos/300/150?random=5" className="img-thumbnail" alt="..." />
                                        <div className='p-2'>
                                            <h5 className='v-title'>video 5: Introduction</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='d-flex justify-content'>
                                        <img width={130} src="https://picsum.photos/300/150?random=6" className="img-thumbnail" alt="..." />
                                        <div className='p-2'>
                                            <h5 className='v-title'>video 6: Introduction</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='d-flex justify-content'>
                                        <img width={130} src="https://picsum.photos/300/150?random=7" className="img-thumbnail" alt="..." />
                                        <div className='p-2'>
                                            <h5 className='v-title'>video 7: Introduction</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormationContent;