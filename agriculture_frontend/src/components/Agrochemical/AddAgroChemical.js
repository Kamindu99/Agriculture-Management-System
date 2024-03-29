import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { Form } from "react-bootstrap";

const AddAgroChemical = () => {

  const [validated, setValidated] = useState(false);

  let history = useHistory();

  const [agrochemicalName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [, setMessage] = useState("");
  const [agrochemicalImage, setAgrochemicalImage] = useState("");

  const changeOnClick = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    else {
      e.preventDefault();

      let agrochemical = {
        agrochemicalName,
        description,
        price,
        agrochemicalImage
      };

      axios
        .post("https://agribackend.onrender.com/agrochemical/admin/add", agrochemical)
        .then(
          (res) => setMessage(res.data))

        .catch((err) => {
          console.log(err);
        });
      history.push("/agrochemical/all");
      alert("New Agrochemical Added Successful")
    }
    setValidated(true);
  };
  return (
    <div className="pagemargin">
      <div>
        <br />
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Agrochemical</h2>

            <Form noValidate validated={validated} class="signup-form" onSubmit={changeOnClick} encType="multipart/form-data">
              <div className="form-group" controlId="validationCustom01">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                  name="agrochemicalName"
                  value={agrochemicalName}
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide Description
                </Form.Control.Feedback>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide Price
                </Form.Control.Feedback>
              </div>

              <lable class="label-title"><b>Add an Image*</b>
                <div class="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Agro Chemical Image URL"
                  name="agrochemicalImage"
                  value={agrochemicalImage}
                  onChange={(e) => setAgrochemicalImage(e.target.value)}
                  required
                />
                  <Form.Control.Feedback type="invalid">
                    Please provide Image.
                  </Form.Control.Feedback>
                </div></lable>

              <button className="btn btn-primary btn-block">Done</button>
            </Form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AddAgroChemical;