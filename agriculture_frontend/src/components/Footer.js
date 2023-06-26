import React from "react";
import '../styles/HeaderStyles.css'

function Footer() {
  return (
    <div className="mainfooter">
   

      
        
          <p>
          <center  style={{fontSize:"20px"}}>
          <a class="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a class="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a class="waves-effect waves-dark" href="#"><i class="fa fa-instagram"></i></a></center>
          <br/>
           <hr/>
            <center><p>
            &copy; {new Date().getFullYear()} Green World | All rights
            reserved | Terms Of Service | Privacy</p></center>
            <center><span style={{color:'#9b9b9b'}} >Created by Kamindu Gayantha</span></center>
          </p>
       
     
    </div>
  );
}

export default Footer;
