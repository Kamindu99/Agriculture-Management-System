import React, { Component } from "react";
import axios from "axios";
import '../../styles/Equipment.css'
import AdminHeader from '../AdminHeader';

export default class AllSeedAdmin extends Component {
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
        axios.get("https://agribackend.onrender.com/agriseed").then((res) => {
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
    
        axios.get("https://agribackend.onrender.com/agriseed").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.existingSeed, searchkey);
          }
        });
      };

      onDelete = (id) =>{
        if(window.confirm("Confirm Delete")){
              axios.delete(`https://agribackend.onrender.com/agriseed/admin/delete/${id}`).then((res)=>{
      
              alert("success Deleted");
              this.retrieveSeed();
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
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agriseed/add">Add New Seed</a>
                  </button>
                  <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      
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
           


            <table class="table">
  <thead>
    <tr>
      <th scope="col">Equipment ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Image Link</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.seeds.map((seed, idx) => (
    <tr>
      <td>Eq_0{idx + 1}</td>
      <td>{seed.seedName}</td>
      <td>{seed.price}</td>
      <td>{seed.seedImage}</td>
      <td><button><a href={`/agriseed/edit/${seed._id}`}>Edit</a></button>
      <button onClick={()=>this.onDelete(seed._id)}>Delete</button></td>
    </tr>
  ))}
  </tbody>
</table>


<br/>


</div>
        </div>
   );
}
}


