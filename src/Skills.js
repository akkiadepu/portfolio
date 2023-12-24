import React from 'react'

function Skills() {
  return (
    <div>
       <section>
      <div className="container-fluid" id="sk">
        <h1 style={{fontFamily:" Aladin"}}>Technologies and Tools</h1>
        <p style={{marginTop: "2%",marginBottom:" 5%",color:'white'}}>Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant apps and websites for smartphones, tablets, and
          desktops.</p>
        <div className="skills">
          <div className='a'
            style={{display: "flex",border: "none", width: "55%",height: "100%"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" alt="" width="55px" height="55px" />
            <p style={{marginLeft: "4%",marginTop: "8%", textAlign: "center",color:'black'}}>C languages</p>
          </div>
          <div className='a'
            style={{display: "flex",border: "none", width: "55%",height: "100%"}}>
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" width="55px" height="55px"/>
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>Java</p>
          </div>
          <div className='a'
            style={{display: "flex",border: "none", width: "55%",height: "100%"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" alt="" width="55px" height="55px"/>
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>Python</p>
          </div>
          <div className='c'
            style={{display: "flex",border: "none", width: "55%",height: "100%"}}>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" width="55px" height="55px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>HTML</p>
          </div>
          <div className='c'
            style={{display: "flex",border: "none", width: "55%",height: "100%"}}>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="" width="55px" height="55px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>CSS</p>
          </div>
          <div className='c'
            style={{display: "flex",border: "none", width: "55%",height: "100%"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="" width="59px" height="55px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>Bootstrap</p>
          </div>
          <div className='c'
            style={{display: "flex",border: "none", width: "55%",height: "100%"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" width="55px" height="55px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>Java Script</p>
          </div>
          <div className='c'
            style={{display: "flex",border: "none", width: "55%",height: "100%" }}>
            <img src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-512x455-jctj7y5w.png" alt="" width="56px" height="51px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:"black"}}>React js</p>
          </div>
          <div className='c'
            style={{display: "flex",border: "none", width: "55%",height: "100%", }}>
            <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt="" width="55px" height="55px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>Node js</p>
          </div>
          <div className='d'
            style={{display: "flex",border: "none", width: "55%",height: "100%", }}>
            <img src="https://avatars.githubusercontent.com/u/18133?s=280&v=4" alt="" width="55px" height="55px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>Git/GitHub</p>
          </div>
          <div className='d'
            style={{display: "flex",border: "none", width: "55%",height: "100%", }}>
            <img src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png" alt="" width="55px" height="55px" />
            <p style={{marginLeft:"4%",marginTop:"8%", textAlign: "center",color:'black'}}>vercel</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div className="container-fluid"
        style={{border: "none ",display:" flex",justifyContent:"space-between",backdropFilter: "blur(8px)", marginTop: "3.5%"}}>

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

export default Skills