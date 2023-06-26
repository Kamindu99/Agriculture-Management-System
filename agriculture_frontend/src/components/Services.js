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
                            <div class="box" onClick={()=>{window.location.replace('/admin/agriseed/all')}}>
                                <div class="our-services settings">
                                    <div class="icon"> <img src="https://i.imgur.com/6NKPrhO.png" /> </div>
                                    <h4>Seeds</h4>
                                    <p> Seeds are the primary basis for human sustenance. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" >
                            <div class="box" onClick={()=>{window.location.replace('/admin/agriplant/all')}}>
                                <div class="our-services speedup">
                                    <div class="icon"> <img src="https://i.imgur.com/KMbnpFF.png" /> </div>
                                    <h4>Plants</h4>
                                    <p> Plants are mainly multicellular organisms, predominantly photosynthetic</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box" onClick={()=>{window.location.replace('/admin/agriequipment/all')}}>
                                <div class="our-services privacy">
                                    <div class="icon"> <img src="https://i.imgur.com/AgyneKA.png" /> </div>
                                    <h4>Equipments</h4>
                                    <p> Equipments are the different types of machinery used in agriculture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box" onClick={()=>{window.location.replace('/admin/agrifertilizer/all')}}>
                                <div class="our-services backups">
                                    <div class="icon"> <img src="https://i.imgur.com/vdH9LKi.png" /> </div>
                                    <h4>Fertilizer</h4>
                                    <p> Fertilizer is any material of natural or synthetic origin that</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box" onClick={()=>{window.location.replace('/admin/agrochemical/all')}}>
                                <div class="our-services ssl">
                                    <div class="icon"> <img src="https://i.imgur.com/v6OnUqu.png" /> </div>
                                    <h4>Chemicals</h4>
                                    <p> Chemicals are substances made up of two or more atoms of </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box" onClick={()=>{window.location.replace('#')}}>
                                <div class="our-services database">
                                    <div class="icon"> <img src="https://i.imgur.com/VzjZw9M.png" /> </div>
                                    <h4>Feedbacks</h4>
                                    <p>
                                        Feedback is a process in which information about the past 
                                    </p>
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