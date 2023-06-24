import React, { Component } from "react";
import axios from "axios";
import '../../styles/Equipment.css'
import AdminHeader from '../AdminHeader';

export default class AllPlantAdmin extends Component {
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

      onDelete = (id) =>{
        if(window.confirm("Confirm Delete")){
              axios.delete(`http://localhost:8000/agriplant/admin/delete/${id}`).then((res)=>{
      
              alert("success Deleted");
              this.retrievePlant();
          })}}


    
    
      render() {


    return(
      <div>
        <AdminHeader/>
        <div className="pagemargin">


<div    
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
           


            <table class="table">
  <thead>
    <tr>
      <th scope="col">Equipment ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.plants.map((eq, idx) => (
    <tr>
      <td>Eq_0{idx + 1}</td>
      <td>{eq.plantName}</td>
      <td>{eq.price}</td>
      <td><button><a href={`/agriplant/edit/${eq._id}`}>Edit</a></button>
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


