import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import '../../styles/Equipment.css'

export default class AllAgroChemicalAdmin extends Component {
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
    

      onDelete = (id) =>{
        if(window.confirm("Confirm Delete")){
              axios.delete(`http://localhost:8000/agrochemical/admin/delete/${id}`).then((res)=>{
      
              alert("success Deleted");
              this.retrieveagrochemical();
          })}}


      render() {
    return(
      <div>
        <div>


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
                      id="form1"
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
 

<table class="table">
  <thead>
    <tr>
      <th scope="col">Chemical ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.agrochemicals.map((eq, idx) => (
    <tr>
      <td>Ch_0{idx + 1}</td>
      <td>{eq.agrochemicalName}</td>
      <td>{eq.price}</td>
      <td><button><a href={`/agrochemical/edit/${eq._id}`}>Edit</a></button>
      <button onClick={()=>this.onDelete(eq._id)}>Delete</button></td>
  
    </tr>
  ))}
  </tbody>
</table>




<br/><br/>
</div>
        </div>
   );
}
}


