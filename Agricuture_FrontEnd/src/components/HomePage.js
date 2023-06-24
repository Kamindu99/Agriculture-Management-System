import React from "react"
import '../styles/Homepage.css'
import Header from './Header';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="pagemargin">
        <br />
        <div id="carouselExampleDark" class="carousel  slide carousel-fade" data-bs-ride="carousel" style={{ margin: "20px" }}>
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2500">
              <img src="https://alliance.edu.in/blog/wp-content/uploads/2021/10/indian-agri-supplychain-01-sep2021.jpg" class="d-block w-100" alt="..." style={{ height: "300px", objectFit: 'cover' }} />
              <div class="carousel-caption d-none d-md-block">
                <h5>Agricultural Farm</h5>
                <p>Agricultural Farm is a place where crops are grown and livestock are raised for sustenance and profit.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2500">
              <img src="https://www.asc-csa.gc.ca/images/satellites/quotidien/agriculture-facebook.jpg" class="d-block w-100" alt="..." style={{ height: "300px", objectFit: 'cover' }} />
              <div class="carousel-caption d-none d-md-block">
                <h5>Modern Agricultural</h5>
                <p> Modern agriculture is an evolving approach to agricultural innovations and farming practices that help farmers.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2500">
              <img src="https://www.ciiblog.in/wp-content/uploads/2020/10/AI.png" class="d-block w-100" alt="..." style={{ height: "300px", objectFit: 'cover' }} />
              <div class="carousel-caption d-none d-md-block">
                <h5>Artificial Intelligence in Agriculture</h5>
                <p>Artificial intelligence (AI) is a branch of computer science that aims to create intelligent machines.</p>
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

        <p style={{ margin: "20px", fontSize: "15px", textAlign: "justify" }}><p>Agricultural development is one of the most powerful tools to end extreme poverty, boost shared prosperity and feed a projected 9.7 billion people by 2050. Growth in the agriculture sector is two to four times more effective in raising incomes among the poorest compared to other sectors. Analyses in 2016 found that 65 percent of poor working adults made a living through agriculture.</p>

          <p>Agriculture is also crucial to economic growth: in 2018, it accounted for 4 percent of global gross domestic product (GDP) and in some developing countries, it can account for more than 25% of GDP. But agriculture-driven growth, poverty reduction, and food security are at risk: Climate change could cut crop yields, especially in the worldâ€™s most food-insecure regions. Agriculture, forestry and land use change are responsible for about 25 percent of greenhouse gas emissions. Mitigation in the agriculture sector is part of the solution to climate change.</p>

          <p>The current food system also threatens the health of people and the planet: agriculture accounts for 70 percent of water use and generates unsustainable levels of pollution and waste. 1/3 of food produced globally is either lost or wasted. Addressing food loss and waste is critical to improving food and nutrition security, as well as helping to meet climate goals and reduce stress on the environment.</p>

          <p>Risks associated with poor diets are also the leading cause of death worldwide. Millions of people are either not eating enough or eating the wrong types of food, resulting in a double burden of malnutrition that can lead to illnesses and health crises. A 2020 report found that nearly 690 million peopleâ€”or 8.9 percent of the global populationâ€”are hungry, up by nearly 60 million in five years. Food insecurity can worsen diet quality and increase the risk of various forms of malnutrition, potentially leading to undernutrition as well as people being overweight and obese. The cost of healthy diets is unaffordable for more than 3 billion people in the world.</p></p>



        <div class="container homepagecss">
          <div class="row ">
            <div class="col-lg-4">
              <div class="card card-margin">
                <div class="card-header no-border">
                  <h5 class="card-title">MOM</h5>
                </div>
                <div class="card-body pt-0">
                  <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                      <div class="widget-49-date-primary">
                        <span class="widget-49-date-day">09</span>
                        <span class="widget-49-date-month">apr</span>
                      </div>
                      <div class="widget-49-meeting-info">
                        <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                        <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                      </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                      <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                      <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                      <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                      <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 ">
              <div class="card card-margin">
                <div class="card-header no-border">
                  <h5 class="card-title">MOM</h5>
                </div>
                <div class="card-body pt-0">
                  <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                      <div class="widget-49-date-warning">
                        <span class="widget-49-date-day">13</span>
                        <span class="widget-49-date-month">apr</span>
                      </div>
                      <div class="widget-49-meeting-info">
                        <span class="widget-49-pro-title">PRO-08235 Lexa Corp.</span>
                        <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                      </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                      <li class="widget-49-meeting-item"><span>Scheming module is removed</span></li>
                      <li class="widget-49-meeting-item"><span>App design contract confirmed</span></li>
                      <li class="widget-49-meeting-item"><span>Client request to send invoice</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                      <a href="#" class="btn btn-sm btn-flash-border-warning">View All</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-margin">
                <div class="card-header no-border">
                  <h5 class="card-title">MOM</h5>
                </div>
                <div class="card-body pt-0">
                  <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                      <div class="widget-49-date-success">
                        <span class="widget-49-date-day">22</span>
                        <span class="widget-49-date-month">apr</span>
                      </div>
                      <div class="widget-49-meeting-info">
                        <span class="widget-49-pro-title">PRO-027865 Opera module</span>
                        <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                      </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                      <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                      <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                      <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                      <a href="#" class="btn btn-sm btn-flash-border-success">View All</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div class="container mynewcss">
        <div class="d-lg-flex">
            <div class="d-md-flex align-items-center mb-lg-0 mb-md-5">
                <div class="col1 me-md-4 mb-md-0 mb-5">
                    <div class="card pb-4">
                        <span class="fab fa-envira mt-3"></span>
                        <p class="h4 pt-4">Garden Care</p>
                        <p class="p1 text-muted">
                            Seeking justice in the world is a sed significant emotional and investment when we follow
                            this
                            call.
                        </p>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
                <div class="col2 me-md-4 mb-md-0 mb-5">
                    <div class="card pb-4">
                        <span class="fas fa-cut mt-3"></span>
                        <p class="h4 pt-4">Lawn mowing</p>
                        <p class="p1 text-muted">
                            Seeking justice in the world is a sed significant emotional and investment when we follow
                            this
                            call.
                        </p>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
                <div class="col3 me-md-4 mb-md-0 mb-5">
                    <div class="card pb-4">
                        <span class="fas fa-people-carry mt-3"></span>
                        <p class="h4 pt-4">Lawn care</p>
                        <p class="p1 text-muted">
                            Seeking justice in the world is a sed significant emotional and investment when we follow
                            this
                            call.
                        </p>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
            <div class="col4">
                <div class="content">
                    <span class="h-6">Services</span>
                    <p class=" h2 mb-4">Lawn Services</p>
                    <p class="text-muted mb-4">A small river named Duden flows by their place and supplies it with the
                        necessary regelialia. It
                        is a paradisematic country, in which roasted parts of sentences fly into your.</p>
                    <p><a href="#" class="btn btn-primary">Get a Quote</a></p>
                </div>
            </div>
        </div>
    </div>















        <header class=" text-center py-5 mb-4">
          <div class="container">
            <h1 class="fw-light">Meet the Team</h1>
          </div>
        </header>


        <div class="container">
          <div class="row">

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_27_yw37mj.jpg" style={{height:'300px', objectFit: 'cover'}} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Kamindu Gayantha</h5>
                  <div class="card-text text-black-50">CEO of the Company </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378621/MyImages/Myimages_17_jxymkn.jpg" style={{height:'300px', objectFit: 'cover'}} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Gayantha Kamindu</h5>
                  <div class="card-text text-black-50">
                    Manager of the Company
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img src="https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A" style={{height:'300px', objectFit: 'cover'}} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Gayantha Wanigasinghe</h5>
                  <div class="card-text text-black-50">
                    Director of the Company
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378620/MyImages/Myimages_8_jpvo51.jpg"  style={{height:'300px', objectFit: 'cover'}} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">K G Wanigasinghe</h5>
                  <div class="card-text text-black-50">
                    Chairman of the Company
                  </div>
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

export default Homepage;

