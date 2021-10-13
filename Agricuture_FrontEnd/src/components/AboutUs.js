import React from "react";
import "../styles/Homepage.css";
import Header from './Header';
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div>
      <Header/>
      <div className="pagemargin  ">
        <body>
          <div class="team-boxed ">
            <div class="container">
           
              <div class="row people">
            <center>
       
                <div class="col-md-1 col-lg-10 item">
               
                  <div class="box" style={{minHeight:"400px"}}> 
                    <h3 class="name">About Us</h3>
                    <p class="title">GREEN WORLD AGRICULTURE (PVT)</p>
                    <p class="description">
                    Agricultural development is one of the most powerful tools to end extreme poverty, boost shared prosperity and feed a projected 9.7 billion people by 2050. Growth in the agriculture sector is two to four times more effective in raising incomes among the poorest compared to other sectors. Analyses in 2016 found that 65 percent of poor working adults made a living through agriculture.{" "}
                    </p>
                    <p class="description">
                    Agricultural development is one of the most powerful tools to end extreme poverty, boost shared prosperity and feed a projected 9.7 billion people by 2050. Growth in the agriculture sector is two to four times more effective in raising incomes among the poorest compared to other sectors. Analyses in 2016 found that 65 percent of poor working adults made a living through agriculture.{" "}
                    </p>
                    <p class="description">
                    Agricultural development is one of the most powerful tools to end extreme poverty, boost shared prosperity and feed a projected 9.7 billion people by 2050. Growth in the agriculture sector is two to four times more effective in raising incomes among the poorest compared to other sectors. Analyses in 2016 found that 65 percent of poor working adults made a living through agriculture.{" "}
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
      <Footer/>
    </div>
    
  );
};

export default Aboutus;
