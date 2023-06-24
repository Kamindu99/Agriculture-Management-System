import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'
import Header from '../Header';
import Footer from '../Footer';

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
      <div>
        <Header/>
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
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agrochemical/add">Add New Agrochemical</a>
                  </button>
           <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      style={{width:"400px"}}
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
            </div>
           


            
           <br/> <br/>
 

      <div class="container">
      <Row xs={1} md={3} className="g-4" id="by" class="rounded">
                {this.state.agrochemicals.map((eq, idx) => (
    <div class="pt-1 ">
      <div class="col-md-6 col-lg-12 pb-3">

        <div class="card card-custom bg-white border-white border-0">
          <div class="card-custom-img" ><img style={{height:"200px",width:"100%"}} src={`${eq.agrochemicalImage}`}/></div>
          <div class="card-custom-avatar">
            <img class="img-fluid" src={`${eq.agrochemicalImage}`}alt="Avatar" />
          </div>
          <div class="card-body" style={{overflowY: "auto"}}>
            <h4 class="card-title">{idx + 1}. &nbsp;{eq.agrochemicalName}</h4>
            <p class="card-text">Card has minimum height set but will <a href="https://getbootstrap.com/docs/4.0/components/card/#card-decks" target="_blank">card-decks</a> to align multiple cards nicely in a row.</p>
          </div>
          <div class="card-footer" style={{background: "inherit; border-color: inherit;"}}>
            <a href="#" class="btn btn-primary">Option</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" class="btn btn-outline-primary">Other option</a>
          </div>
        </div>

      </div>
   
  
    </div>
    ))}
    </Row>
  </div>

<br/><br/>
</div>
<Footer/>
        </div>
   );
}
}


