import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'

export default class AgriFertilizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fertilizers: [],
        };
      }
    
      componentDidMount() {
        this.retrievefertilizer();
      }
    
      retrievefertilizer() {
        axios.get("http://localhost:8000/agrifertilizer").then((res) => {
          if (res.data.success) {
            this.setState({
              fertilizers: res.data.existingFertilizer,
            });
          }
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
    
        axios.get("http://localhost:8000/agrifertilizer").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.existingFertilizer, searchkey);
          }
        });
      };
    
      render() {


    return(
        <div className="pagemargin" style={{background:"#ccccff"}}>


<div     class="d-flex flex-row align-items-center mb-2"
              style={{
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",
                
              }}
            >
              <button
                style={{marginTop:"20px",marginLeft:"20px"}}
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agrifertilizer/add">Add New Fertilizer</a>
                  </button>
           
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      style={{width:"400px",marginInlineStart:"54%"}}
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
           


<div class="container">
    <br/>
<Row xs={1} md={1} className="g-4" id="by" class="rounded">
                {this.state.fertilizers.map((fertilizer, idx) => (
<div class="col-md-4">
         <div class="card">
            <img class="card-img-top" style={{width:"100%",height:"200px"}} src={`/uploads/${fertilizer.fertilizerImage}`}  alt="Card image cap"/>
            <div class="card-body">
               <h5 class="card-title border-bottom pb-3">{idx + 1}. &nbsp;{fertilizer.fertilizerName}<a  class="float-right d-inline-flex share"><i class="fas fa-share-alt text-primary"></i></a></h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary float-right">Read more <i class="fas fa-angle-double-right"></i></a>
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


