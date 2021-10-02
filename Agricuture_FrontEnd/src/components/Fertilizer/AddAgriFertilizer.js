import React,{useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";

const AddFertilizer = ()=>{

     let history = useHistory();

     const[fertilizerName,setName]=useState("");
     const[description,setDescription]=useState("");
     const[price,setPrice]=useState("");
     const[,setMessage]=useState("");
     const[fertilizerImage,setFileName]=useState("");
   
     const onChangeFile= e=>{
         setFileName(e.target.files[0]);
     }
   
   const changeOnClick =(e)=>{
       e.preventDefault();
   
       const formData=new FormData();
       formData.append("fertilizerName",fertilizerName);
       formData.append("description",description);
       formData.append("price",price);
       formData.append("fertilizerImage",fertilizerImage);
   
       setName("");
       setDescription("");
       setPrice("");
       
   
       axios
       .post("http://localhost:8000/agrifertilizer/admin/add",formData)
       .then(
        (res)=>setMessage(res.data))
        
       .catch((err)=>{
           console.log(err);
       });
       history.push("/agrifertilizer/all");
       alert("New Fertilizer Added Successful")
   };
    return (
      <div style={{marginInlineStart:"220px"}}>
      <div>
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Fertilizer</h2>





          
          <form class="signup-form" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                name="fertilizerName"
                value={fertilizerName}
                onChange={(e)=>setName(e.target.value)}
                required
              />
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
            </div>

            <lable class="label-title"><b>Add an Image*</b>
            <div class="mb-3">
            <input class="form-control" type="file" id="formFile" filename="fertilizerImage" onChange={onChangeFile}/>
            </div></lable>

            <button className="btn btn-primary btn-block">Done</button>
          </form>
        </div>
      </div>
      </div>
      </div>
    );
};

export default AddFertilizer;