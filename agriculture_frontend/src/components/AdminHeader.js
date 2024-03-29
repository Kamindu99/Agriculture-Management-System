import React from "react"
import '../styles/HeaderStyles.css'

const AdminHeader = ()=>{
    return(
      <div>
<div class="fixed-top">
  <header class="topbar">
      <div class="container">
        <div class="row">
      
          <div class="col-sm-12">
            <ul class="social-network">
               <p>  {new Date().getFullYear()} : {new Date().getMonth()} : {new Date().getDate()} - {new Date().toLocaleTimeString()}</p>
               <li><a class="waves-effect waves-dark"></a></li>
               <li><a class="waves-effect waves-dark"></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-pinterest"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
  </header>
  <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
    <div class="container">
      <a class="navbar-brand" href="index.html" style={{textTransform: "uppercase"}}>Green World Agriculture (pvt)</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="navbar-nav ml-auto">

          <li class="nav-item active">
            <a class="nav-link" href="/">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/aboutus">About Us</a>
          </li>

         <li class="nav-item">
            <a class="nav-link" href="/feedback">FeedBack</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Inquiry</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/services">Services</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Conmany</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>


<div class="sidebar-container">
  
  <ul class="sidebar-navigation">
    <li class="header">Green World</li>
    <li>
      <a href="/adminhome">
        <i class="fa fa-home" aria-hidden="true"></i> Homepage
      </a>
    </li>
    
    <li class="header">Items</li>
    <li>
      <a href="/admin/agriseed/all">
        <i class="fa fa-users" aria-hidden="true"></i> Seeds
      </a>
    </li>
    <li>
      <a href="/admin/agriplant/all">
        <i class="fa fa-cog" aria-hidden="true"></i> Plants
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Foods
      </a>
    </li>
    <li class="header">Services</li>
    <li>
      <a href="/admin/agriequipment/all">
        <i class="fa fa-users" aria-hidden="true"></i> Equipment
      </a>
    </li>
    <li>
      <a href="/admin/agrifertilizer/all">
        <i class="fa fa-cog" aria-hidden="true"></i> Fertilizer
      </a>
    </li>
    <li>
      <a href="/admin/agrochemical/all">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Agro Chemical
      </a>
    </li>

    <li class="header">For You</li>
    <li>
      <a href="/aboutus">
        <i class="fa fa-tachometer" aria-hidden="true"></i> About Us
      </a>
    </li>
   
    <li>
      <a href="/admin/contactus">
        <i class="fa fa-tachometer" aria-hidden="true"></i> Contact Us
      </a>
    </li>
    
  
  </ul>
</div>


        </div>
    )
}

export default AdminHeader;