import React,{useState,useEffect} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import { Form } from "react-bootstrap";
import AdminHeader from '../AdminHeader';

const EditAgriPlant = (props)=>{

     let history = useHistory();
     const id = props.match.params.id;
     const [validated, setValidated] = useState(false);

     const[plantName,setName]=useState("");
     const[description,setDescription]=useState("");
     const[price,setPrice]=useState("");
     const[,setMessage]=useState("");
     const[plantImage,setFileName]=useState("");
   
     const onChangeFile= e=>{
         setFileName(e.target.files[0]);
     }
   
   const changeOnClick =(e)=>{

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

else{
       e.preventDefault();
   
       const formData=new FormData();
       formData.append("plantName",plantName);
       formData.append("description",description);
       formData.append("price",price);
       formData.append("plantImage",plantImage);
   
       setName("");
       setDescription("");
       setPrice("");
       
   
       axios
       .put(`https://agribackend.onrender.com/agriplant/admin/update/${id}`,formData)
       .then(
        (res)=>setMessage(res.data))
        
       .catch((err)=>{
           console.log(err);
       });
       history.push("/admin/agriplant/all");
       alert("Plant Details Update Successful")
      }
      setValidated(true);
   };

   useEffect(() => {
    axios
      .get(
        `https://agribackend.onrender.com/agriplant/admin/${id}`
      )
      .then((res) =>
       [
        setName(res.data.plant.plantName),
        setPrice(res.data.plant.price),
        setDescription(res.data.plant.description)
       
      ])
      .catch((error) => console.log(error));
  }, []);


    return (
      <div>
        <AdminHeader/>
      <div className="pagemargin">
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Plant</h2>





          
          <Form noValidate validated={validated} class="signup-form" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                name="plantName"
                value={plantName}
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
            <input class="form-control"  type="file" id="formFile"/>
          
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

export default EditAgriPlant;