import React from "react"
import '../styles/HeaderStyles.css'

const Homepage = () => {

  const str = window.location.href;
  const path = window.location.pathname;
  const isHome = path === '/';

  const isSeed = str.includes('/agriseed');
  const isPlant = str.includes('/agriplant');
  const isFood = str.includes('/agrifood');
  const isEquipment = str.includes('/agriequipment');
  const isFertilizer = str.includes('/agrifertilizer');
  const isAgroChemicle = str.includes('/agrochemical');
  const isAboutUs = str.includes('/aboutus');
  const isContactUs = str.includes('/contactus');

  return (
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
            <a class="navbar-brand" style={{ textTransform: "uppercase" }}>
            <img style={{ width: '70px', height: '50px',marginRight:'20px',marginTop:'-3%',marginBottom:'-2%' }} src={`https://www.pngmart.com/files/22/Plant-PNG-Isolated-File.png`} />
              Green World Agriculture (pvt)</a>
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
          <li class={` ${isHome ? 'activebar' : ''}`}>
            <a href="/">
              <i class={`fa fa-home`} aria-hidden="true"></i> Homepage
            </a>
          </li>

          <li class="header">Items</li>
          <li class={` ${isSeed ? 'activebar' : ''}`}>
            <a href="/agriseed/all">
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Seeds
            </a>
          </li>
          <li class={` ${isPlant ? 'activebar' : ''}`}>
            <a href="/agriplant/all">
              <i class="fa fa-tree  ms-1" style={{marginRight:'12px'}} aria-hidden="true"></i> Plants
            </a>
          </li>
          {/* <li class={` ${isFood ? 'activebar' : ''}`}>
            <a href="#">
              <i class="fa fa-apple" aria-hidden="true"></i> Foods
            </a>
          </li> */}
          <li class={` ${isEquipment ? 'activebar' : ''}`}>
            <a href="/agriequipment/all">
              <i class="fa fa-map-signs" aria-hidden="true"></i> Equipments
            </a>
          </li>
          <li class={` ${isFertilizer ? 'activebar' : ''}`}>
            <a href="/agrifertilizer/all">
              <i class="fa fa-sign-language" aria-hidden="true"></i> Fertilizer
            </a>
          </li>
          <li class={` ${isAgroChemicle ? 'activebar' : ''}`}>
            <a href="/agrochemical/all">
              <i class="fa fa-fire-extinguisher" aria-hidden="true"></i> Agro Chemical
            </a>
          </li>
          <li class="header">Services</li>
          <li >
            <a href="#">
              <i class="fa fa-book" aria-hidden="true"></i> Blogs
            </a>
          </li>
          <li >
            <a href="#">
              <i class="fa fa-sign-language" aria-hidden="true"></i> Documents
            </a>
          </li>

          <li class="header">For You</li>
          <li class={` ${isAboutUs ? 'activebar' : ''}`}>
            <a href="/aboutus">
              <i class="fa fa-handshake-o " aria-hidden="true"></i> About Us
            </a>
          </li>

          <li class={` ${isContactUs ? 'activebar' : ''}`}>
            <a href="/contactus">
              <i class="fa fa-comments-o " aria-hidden="true"></i> Contact Us
            </a>
          </li>


        </ul>
      </div>


    </div>
  )
}

export default Homepage;




























