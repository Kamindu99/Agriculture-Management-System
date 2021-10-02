import React from "react"
import '../styles/HeaderStyles.css'

const Homepage = ()=>{
    return(
      <div>
<div class="fixed-top">
  <header class="topbar">
      <div class="container">
        <div class="row">
      
          <div class="col-sm-12">
            <ul class="social-network">
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
      <a class="navbar-brand" href="index.html" style={{textTransform: "uppercase"}}>Green World</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="navbar-nav ml-auto">

          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>

         <li class="nav-item">
            <a class="nav-link" href="#">Fruits</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Sea food</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Vegetables</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>


<div class="sidebar-container">
  <div class="sidebar-logo">
    Project Name
  </div>
  <ul class="sidebar-navigation">
    <li class="header">Navigation</li>
    <li>
      <a href="/">
        <i class="fa fa-home" aria-hidden="true"></i> Homepage
      </a>
    </li>
    
    <li class="header">Items</li>
    <li>
      <a href="/agriseed/all">
        <i class="fa fa-users" aria-hidden="true"></i> Seeds
      </a>
    </li>
    <li>
      <a href="/agriplant/all">
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
      <a href="/agriequipment/all">
        <i class="fa fa-users" aria-hidden="true"></i> Equipment
      </a>
    </li>
    <li>
      <a href="/agrifertilizer/all">
        <i class="fa fa-cog" aria-hidden="true"></i> Fertilizer
      </a>
    </li>
    <li>
      <a href="/agrochemical/all">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Agro Chemical
      </a>
    </li>

    <li class="header">For You</li>
    <li>
      <a href="#">
        <i class="fa fa-tachometer" aria-hidden="true"></i> About Us
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-tachometer" aria-hidden="true"></i> FeedBack
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-tachometer" aria-hidden="true"></i> Contact Us
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-tachometer" aria-hidden="true"></i> Inquiry
      </a>
    </li>
  
  </ul>
</div>

<div class="content-container">

  <div class="container-fluid">

    <div class="jumbotron">
      <h1>Navbar example</h1>
      <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
      <p>To see the difference between static and fixed top navbars, just scroll.</p>
      <p>
        <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
      </p>
    </div>

  </div>
</div>












        </div>
    )
}

export default Homepage;




























