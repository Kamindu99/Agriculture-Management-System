import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer';
import { Link, useParams, useHistory } from "react-router-dom";

const EquipmentDetails = () => {
  const [aEquipment, viewEquipment] = useState({
    equipmentName: "",
    price: "",
    description: "",
    equipmentImage: ""
  });

  const { id } = useParams();

  const loadEquipment = async () => {
    const res = await axios.get(
      `http://localhost:8000/agriequipment/admin/${id}`
    );
    viewEquipment(res.data.equipment);
  };
  useEffect(() => {
    loadEquipment();
  });

  return (
    <div>
      <Header />

      <div
        className="pagemargin"
        style={{
          backgroundImage:
            "url('https://www.teahub.io/photos/full/236-2363540_world-map-travel-background.jpg')",
          minHeight: "600px",
        }}
      >
        <div className="container">
          <small class="text-muted" style={{ marginInlineStart: "2%" }}>
            <button
              type="submit"
              class="btn btn-primary"
              style={{ width: "100px", marginTop: "20px" }}
            >
              <a
                href="/agriequipment/all"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="fas fa-angle-left mr-2"></i>Back
              </a>
            </button>
          </small>{" "}
          <br />
          <br />
          <div
            class="card mb-4"
            style={{
              maxWidth: "98%",
              backgroundColor: "hsla(90, 0%, 100%, 0.81)",
            }}
          >
            <div class="row no-gutters">
              <div class="col-md-4 mr-4">
                <img
                  style={{
                    marginInlineStart: "6%",
                    marginTop: "13%",
                    borderRadius: "12px",
                  }}
                  class="bd-placeholder-img"
                  width="100%"
                  height="70%"
                  src={`/uploads/${aEquipment.equipmentImage}`}
                  aria-label="Placeholder: Image"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                />
              </div>
              <div class="col">
                <div class="card-body">
                  <h5 class="card-title">
                    <b>PACKAGE NAME :- </b>
                    {aEquipment.equipmentName}
                  </h5>
                  <p class="card-text">
                    <small class="text-muted"> aaaaaaaaa </small>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <small class="text-muted"> aaaaaaaaaaa </small>
                  </p>

                  <p class="card-text">{aEquipment.description} </p>

                  <div class="d-flex flex-row align-items-center mb-2">
                    <div class="form-outline mb-2 ">
                      <i class="fas fa-car mr-2" style={{ color: "blue" }}></i>
                      <b>DURATION :- </b>
                      aaaaa&nbsp;aaa
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="form-outline mb-2 ">
                      <i class="fas fa-car mr-2" style={{ color: "blue" }}></i>
                      <b>PER PERSON :- </b> aaaaaaa
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fas fa-car mr-2" style={{ color: "blue" }}></i>
                      <b>VEHICAL :- </b> aaaaaaa
                    </div>
                  </div>

                  <ul class="postcard__tagbox" style={{ fontSize: "16px" }}>
                    <li>
                      <small
                        class="text-muted"
                        style={{ marginInlineStart: "15%" }}
                      >
                        <button
                          data-bs-toggle="modal" data-bs-target="#exampleModal"
                          type="submit"
                          class="btn btn-danger"
                          style={{ width: "140px", fontSize: "16px" }}
                        >
                          Delete Package
                        </button>

<div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Travel Package</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Are You Sure You Want to Delete this Travel package.? If delete this package
              can't be restore.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>








                      </small>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                      <small class="text-muted">
                        <button
                          type="submit"
                          class="btn btn-danger"
                          style={{ width: "130px", fontSize: "16px" }}
                        >
                          <a
                            href={`/editaEquipment/${aEquipment._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Edit Package
                          </a>
                        </button>
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EquipmentDetails;
