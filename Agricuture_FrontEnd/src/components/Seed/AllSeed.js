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
        <div style={{marginInlineStart:"220px" ,background:"#ccccff"}}>


<div     class="d-flex flex-row align-items-center mb-2"
              style={{
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",
                
              }}
            >
              <button
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agriseed/add">Add New Seed</a>
                  </button>
           
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      style={{width:"400px",marginInlineStart:"54%"}}
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
           



<div class=" mt-5 mb-5" >
    <div class="d-flex justify-content-center row" >
        <div class="col-md-10" >
        <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                {this.state.seeds.map((seed, idx) => (
            <div class="row p-2 bg-white border rounded " style={{background:"#e0e0d1",marginTop:"30px",marginLeft:"60px"}}>
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" style={{padding:"10px",marginTop:"20px"}} src={`/uploads/${seed.seedImage}`}/></div>
                <div class="col-md-6 mt-1">
                    <h5>{idx + 1}. &nbsp;{seed.seedName}</h5>
                    <div class="d-flex flex-row">
                        <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                    </div>
                    <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br/></span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br/></span></div>
                    <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, <br/><br/></p>
               
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">Rs. {seed.price}</h4><span class="strike-text">$20.99</span>
                    </div>
                    <h6 class="text-success">Free Delivery</h6>
                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm " type="button" style={{width:"150px"}}>Details</button><br/><br/>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button" style={{width:"150px"}}>Add to wishlist</button></div>
                </div>
            </div>
))}
</Row>

           
        </div>
    </div>
</div>






<Row xs={1} md={4} className="g-4" id="by" class="rounded">
                {this.state.seeds.map((seed, idx) => (

<div class="col">
    <div class="card">
      <img src={`/uploads/${seed.seedImage}`} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

 ))}
 </Row>








<br/><br/><br/><br/>

        </div>
   );
}
}


