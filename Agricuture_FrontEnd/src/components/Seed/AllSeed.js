import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'
import Header from '../Header';
import Footer from '../Footer';

export default class AgriSeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: [],
    };
  }

  componentDidMount() {
    this.retrieveSeed();
  }

  retrieveSeed() {
    axios.get("http://localhost:8000/agriseed").then((res) => {
      if (res.data.success) {
        this.setState({
          seeds: res.data.existingSeed,
        });
      }
    });
  }


  filterData(seeds, searchkey) {
    const result = seeds.filter(
      (post) =>
        post.seedName.toLowerCase().includes(searchkey) ||
        post.seedName.toUpperCase().includes(searchkey)
    );
    this.setState({ seeds: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("http://localhost:8000/agriseed").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingSeed, searchkey);
      }
    });
  };

  render() {


    return (
      <div>
        <Header />
        <div className="pagemargin" style={{ background: "#ccccff" }}>


          <p style={{ background: "gray" }}>  The primary form of agriculture in Sri Lanka is rice production. Rice is cultivated during Maha and Yala seasons. Tea is cultivated in the central highlands and is a major source of foreign exchange. Vegetables, fruits and oilseed crops are also cultivated in the country.
            The primary form of agriculture in Sri Lanka is rice production. Rice is cultivated during Maha and Yala seasons. Tea is cultivated in the central highlands and is a major source of foreign exchange. Vegetables, fruits and oilseed crops are also cultivated in the country.</p>


          <body className="seedshomecsscard">


            <nav class="navbar navbar-inverse navbar-fixed-top">
              <div class="container">
                <div class="navbar-header">
                  <a href="#" class="navbar-brand"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span> Seeds</a>
                </div>
              </div>
            </nav>

            <div class=""
              style={{
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",

              }}
            >
              <button
                style={{ marginLeft: "30px" }}
                id="search-button"
                type="button"
                class="btn btn-primary"
              >
                <i class="fas fa-search"></i><a style={{ textDecoration: "none", color: "white" }} href="/agriseed/add">Add New Seed</a>
              </button>
              <div style={{ float: "right", marginRight: "20px" }}>
                <input
                  id="search-input"
                  type="search"
                  style={{ width: "400px" }}
                  placeholder="Search Seed"
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


            <div class="jumbotron">
              <h1><i class="fa fa-camera-retro" aria-hidden="true"></i> Lenses</h1>
              <p>Images provided free of copyright by wonderful people</p>
            </div>

            <div class="row seedshomecss">
              {this.state.seeds.map((seed, idx) => (
                <div class="card-wrapper col-lg-4 col-md-6 col-xs-12">
                  <div class="card">
                    <div class="card-img-wrapper">
                      <img class="card-img-top" src={`${seed.seedImage}`} alt="Card image cap" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{idx + 1}. &nbsp;{seed.seedName}</h5>
                      <div class="card-content">
                        <p class="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </body>

          <div class="csstest">
            <div class="row seedshomecss">
              {this.state.seeds.map((seed, idx) => (
                <div class=" col-lg-4 col-md-6 col-xs-12">
                  <div class="card csstest">
                    <div class="card-front" style={{ backgroundImage: `url(${seed.seedImage})` }}></div>
                    <div class="card-back">
                      <h2>Jane Doe<br /><span>Senior Designer</span></h2>
                      <div class="social-icons">
                        <a href="#" class="fa fa-facebook" aria-hidden="true"></a>
                        <a href="#" class="fa fa-twitter" aria-hidden="true"></a>
                        <a href="#" class="fa fa-google-plus" aria-hidden="true"></a>
                        <a href="#" class="fa fa-linkedin" aria-hidden="true"></a>
                        <a href="#" class="fa fa-instagram" aria-hidden="true"></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div class="container-fluid galaryyy">
            <div class="px-lg-5">
              <div class="row py-5">
                <div class="col-lg-12 mx-auto">
                  <div class="text-white p-5 shadow-sm rounded banner">
                    <h1 class="display-4">Bootstrap 4 photo gallery</h1>
                    <p class="lead">Bootstrap photogallery snippet.</p>
                    <p class="lead">Snippet by <a href="https://bootstrapious.com/snippets" class="text-reset">
                      Bootstrapious</a>, Images by <a href="https://unsplash.com" class="text-reset">Unsplash</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row">

                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div class="bg-white rounded shadow-sm"><img src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg" alt="" class="img-fluid card-img-top" />
                    <div class="p-4">
                      <h5> <a href="#" class="text-dark">Red paint cup</a></h5>
                      <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">JPG</span></p>
                        <div class="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="py-5 text-right"><a href="#" class="btn btn-dark px-5 py-3 text-uppercase">Show me more</a></div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}


