import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import emailjs from 'emailjs-com';
const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_enqwz5g';
    const templateID = 'template_uo5wmtr';
    const userID = '2ZDkcLHfPtIIlKu3V';

    // Replace with the actual email field values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    // Send the email
    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        // Reset the form here if needed
        e.target.elements.name.value=''
        e.target.elements.email.value=''
        e.target.elements.subject.value=''
        e.target.elements.message.value=''
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <div>
        <Header/>
      <div className="pagemargin">
        <div className="">
          <div class="container">
         
         <br/>
          <br/>
          <br/>
          <div class="container">

<div class="row justify-content-center ">
  <div class="col-12 col-md-8 col-lg-6 pb-5 ">



    <form onSubmit={handleSubmit}>
      <div class="card border-dark rounded-0">
        <div class="card-header p-0">
          <div class="bg-dark text-white text-center py-2">
            <h3><i class="fa fa-envelope me-2"></i>Contact Us</h3>
            <p class="m-0">
              Please fill the form and send us
            </p>
          </div>
        </div>
        <div class="card-body p-3 p-5">


          <div class="form-group ">
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-user text-dark"></i></div>
              </div>
              <input type="text" class="form-control" id="nombre" name="name" placeholder="Enter Your Name" required />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-envelope text-dark"></i></div>
              </div>
              <input type="email" class="form-control" id="nombre" name="email" placeholder="Enter your Email Address" required />
            </div>
          </div>

          <div class="form-group ">
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-commenting  text-dark"></i></div>
              </div>
              <input type="text" class="form-control" id="nombre" name="subject" placeholder="Enter Subject" required />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-comment text-dark"></i></div>
              </div>
              <textarea rows={5} name="message" class="form-control" placeholder="Enter your Message" required></textarea>
            </div>
          </div>

          <div class="text-center">
            <input type="submit" value="Send Mail" class="btn btn-dark btn-block rounded-0 py-2" />
          </div>
        </div>

      </div>
    </form>


  </div>
</div>
</div>

          
     
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
