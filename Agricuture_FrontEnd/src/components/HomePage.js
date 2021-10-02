import React from "react"
import '../styles/Homepage.css'

const Homepage = ()=>{
    return(
        <div className="pagemargin">
            <br/>
<div id="carouselExampleDark" class="carousel  slide carousel-fade" data-bs-ride="carousel" style={{margin:"20px"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2500">
      <img src="./uploads/z1.jpg" class="d-block w-100" alt="..." style={{height:"300px"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2500">
      <img src="./uploads/z2.jpg" class="d-block w-100" alt="..."  style={{height:"300px"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2500">
      <img src="./uploads/z3.jpg" class="d-block w-100" alt="..."  style={{height:"300px"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<p style={{margin:"20px",fontSize:"15px",textAlign:"justify"}}><p>Agricultural development is one of the most powerful tools to end extreme poverty, boost shared prosperity and feed a projected 9.7 billion people by 2050. Growth in the agriculture sector is two to four times more effective in raising incomes among the poorest compared to other sectors. Analyses in 2016 found that 65 percent of poor working adults made a living through agriculture.</p>

<p>Agriculture is also crucial to economic growth: in 2018, it accounted for 4 percent of global gross domestic product (GDP) and in some developing countries, it can account for more than 25% of GDP. But agriculture-driven growth, poverty reduction, and food security are at risk: Climate change could cut crop yields, especially in the worldâ€™s most food-insecure regions. Agriculture, forestry and land use change are responsible for about 25 percent of greenhouse gas emissions. Mitigation in the agriculture sector is part of the solution to climate change.</p>

<p>The current food system also threatens the health of people and the planet: agriculture accounts for 70 percent of water use and generates unsustainable levels of pollution and waste. 1/3 of food produced globally is either lost or wasted. Addressing food loss and waste is critical to improving food and nutrition security, as well as helping to meet climate goals and reduce stress on the environment.</p>

<p>Risks associated with poor diets are also the leading cause of death worldwide. Millions of people are either not eating enough or eating the wrong types of food, resulting in a double burden of malnutrition that can lead to illnesses and health crises. A 2020 report found that nearly 690 million peopleâ€”or 8.9 percent of the global populationâ€”are hungry, up by nearly 60 million in five years. Food insecurity can worsen diet quality and increase the risk of various forms of malnutrition, potentially leading to undernutrition as well as people being overweight and obese. The cost of healthy diets is unaffordable for more than 3 billion people in the world.</p></p>

        </div>
    )
}

export default Homepage;

