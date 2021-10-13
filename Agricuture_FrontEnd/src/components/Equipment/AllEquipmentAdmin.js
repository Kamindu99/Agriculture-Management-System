import React, { Component } from "react";
import axios from "axios";
import '../../styles/Equipment.css'

export default class AllEquipmentAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          equipments: [],
        };
      }
    
      componentDidMount() {
        this.retrieveEquipment();
      }
    
      retrieveEquipment() {
        axios.get("http://localhost:8000/agriequipment").then((res) => {
          if (res.data.success) {
            this.setState({
              equipments: res.data.existingEquipment,
            });
          }
        });
      }
    
    
      filterData(equipments, searchkey) {
        const result = equipments.filter(
          (post) =>
            post.equipmentName.toLowerCase().includes(searchkey) ||
            post.equipmentName.toUpperCase().includes(searchkey)
        );
        this.setState({ equipments: result });
      }
    
      handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
    
        axios.get("http://localhost:8000/agriequipment").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.existingEquipment, searchkey);
          }
        });
      };
    
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
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/agriequipment/add">Add New Equipmet</a>
                  </button>
                  <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      style={{width:"400px"}}
                      placeholder="Search Equipment"
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
  {this.state.equipments.map((eq, idx) => (
    <tr>
      <td>Eq_0{idx + 1}</td>
      <td>{eq.equipmentName}</td>
      <td>{eq.price}</td>
      <td><button>Edit</button></td>
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


