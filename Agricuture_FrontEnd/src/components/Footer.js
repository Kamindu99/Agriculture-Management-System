import React from "react";
import '../styles/HeaderStyles.css'

function Footer() {
  return (
    <div className="mainfooter">
   

      
        
          <p className="">
          <center>
            <a href="#">
              <i class="fab fa-facebook-f" style={{ color: "#adadad" }}></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-twitter" style={{ color: "#adadad" }}></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-instagram" style={{ color: "#adadad" }}></i>
            </a>{" "}</center>
          <br/>
           <hr/>
            <center><p>
            &copy; {new Date().getFullYear()} Dream Travelers | All rights
            reserved | Terms Of Service | Privacy</p></center>
          </p>
       
     
    </div>
  );
}

export default Footer;
