import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import './Plant.css'
import Header from '../Header';
import Footer from '../Footer';

export default class AgriPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
    };
  }

  componentDidMount() {
    this.retrievePlant();
  }

  retrievePlant() {
    axios.get("https://agribackend.onrender.com/agriplant").then((res) => {
      if (res.data.success) {
        this.setState({
          plants: res.data.existingPlant,
        });
      }
    });
  }


  filterData(plants, searchkey) {
    const result = plants.filter(
      (post) =>
        post.plantName.toLowerCase().includes(searchkey) ||
        post.plantName.toUpperCase().includes(searchkey)
    );
    this.setState({ plants: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("https://agribackend.onrender.com/agriplant").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPlant, searchkey);
      }
    });
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
              <i class="fas fa-search"></i><a style={{ textDecoration: "none", color: "white" }} href="/agriplant/add">Add New Plant</a>
            </button>
            <div style={{ float: "right", marginRight: "20px" }}>
              <input
                id="search-input"
                type="search"
                style={{ width: "400px" }}
                placeholder="Search Plant"
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
            <h1 className="seedshomecsscard">  <img style={{ width: '50px', height: '50px' }} src={`https://png.pngtree.com/png-clipart/20230105/ourmid/pngtree-illustration-of-hands-holding-plant-seeds-in-the-context-of-one-png-image_6552749.png`} /> පැළ වර්ග</h1>
            <p style={{ marginBottom: '-20px' }}>සියළුම එළවළු පැළ වර්ග,පළතුරු පැළ දිගුකාලීන බෝග වශයෙන් අප හඳුනාගන්නේ දිගු කාලයක් පුරා ප්‍රයෝජන ලැබිය හැකි පොල්, ගස්ලබු, අඹ, දෙහි, දොඩම්, දෙලුම්, පේර, කෝපි,
              කතුරුමුරුංගා, මුරුංගා, කරපිංචා ආදී ගස් වශයෙන් වැවෙන බෝගයන් ය. මෙම බෝග ඉඩමේ සෑහෙන ඉඩකඩක් ගන්නා හෙයින්,
              ඒවා ස්ථානගන කිරීම මනාව සැලසුම් නොවුවහොත්, එළවළු වගාවට අවශ්‍ය ඉඩකඩ ඇහිරී යාමට ඉඩ ඇත. දිගුකාලීන බෝග වශයෙන් අප හඳුනාගන්නේ දිගු කාලයක් පුරා ප්‍රයෝජන ලැබිය හැකි පොල්, ගස්ලබු, අඹ, දෙහි, දොඩම්, දෙලුම්,
              පේර, කෝපි, කතුරුමුරුංගා, මුරුංගා, කරපිංචා ආදී ගස් වශයෙන් වැවෙන බෝගයන් ය. මෙම බෝග ඉඩමේ සෑහෙන ඉඩකඩක් ගන්නා හෙයින්, ඒවා ස්ථානගන කිරීම මනාව සැලසුම් නොවුවහොත්, එළවළු වගාවට අවශ්‍ය ඉඩකඩ ඇහිරී යාමට ඉඩ ඇත.

            </p>
          </div>

          <div class="container bodyplant" style={{ marginTop: "-40px" }}>
            <Row xs={1} md={4} className="g-4" id="by" class="rounded">
              {this.state.plants.map((eq, idx) => (
                <div >
                  <div class="col-md-! plantcsss">
                    {/* <div class="card-sl">
                      <div class="card-image">
                        <img
                          style={{ height: "150px", width: "100%" }} src={`${eq.plantImage}`} />
                      </div>

                      <div class="card-heading">
                        {idx + 1}. &nbsp;{eq.plantName}
                      </div>
                      <div class="card-text">
                        {eq.description}
                      </div>
                      <div class="card-text">
                        Rs. {eq.price}
                      </div>
                      <a href="#" class="card-button planta"> Purchase</a>

                    </div> */}

                    <div class="wrap">
                      <div class="box">
                        <div class="box-top">
                          <img class="box-image" src={`${eq.plantImage}`} alt="Girl Eating Pizza" />
                          <div class="title-flex">
                            <h5 class="box-title">{idx + 1}. &nbsp;{eq.plantName}</h5>
                            <p class="user-follow-info">  Rs. {eq.price}</p>
                          </div>
                          <p class="description">{eq.description}</p>
                        </div>
                        <a href="#" class="button">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </div>






























          <br /><br />
        </div>
        <Footer />
      </div>
    );
  }
}


