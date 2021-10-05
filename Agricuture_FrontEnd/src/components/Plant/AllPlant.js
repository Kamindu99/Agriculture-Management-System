import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'
import PlantDetails from "./PlantDetails";

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
        axios.get("http://localhost:8000/agriplant").then((res) => {
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
    
        axios.get("http://localhost:8000/agriplant").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.existingPlant, searchkey);
          }
        });
      };

    
    
      render() {


    return(
        <div className="pagemargin">


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
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agriplant/add">Add New Plant</a>
                  </button>
                  <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      style={{width:"400px"}}
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
           





<div class="container bodyplant" style={{marginTop:"50px"}}>
<Row xs={1} md={4} className="g-4" id="by" class="rounded">
                {this.state.plants.map((eq, idx) => (
        <div >
            <div class="col-md-!">
                <div class="card-sl">
                    <div class="card-image">
                        <img
                           style={{height:"150px",width:"100%"}} src={`/uploads/${eq.plantImage}`}/>
                    </div>

                    <a class="card-action planta" href="#"><i class="fa fa-heart"></i></a>
                    <div class="card-heading">
                    {idx + 1}. &nbsp;{eq.plantName}
                    </div>
                    <div class="card-text">
                        Agricultural development is one of the most powerful tools to end extreme poverty prosperity
                    </div>
                    <div class="card-text">
                    Rs. {eq.price}
                    </div>
                    <a href="#" class="card-button planta"> Purchase</a>














                </div>
            </div>
        </div> 
        ))}
        </Row>
        </div> 


<br/><br/>

        </div>
   );
}
}


