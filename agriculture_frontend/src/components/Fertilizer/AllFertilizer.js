import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'
import './Fertilizer.css'
import Header from '../Header';
import Footer from '../Footer';

export default class AgriFertilizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fertilizers: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.retrievefertilizer();
  }

  retrievefertilizer() {
    this.setState({ isLoading: true });

    axios.get("https://agribackend.onrender.com/agrifertilizer")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            fertilizers: res.data.existingFertilizer,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }


  filterData(fertilizers, searchkey) {
    const result = fertilizers.filter(
      (post) =>
        post.fertilizerName.toLowerCase().includes(searchkey) ||
        post.fertilizerName.toUpperCase().includes(searchkey)
    );
    this.setState({ fertilizers: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    this.setState({ isLoading: true });
    axios.get("https://agribackend.onrender.com/agrifertilizer").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingFertilizer, searchkey);
        this.setState({ isLoading: false });
      }
    })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  render() {


    return (
      <div>
        <Header />
        <div className="pagemargin" >


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
              <i class="fas fa-search"></i><a style={{ textDecoration: "none", color: "white" }} href="/agrifertilizer/add">Add New Fertilizer</a>
            </button>
            <div style={{ float: "right", marginRight: "20px" }}>
              <input
                id="search-input"
                type="search"
                style={{ width: "400px" }}
                placeholder="Search Fertilizer"
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
                  <img style={{ width: '50px', height: '50px' }} src={`https://png.pngtree.com/png-clipart/20230105/ourmid/pngtree-illustration-of-hands-holding-plant-seeds-in-the-context-of-one-png-image_6552749.png`} /> පොහොර වර්ග
                </h1>
                <div className='searchbarnew' style={{ display: "flex", alignItems: "center",marginTop:'-4%' }}>
                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search Fertilizers..."  onChange={this.handleSearchArea}/>
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>

                </div>
              </div>

              <p style={{ marginBottom: '-20px' }}>
              කාබනික පොහොර වශයෙන් භාවිතා කළ හැකි ද්‍රව්‍ය බොහෝ ඇත. නිෂ්පාදනය කරන ලද කාබනික පොහොර වර්ග කෙම්පොස්ට් ,ලේ වඩන ආහාර ,සත්ව ආහාර හා මුහුදු පැලෑටි
              කාබනික පොහොර ලෙස ක‍්‍රමාණුකූලව නිෂ්පාදනය කරන ලද කාබනික ද්‍රව්‍ය බෝග වගාවේදී හා කාබනික පවතින කාබනික පොහොර වර්ග සහ ඒවා භාවිතා කිරීමේ වාසි මිස අකාබනික ඒවා නොවේ.
              කාබනික පොහොර ප්‍රමාණයන්. කාබනික පොහොර. යොදන ප්‍රමාණ. හෙක්ටයාරයකට ටොන්. වර්ග මීටරයකට.
              </p>
            </div>


          <div class="container">
            <br />
            <Row xs={1} md={1} className="g-4" id="by" class="rounded">
            {this.state.isLoading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                  <div className="spinner-border text-success" style={{ width: "100px", height: "100px", animationDuration: "1.5s" }} role="status"></div>
                </div>
              ) :
                <>
                {this.state.fertilizers.length == 0 ?
                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                  <h2>No Fertilizers Found</h2>
                </div> : 
                <>
              {this.state.fertilizers.map((fertilizer, idx) => (
                <div class="col-md-3 cardfhoover">
                  <div class="card">
                    <img class="card-img-top" style={{ width: "100%", height: "200px",objectFit:'cover' }} src={`${fertilizer.fertilizerImage}`} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title border-bottom pb-3">{idx + 1}. &nbsp;{fertilizer.fertilizerName}<a class="float-right d-inline-flex share"></a></h5>
                      <p class="card-text truncateeq para ">
                        {fertilizer.description}
                      </p>
                      <a href="#" class="btn btn-primary float-right ">වැඩි විස්තර <i class="fas fa-angle-double-right"></i></a>
                    </div>
                  </div>
                </div>
              ))}
               </>
                }
                </>}
            </Row>
            <br /><br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


