import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import '../styles/Common.css';
const FeedBack = () => {
  let history = useHistory();

  const [feedback, addFeedback] = useState({
    name: "",
    message: "",
  });
  const { name, message } = feedback;
  const onInputChange = (e) => {
    addFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://agribackend.onrender.com/feedback/add", feedback);
    history.push("/");
    alert(" We will reply you soon");
  };

  return (
    <div>
      <Header />
      <div className="pagemargin">
        <div className="">
          <div class="container">

            <div className="feedbackformcss">
              <br />
              <br />
              <br />
              <div class="container contact-form">
                <div class="contact-image">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/feedback-8533318-6715454.png?f=webp" alt="rocket_contact" />
                </div>
                <form onSubmit={(e) => onSubmit(e)}>
                  <h3>
                    Give us your Feedback
                  </h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" name="name" value={name} onChange={(e) => onInputChange(e)} class="form-control" placeholder="Your Name *" />
                      </div>
                      <div class="form-group">
                        <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" />
                      </div>
                      <div class="form-group">
                        <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" />
                      </div>
                      <div class="form-group">
                        <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <textarea name="message" value={message} onChange={(e) => onInputChange(e)} class="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px" }}></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <br />
              <br />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedBack;
