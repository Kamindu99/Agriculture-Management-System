import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'
import './AgriEqupment.css'
import Header from '../Header';
import Footer from '../Footer';

export default class AgriEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipments: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.retrieveEquipment();
  }

  retrieveEquipment() {
    this.setState({ isLoading: true });

    axios.get("https://agribackend.onrender.com/agriequipment")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            equipments: res.data.existingEquipment,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }


  filterData(equipments, searchkey) {
    const result = equipments.filter(
      (post) =>
        post.equipmentName.toLowerCase().includes(searchkey) ||
        post.equipmentName.toUpperCase().includes(searchkey)
    );
    this.setState({ equipments: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    this.setState({ isLoading: true });
    axios.get("https://agribackend.onrender.com/agriequipment").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingEquipment, searchkey);
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
              <i class="fas fa-search"></i><a style={{ textDecoration: "none", color: "white" }} href="/agriequipment/add">Add New Equipmet</a>
            </button>
            <div style={{ float: "right", marginRight: "20px" }}>
              <input
                id="search-input"
                type="search"
                style={{ width: "400px" }}
                placeholder="Search Equipment"
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
                  <img style={{ width: '50px', height: '50px' }} src={`https://png.pngtree.com/png-clipart/20230105/ourmid/pngtree-illustration-of-hands-holding-plant-seeds-in-the-context-of-one-png-image_6552749.png`} /> කෘෂි උපකරණ
                </h1>
                <div className='searchbarnew' style={{ display: "flex", alignItems: "center",marginTop:'-4%' }}>
                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search Equipments..."  onChange={this.handleSearchArea}/>
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>

                </div>
              </div>

              <p style={{ marginBottom: '-20px' }}>
              කෘෂිකාර්මික උපකරණ, අත් කියත, අත් මුල්ලුව, අත් සවල, උදළු මුල්ලුව, උදැල්ල, කප්පාදු පිහිය, කියත, කෘෂිකාර්මික, කෘෂිකාර්මික උපකරණ, ගල් ඉන්න, 
              බද්ධ පිහිය, මල් බාල්දිය, මිටිය, මේසන් හැන්ද, රේක්කය, වැටි කප්පාදු කතුර. සුක්ෂම කෘෂිකාර්මික නිෂ්පාදනයක් සදහා අමුණු සහ ඇලවල් අවශ්‍ය බව බොහෝවිට
               පිළිගැනිණි. මෙම සිතාගැනිම පහසුවෙන් නිෂ්ප්‍රභා කරන ලදි. ආසියාව පුරා වි ගොවියන් හෙල්මලූ සහිත කඳුකර කුඹුරුවලින් සැලකිය යුතු කෘෂිකාර්මික 
               අතිරික්තයක් නිපදවනු ලබති. එහි ප්‍රතිඵල ලබාගනුයේ වහල් මෙහෙයෙන් නොව පරම්පරා ගණනක ජනතාවගේ එකතු වු ශ්‍රමයෙනි.
              </p>
            </div>


          <div class=" mt-5 mb-5" >
            <div class="d-flex justify-content-center" >
              <div class="col-md-10" >
                <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                {this.state.isLoading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                  <div className="spinner-border text-success" style={{ width: "100px", height: "100px", animationDuration: "1.5s" }} role="status"></div>
                </div>
              ) :
                <>
                {this.state.equipments.length == 0 ?
                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                  <h2>No Equipments Found</h2>
                </div> : 
                <>
                  {this.state.equipments.map((eq, idx) => (
                    <div class="row p-2 bg-white border rounded " style={{ background: "#e0e0d1", marginTop: "30px" }}>
                      <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" style={{ height: '130px', marginTop: "14px",objectFit:'cover' }} src={`${eq.equipmentImage}`} /></div>
                      <div class="col-md-6 mt-1 mb-2">
                        <h5>{idx + 1}. &nbsp;{eq.equipmentName}</h5>
                        <div class="d-flex flex-row">
                          <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                        </div>
                        <div class="mt-1 mb-1 spec-1"><span>100% Perfect</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br /></span></div>                       
                        <p class="text-justify truncateeq para mb-0">
                        {eq.description}
                          </p>

                      </div>
                      <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div class="d-flex flex-row align-items-center">
                          <h4 class="mr-1">Rs. {eq.price}</h4><span class="strike-text">Rs. 20.99</span>
                        </div>
                        <h6 class="text-success">Free Delivery</h6>
                        <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm " type="button" >Details</button>
                          <button class="btn btn-outline-primary btn-sm mt-2" type="button"><a href={`/agriequipment/details/${eq._id}`}>Buy Now</a></button></div>
                      </div>
                    </div>
                  ))}
                  </>
                }
                </>}
                </Row>
                
              </div>
            </div>
          </div>

          <br /><br />
        </div>
        <Footer />
      </div>
    );
  }
}


