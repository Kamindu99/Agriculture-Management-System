import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'
import Header from '../Header';
import Footer from '../Footer';

export default class AgroChemical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agrochemicals: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.retrieveagrochemical();
  }

  retrieveagrochemical() {
    this.setState({ isLoading: true });

    axios.get("https://agribackend.onrender.com/agrochemical")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            agrochemicals: res.data.existingAgrochemical,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }


  filterData(agrochemicals, searchkey) {
    const result = agrochemicals.filter(
      (post) =>
        post.agrochemicalName.toLowerCase().includes(searchkey) ||
        post.agrochemicalName.toUpperCase().includes(searchkey)
    );
    this.setState({ agrochemicals: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    this.setState({ isLoading: true });
    axios.get("https://agribackend.onrender.com/agrochemical").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingAgrochemical, searchkey);
        this.setState({ isLoading: false });
      }
    })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      }
      );
  };

  render() {


    return (
      <div>
        <Header />
        <div className="pagemargin">


          <div class=""
            style={{

              backgroundColor: "hsla(101, 27%, 53%, 0.27)",
              paddingBottom: "5px",
              paddingTop: "7px",
              display: 'none'
            }}
          >
            <button
              style={{ marginLeft: "30px" }}
              id="search-button"
              type="button"
              class="btn btn-primary"
            >
              <i class="fas fa-search"></i><a style={{ textDecoration: "none", color: "white" }} href="/agrochemical/add">Add New Agrochemical</a>
            </button>
            <div style={{ float: "right", marginRight: "20px" }}>
              <input
                id="search-input"
                type="search"
                style={{ width: "400px" }}
                placeholder="Search Agrochemical"
                onChange={this.handleSearchArea}
              />

              <button
                id="search-button"
                type="button"
                class="btn btn-primary"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>



          <div class="jumbotron ">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h1 className="seedshomecsscard">
                <img style={{ width: '50px', height: '50px' }} src={`https://png.pngtree.com/png-clipart/20230105/ourmid/pngtree-illustration-of-hands-holding-plant-seeds-in-the-context-of-one-png-image_6552749.png`} /> කෘමිනාශක / වල් නාශක
              </h1>
              <div className='searchbarnew' style={{ display: "flex", alignItems: "center", marginTop: '-4%' }}>
                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search Agro Chemicals..." onChange={this.handleSearchArea} />
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>

              </div>
            </div>

            <p style={{ marginBottom: '-20px' }}>
              පලිබෝධනාශක යනු කෘමීන් විසින් සිදු කරන හානිය වැළැක්වීමට, පාලනය කිරීමට හෝ අවම කිරීමට යොදා ගන්නා සංයෝගයක් හෝ සංයෝග මිශ්‍රණයකි.
              පලිබෝධනාශකයක් රසායනික සංයෝගයක්, ජීව විද්‍යාත්මක ප්‍රතිකාරකයෙක් (වෛරස් හෝ බැක්ටීරියා වැනි) , ප්‍රතිමයික්‍රෝබීය ,
              විශබීජ නාශකයක් හෝ කෘමීන්ට එරෙහිව යොදා ගන්නා උපකරණයක් විය හැකිය. පලිබෝධකයන්ට ‍මිනිසා සමඟ ආහාර සඳහා තරඟ කරන,
              දේපල විනාශ කරන ව්‍යසනයක් වන හෝ පතුර වන හෝ නොසන්සුන්තාවක් ඇති කරන කෘමීන්, ශාක රෝග කාරක බීජය, වල් පැළ.
            </p>
          </div>



          <div class="container">
            {this.state.isLoading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                <div className="spinner-border text-success" style={{ width: "100px", height: "100px", animationDuration: "1.5s" }} role="status"></div>
              </div>
            ) :
              <>
                {this.state.agrochemicals.length == 0 ?
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                    <h2>No Agro Chemicals Found</h2>
                  </div> :
                  <>
                    <Row xs={1} md={4} className="g-4" id="by" class="rounded">


                      {this.state.agrochemicals.map((eq, idx) => (
                        <div class="pt-1 ">
                          <div class="col-md-6 col-lg-12 pb-3">

                            <div class="card card-custom bg-white border-white border-0">
                              <div class="card-custom-img" ><img style={{ height: "200px", width: "100%" }} src={`${eq.agrochemicalImage}`} /></div>
                              <div class="card-custom-avatar">
                                <img class="img-fluid" style={{objectFit:'cover'}} src={`${eq.agrochemicalImage}`} alt="Avatar" />
                              </div>
                              <div class="card-body" style={{ overflowY: "auto" }}>
                                <h4 class="card-title">{idx + 1}. &nbsp;{eq.agrochemicalName}</h4>
                                <p class="card-text  truncateeq para">
                                  {eq.description}
                                   </p>
                              </div>
                              <div class="card-footer" style={{ background: "inherit; border-color: inherit;" }}>
                                <a href="#" class="btn btn-primary">වැඩි විස්තර</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#" class="btn btn-outline-primary">Buy Now</a>
                              </div>
                            </div>

                          </div>


                        </div>
                      ))}

                    </Row>
                  </>
                }
              </>}
          </div>

          <br /><br />
        </div>
        <Footer />
      </div>
    );
  }
}


