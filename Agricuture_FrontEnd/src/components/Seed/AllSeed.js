import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'

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


    return(
        <div className="pagemargin" style={{background:"#ccccff"}}>


<div     class=""
              style={{
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",
              
              }}
            >
              <button
              style={{marginLeft:"30px"}}
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agriseed/add">Add New Seed</a>
                  </button>
                  <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      style={{width:"400px"}}
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
           


<div class="container">
    <br/>
<Row xs={1} md={1} className="g-4" id="by" class="rounded">
                {this.state.seeds.map((seed, idx) => (
<div class=" col-md-4"  id="ads">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge">Low KMS</span>
                <span class="card-notify-year">2021</span>
                <img class="img-fluid"  style={{width:"440px",height:"200px"}} src={`/uploads/${seed.seedImage}`} alt="Alternate Text" />
            </div>
            <div class="card-image-overlay m-auto">
                <span class="card-detail-badge">Used</span>
                <span class="card-detail-badge">$28,000.00</span>
                <span class="card-detail-badge">13000 Kms</span>
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>{idx + 1}. &nbsp;{seed.seedName}</h5>
                </div>
                <a class="ad-btn" href="#">View</a>
            </div>
        </div>
    </div>
))}
</Row>



</div>
        </div>
   );
}
}


