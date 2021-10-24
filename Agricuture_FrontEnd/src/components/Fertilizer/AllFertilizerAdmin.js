import React, { Component } from "react";
import axios from "axios";
import '../../styles/Equipment.css'
import AdminHeader from '../AdminHeader';

export default class AllFertilizerAdmin extends Component {
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

      onDelete = (id) =>{
        if(window.confirm("Confirm Delete")){
              axios.delete(`http://localhost:8000/agrifertilizer/admin/delete/${id}`).then((res)=>{
      
              alert("success Deleted");
              this.retrievefertilizer();
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
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agrifertilizer/add">Add New Fertilizer</a>
                  </button>
                  <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      style={{width:"400px"}}
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
            </div>
           

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
  {this.state.fertilizers.map((fertilizer, idx) => (
    <tr>
      <td>Ch_0{idx + 1}</td>
      <td>{fertilizer.fertilizerName}</td>
      <td>{fertilizer.price}</td>
      <td><button><a href={`/agrifertilizer/edit/${fertilizer._id}`}>Edit</a></button>
      <button onClick={()=>this.onDelete(fertilizer._id)}>Delete</button></td>
    </tr>
  ))}
  </tbody>
</table>



</div>

        </div>
   );
}
}


