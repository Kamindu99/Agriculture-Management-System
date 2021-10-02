import React from "react"
import '../styles/HeaderStyles.css'

const Homepage = ()=>{
    return(
        <div className="bodyheader">

<header class="navbar navbar-bright navbar-fixed-top" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="/" class="navbar-brand">Hello</a>
    </div>
    <nav class="collapse navbar-collapse" role="navigation">
      <ul class="nav navbar-nav">
        <li>
          <a href="/agriequipment/all">Equipments</a>
        </li>
        <li>
          <a href="#">Edit</a>
        </li>
        <li>
          <a href="#">Visualize</a>
        </li>
        <li>
          <a href="#">Prototype</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<div id="masthead">  
  <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h1>Agry House
            <p class="lead">Fast Agriculture services to you.!</p>
          </h1>
        </div>
        <div class="col-md-5">
            <div class="well well-lg"> 
              <div class="row">
                <div class="col-sm-6">
        	      	<img src="//placehold.it/180x100" class="img-responsive"/>
                </div>
                <div class="col-sm-6">
	              	<strong>Important</strong>
                  	<p>Blah blah blah blah bla!</p>
                </div>
              </div>
            </div>
        </div>
      </div> 
  </div>
</div>

<div class="">
	<div class=""> 
  			<div class="col-md-2 listitmesa" id="leftCol" style={{background:"rgb(2, 63, 43)",minHeight:"500px"}}>
              
              	<ul class="nav nav-stacked listitmes" id="sidebar">
                  <li ><a href="#sec0">Home</a></li>
                  <li><a href="/agriseed/all">Seeds</a></li>
                  <li><a href="#sec2">Plants</a></li>
                  <li><a href="/agriequipment/all">Equipments</a></li>
                  <li><a href="#sec4">Fertilizer</a></li>
                  <li><a href="#sec4">Agrochemicals</a></li>
                  <li><a href="#sec4">Inquiry</a></li>
                  <li><a href="#sec4">My Account</a></li>
              	</ul>
              
      		</div>  
      	
  	</div>
</div>

        </div>
    )
}

export default Homepage;




























