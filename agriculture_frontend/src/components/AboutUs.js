import React from "react";
import "../styles/Homepage.css";
import Header from './Header';
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div>
      <Header />
      <div className="pagemargin  ">
        <body>
          <div class="team-boxed ">
            <div class="container">

              <div class="row people">
                <center>
                  <div class="col-md-1 col-lg-10 item">

                    <div class="box" style={{ minHeight: "400px" }}>
                      <h3 class="name">About Us</h3>
                      <p class="title">GREEN WORLD AGRICULTURE (PVT)</p>
                      <p class="description">
                      Green World Agriculture (PVT) is a leading agricultural company dedicated to promoting sustainable farming 
                      practices and providing high-quality agricultural products and services. With a commitment to environmental 
                      stewardship and innovation, we strive to contribute to the development of a greener and more sustainable world.
                      Our company specializes in various areas of agriculture, including crop cultivation, livestock management, and
                        agricultural consultancy. We work closely with farmers, agricultural communities, and industry partners to
                        enhance productivity, optimize resource utilization, and improve the overall efficiency of agricultural operations.
                      </p> 
                      <img style={{width:'400px'}} src={`https://u-static.fotor.com/images/text-to-image/result/PRO-a476758a23184b1aaed60ed3e38a74bf.jpg`} />
                      <p class="description">
                      At Green World Agriculture, we prioritize the well-being of our clients and the environment. We offer a wide range
                        of premium quality seeds, fertilizers, and agricultural equipment that are carefully selected and tested to ensure
                        optimal performance and sustainability. Our experienced team of agronomists and experts provide personalized guidance
                        and support to farmers, helping them implement best practices and achieve their agricultural goals.
                        We are dedicated to research and development, continuously exploring innovative solutions to address the challenges
                        faced by the agricultural sector. Through collaborations with research institutions and industry experts, we strive
                        to introduce advanced technologies and techniques that promote sustainable farming, increase yield, and reduce environmental
                        impact.
                      </p>
                         <p class="description">
                      As a socially responsible company, we actively engage in community development initiatives and farmer empowerment programs.
                        We believe in empowering farmers with knowledge, skills, and resources to improve their livelihoods and create a positive
                        impact on society.  Green World Agriculture is committed to contributing to a greener and more sustainable future. We aim to be at the forefront
                        of agricultural innovation, providing reliable solutions and services that promote sustainable farming practices and support
                        the growth of the agricultural industry.
                      </p>
                      <img style={{  height: '100px',marginRight:'50px' }} src={`https://pngimg.com/d/award_PNG12.png`} /> 
                      <img style={{  height: '150px',marginRight:'50px' }} src={`https://www.pngplay.com/wp-content/uploads/6/Trophy-Award-Music-Transparent-PNG.png`} /> 
                      <img style={{  height: '100px',marginRight:'50px' }} src={`https://terrakamp.com/wp-content/uploads/agritechnica-2022-gold-badge-innovation-winner-lg.png`} /> 
                  
                      <p class="description">
                      Join us on our journey towards a greener world and sustainable agriculture. Together, we can make a difference.
                      </p>
                      
                      <div class="social">
                        <a href="#">
                          <i class="fa fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>

                      </div>

                    </div>

                  </div>
                </center>
              </div>
            </div>
          </div>
        </body>
      </div>
      <Footer />
    </div>

  );
};

export default Aboutus;
