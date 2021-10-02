import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'

export default class AgroChemical extends Component {
    constructor(props) {
        super(props);
        this.state = {
          agrochemicals: [],
        };
      }
    
      componentDidMount() {
        this.retrieveagrochemical();
      }
    
      retrieveagrochemical() {
        axios.get("http://localhost:8000/agrochemical").then((res) => {
          if (res.data.success) {
            this.setState({
              agrochemicals: res.data.existingAgrochemical,
            });
          }
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
    
        axios.get("http://localhost:8000/agrochemical").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.existingAgrochemical, searchkey);
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
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agrochemical/add">Add New Agrochemical</a>
                  </button>
           
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      style={{width:"400px",marginInlineStart:"54%"}}
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
           


            
            <div class="row">
            <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                {this.state.agrochemicals.map((eq, idx) => (
  <div class="col-sm-4 col-md-3">
    <div class="thumbnail">
      <img style={{width:"100%",height:"200px"}} src={`/uploads/${eq.agrochemicalImage}`} alt="..."/>
      <div class="caption">
        <h3>{idx + 1}. &nbsp;{eq.agrochemicalName}</h3>
        <p>There are many variations of passages of Lorem Ipsum available</p>
        <p>Rs. {eq.price}</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
 
  </div>
      ))}
      </Row>
 
</div>





















<br/><br/><br/><br/>

        </div>
   );
}
}


