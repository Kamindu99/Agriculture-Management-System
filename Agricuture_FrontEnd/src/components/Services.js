import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Services() {

    return (
        <div>
            <Header />
            <div className="pagemargin">
            <br/>
                <div class="container-fluid mb-5 myservices">
                    <div class="text-center mt-5">
                        <h1>Our Services</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box">
                                <div class="our-services settings">
                                    <div class="icon"> <img src="https://i.imgur.com/6NKPrhO.png" /> </div>
                                    <h4>Settings</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">
                                <div class="our-services speedup">
                                    <div class="icon"> <img src="https://i.imgur.com/KMbnpFF.png" /> </div>
                                    <h4>Speedup</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">
                                <div class="our-services privacy">
                                    <div class="icon"> <img src="https://i.imgur.com/AgyneKA.png" /> </div>
                                    <h4>Privacy</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box">
                                <div class="our-services backups">
                                    <div class="icon"> <img src="https://i.imgur.com/vdH9LKi.png" /> </div>
                                    <h4>Backups</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">
                                <div class="our-services ssl">
                                    <div class="icon"> <img src="https://i.imgur.com/v6OnUqu.png" /> </div>
                                    <h4>SSL secured</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">
                                <div class="our-services database">
                                    <div class="icon"> <img src="https://i.imgur.com/VzjZw9M.png" /> </div>
                                    <h4>Database</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <Footer />
        </div>

    )
}

export default Services