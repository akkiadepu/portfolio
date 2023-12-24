import React, { useRef } from 'react'
// import {Container,Nav,Navbar} from 'react-bootstrap';
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_68xdvoh', 'template_w5z2p7g', e.target, 'sg5xpOVjbNjbThDqD')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <div className='main'>
      <section>
        <h1 style={{ "text-align": "center", "margin-top": "2%", "margin-bottom": "1%", "font-family": " Aladin" }} className='contact'>Contact Me</h1>
        <div className="container-fluid" id="con">


          <div style={{ "margin-top": " 85%;", 'margin-left': '5rem' }}>
            <h2 style={{ "font-style": "italic", color: "black" }}>Have an idea?</h2>
            <p style={{ color: "white" }}>Let's make it true!</p>
            <div style={{ "margin-top": "10%;" }}>
              <h6 style={{ color: "white", "font-weight": " lighter" }}><i className="fa-solid fa-location-dot"
                style={{ color: "white", "margin-right": "1%", "font-size": "25px", color: 'black' }}></i>India</h6>
              <h6 style={{ color: "white", "font-weight": "lighter" }}><i className="fa-regular fa-envelope"
                style={{ color: "white", "margin-top": "2%", " margin-right": "5%", " font-size": " 25px", color: 'black' }}></i>contact@akkiadepu.com
              </h6>
            </div>
          </div>
          <div style={{ "margin-left": "30%", "margin-top": '0.1%' }}>
            <form onSubmit={sendEmail} ref={form} >
              <input type="text" placeholder="Name" name='name'
                style={{ "width": "40%", "padding": "10px", "border-radius": "8px", "border": "none", "box-shadow": "1px 2px 5px rgb(68,79,100)", "marginRigth": "2%" }} required />
              <input type="email" placeholder="Email" name="email"
                style={{ "width": "40%", "padding": "10px", "border-radius": "8px", "border": "none", "box-shadow": "1px 2px 5px rgb(68,79,100)", 'margin-button': "15px" }} required />
              <br />
              <input type="text" placeholder="Subject" name="subject"
                style={{ "width": "80%", "display": "grid", "margin-top": "25px", "padding": "12px", "border-radius": "8px", "border": "none", "box-shadow": "1px 2px 5px rgb(68,79,100)" }} required />
              <br />
              <input type="text" placeholder="Message" name="message"
                style={{ "width": "80%", "display": "grid", "row-gap": "5px", "margin-bottom": "5%", "padding-left": "10px", "padding-top": "10px", "padding-bottom": "19%", "border-radius": "8px", "border": "none", "box-shadow": "1px 2px 5px rgb(68,79,100)" }} required />


              <button type='submit' value='send' className='button3'>
                <span>
                  Send message
                </span>
              </button>

            </form>

          </div>

        </div>

      </section>

      <footer>
        <div className="container-fluid"
          style={{ border: "none ", display: " flex", justifyContent: "space-between", backdropFilter: "blur(8px)", marginTop: "4.1%" }}>

          <h5 style={{ color: "white", fontWeight: "lighter", fontSize: "larger", paddingTop: "3%", paddingLeft: "5%" }}>Made with ❤️,
            By <span style={{ fontStyle: "italic", fontFamily: "sans-serif", fontSize: "22px" }}>Akhilandeswari</span> </h5>
          <div
            style={{ fontSize: "40px", color: " white", paddingLeft: "5%", paddingRight: "5%", paddingTop: "2%", paddingBottom: "1%", justifyContent: 'spacebetween' }}>
            <a href='https://mail.google.com/' target='to_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-solid fa-envelope"></i></a>
            <a href='https://github.com/akkiadepu' target='to_blanck' style={{ textDecoration: 'none', color: 'white' }}>  <i className="fa-brands fa-github"></i></a>
            <a href='https://www.linkedin.com/in/akhila-adepu-8b433120a/' target='to_blanck' style={{ textDecoration: 'none', color: 'white' }}> <i className="fa-brands fa-linkedin"></i></a>

          </div>
        </div>
      </footer>

    </div>
  )
}

export default Contact;