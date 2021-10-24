import React,{useState,useEffect} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import { Form } from "react-bootstrap";
import AdminHeader from '../AdminHeader';

const EditAgriEquipment = (props)=>{

     let history = useHistory();
     const id = props.match.params.id;
     const [validated, setValidated] = useState(false);

     const[equipmentName,setName]=useState("");
     const[description,setDescription]=useState("");
     const[price,setPrice]=useState("");
     const[,setMessage]=useState("");
   
   const changeOnClick =(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

else{
       e.preventDefault();
   
       const formData=new FormData();
       formData.append("equipmentName",equipmentName);
       formData.append("description",description);
       formData.append("price",price);
   
       setName("");
       setDescription("");
       setPrice("");
       
   
       axios
       .put(`http://localhost:8000/agriequipment/admin/update/${id}`,formData)
       .then(
        (res)=>setMessage(res.data))
        
       .catch((err)=>{
           console.log(err);
       });
       history.push("/admin/agriequipment/all");
       alert("Equipment Details Edit Successful")
      }
      setValidated(true);
   };

   useEffect(() => {
    axios
      .get(
        `http://localhost:8000/agriequipment/admin/${props.match.params.id}`
      )
      .then((res) =>
       [
        setName(res.data.equipment.equipmentName),
        setPrice(res.data.equipment.price),
        setDescription(res.data.equipment.description)
       
      ])
      .catch((error) => console.log(error));
  }, []);

    return (
      <div>
        <AdminHeader/>
      <div className="pagemargin">
      <br/>
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit Equipment</h2>





          
          <Form noValidate validated={validated}  class="signup-form" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                name="equipmentName"
                value={equipmentName}
                onChange={(e)=>setName(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide a valid name. 
            </Form.Control.Feedback>
            </div>
            <div className="form-group">
              <textarea
                type="text"
                rows="6"
                className="form-control form-control-lg"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide Description. 
            </Form.Control.Feedback>
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide Price. 
            </Form.Control.Feedback>
            </div>

            <lable class="label-title"><b>Add an Image*</b>
            <div class="mb-3">
            <input class="form-control" type="file" id="formFile"/>
            </div></lable>

            <button className="btn btn-primary btn-block">Done</button>
          </Form>
        </div>
      </div>
      </div>
      <br/>
      </div>
    );
};

export default EditAgriEquipment;