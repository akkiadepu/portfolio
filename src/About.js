import React from 'react'
// import Contact from './Contact'
function About() {
  return (
    <div>
       <section>
      <div className="container-fluid" style={{marginTop:"3%", border: "none" }}>
        <h1 style={{textAlign:"center",fontSize:"50px",marginBottom: "4%", fontFamily: "Aladin", lineHeight:"2", color: "black"}}>About me</h1>
        <p className="page">Hello! I'm Akhilandeswari, a passionate and motivated Full Stack Developer thrilled to embark on
          a transformative journey in the realm of technology. As a recent graduate with a degree in B.sc(computers), my
          fascination with coding has blossomed
          into a deep love for creating innovative solutions.I am proficient in languages like
          java,python,html5,css,java script,React js,bootstrap and I am eager to contribute my skills to projects that
          make a positive impact.</p>
        {/* <!-- <p style="font-size: larger;">What sets me apart is not just my technical proficiency but also my aspiration to create technology that serves a purpose beyond the digital realm.</p> --> */}

        <p style={{fontSize:"larger",marginLeft: "89px",marginRight: "89px",color:'white'}}>I thrive in dynamic environments, where
          challenges fuel my creativity, and problem-solving is my forte.With a keen eye for detail and a commitment to
          delivering high-quality code, I am ready to take on new challenges and collaborate with like-minded
          professionals.
          Let's not just code; let's create a brighter, more sustainable future together!</p>
        <p style={{fontSize: "larger",marginLeft: "89px",marginRight: "89px" ,color:'white'}}>I'm actively looking for oppourtunities to
          work and collaborate,
          you can <span style={{color:"#cfaf9e"}}><a href='http://localhost:3000/Contact' style={{textDecoration: "none"}}>CONTACT
              ME</a></span> or reach out to me on my socials given below!</p>
      </div>
    </section>

    <footer>
      <div className="container-fluid"
        style={{border: "none ",display:" flex",justifyContent:"space-between",backdropFilter: "blur(8px)", marginTop: "4.8%"}}>

        <h5 style={{color: "white",fontWeight: "lighter",fontSize: "larger", paddingTop: "3%",paddingLeft: "5%"}}>Made with ❤️,
          By <span style={{fontStyle: "italic",fontFamily:"sans-serif", fontSize: "22px"}}>Akhilandeswari</span> </h5>
        <div
          style={{fontSize:"40px",color:" white",paddingLeft:"5%",paddingRight: "5%",paddingTop: "2%",paddingBottom: "1%",justifyContent:'spacebetween'}}>
          <a href='https://mail.google.com/' target='to_blank' style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></a>
          <a href='https://github.com/akkiadepu' target='to_blanck' style={{textDecoration:'none',color:'white'}}>  <i className="fa-brands fa-github"></i></a>
          <a href='https://www.linkedin.com/in/akhila-adepu-8b433120a/' target='to_blanck' style={{textDecoration:'none',color:'white'}}> <i className="fa-brands fa-linkedin"></i></a>

        </div>
      </div>
    </footer>
    </div>
  )
}

export default About