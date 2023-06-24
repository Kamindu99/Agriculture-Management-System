import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import './Seeds.css'
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
        <div className="pagemargin" >

          <body>

            <div class=""
              style={{
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",
display:'none'
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


            <div class="jumbotron ">
              <h1 className="seedshomecsscard">  <img style={{width:'50px',height:'50px'}} src={`https://png.pngtree.com/png-clipart/20230105/ourmid/pngtree-illustration-of-hands-holding-plant-seeds-in-the-context-of-one-png-image_6552749.png`} /> බීජ වර්ග</h1>
              <p style={{marginBottom:'-20px'}}>සියළුම එළවළු බීජ වර්ග,පළතුරු පැළ බීජ වල ගුණාත්මය ඉහල නැංවීම සහ ඒ හා සම්බන්ධ නීති රෙගුලාසි ක්‍රියාත්මක කිරීම තුලින් ජාතික ආර්ථිකය සවිබල ගැන්වීම සහ ආහාර සුරක්ෂිතතාවය ඇති කිරීම.
              ශ්‍රී ලාංකීය කෘෂිකාර්මික ජනතාවට වී, අතිරේක ආහාර බෝග, එළවළු, පලතුරු හා අර්තාපල් බෝග වල බීජ හා රෝපණ ද්‍රව්‍ය වල ගුණාත්මය සහතික කර ලබාදීම.
              බීජ පනතට අදාලව ගුණාත්මීය බීජ හා රෝපණ ද්‍රව්‍ය නිෂ්පාදනය පිළිබඳව පුහුණුවීම් හා දැනුවත් වීමේ වැඩසටහන්, බීජ හා රෝපණ ද්‍රව්‍ය නිෂ්පාදකයින්, හසුරුවන්නන් බීජ නිෂ්පාදන ක්‍රියාවලිය හා සමිබන්ධ රජයේ හා පෞද්ගලික අංශයේ නිලධාරීන් වෙනුවෙන් පැවැත්වීම.
              
              </p>
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
                        <p class="card-text">{seed.description}</p>
                        <a href="#" class="btn btnhver btn-primary">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </body>

        </div>
        <Footer />
      </div>
    );
  }
}


