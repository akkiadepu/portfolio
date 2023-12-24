import React from 'react'
import paytm from './paytm.png';
import login from './login.png';
import website from './website.png';
import todo from './todo.png';
import resume from './resume.png';
function Project() {
  return (
    <div>
      <section>
      <h1 style={{textAlign: "center", fontSize: "45px", marginTop: "3%", fontFamily:" Aladin"}}>Projects</h1>
      <h5 style={{marginLeft: "10%",marginTop: "4%", marginBottom: "3%", fontSize: "33px"}}>What I Built</h5>
      <div className="container-fluid" id="pro">
        {/* <!-- first --> */}
        <div className="card" style={{width: "90%", height: "100%",borderRadius: "10px"}}>
          <img src={paytm} className="card-img-top" alt="..."
            style={{borderTopRightRadius: "10px",borderTopLeftRadius: "10px", borderBottom:"1px solid #ecf0f1"}}/>
          <div className="card-body">
            
            <p className="card-text" style={{fontSize: "23px"}}> Paytm App Layout project</p>
            <a href="https://paytmmy-fsoojprb5-akhilas-projects-2a275c45.vercel.app/" target='-blank' style={{textDecoration:'none'}} ><button class="button">
            Read More 
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
</button></a>
          </div>
        </div>
        {/* <!-- second --> */}
        <div class="card" style={{width: "90%", height: "100%",borderRadius:"10px"}}>
          <img src={login} class="card-img-top" alt="..."
            style={{borderTopRightRadius: "10px",borderTopLeftRadius: "10px", borderBottom:"1px solid #ecf0f1"}}/>
          <div className="card-body">
            
            <p className="card-text" style={{fontSize: "23px"}}> A Simple Login and Signup Page</p>
            <a href="https://loginpage-gamma-beige.vercel.app/" target='-blank' style={{textDecoration:'none'}}><button class="button">
            Read More 
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
</button></a>
          </div>
        </div>
        {/* <!-- thire --> */}
        <div class="card" style={{width: "90%", height: "100%",borderRadius:"10px"}}>
          <img src={website} class="card-img-top" alt="..."
            style={{borderTopRightRadius: "10px",borderTopLeftRadius: "10px", borderBottom:"1px solid #ecf0f1"}}/>
          <div className="card-body">
            
            <p className="card-text" style={{fontSize: "23px"}}>A Sample Hotal Webpage </p>
            <a href="https://web-page1-33bj.vercel.app/" target='-blank' style={{textDecoration:'none'}} ><button class="button">
            Read More 
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
</button></a>
          </div>
        </div>
        {/* <!-- fore --> */}
        <div class="card" style={{width: "90%", height: "100%",borderRadius: "10px"}}>
          <img src={resume} class="card-img-top" alt="..."
            style={{borderTopRightRadius: "10px",borderTopLeftRadius: "10px", borderBottom:"1px solid #ecf0f1"}}/>
          <div className="card-body">
           
            <p className="card-text" style={{fontSize: "23px"}}>A Small Resume Project</p>
            <a href="https://myresume-rosy.vercel.app/resume.html" target='-blank' style={{textDecoration:'none'}}><button class="button">
            Read More 
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
</button></a>
          </div>
        </div>
        {/* <!-- five --> */}
        <div class="card" style={{width: "90%", height: "100%",borderRadius: "10px"}}>
          <img src={todo} class="card-img-top" alt="..."
            style={{borderTopRightRadius: "10px",borderTopLeftRadius: "10px", borderBottom:"1px solid #ecf0f1"}}/>
          <div className="card-body" >
            
            <p className="card-text" style={{fontSize: "23px"}}>To Do List Project</p>
            <a href="https://to-do-list-kappa-eight-26.vercel.app/" target='-blank' style={{textDecoration:'none'}}><button class="button">
            Read More 
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
</button></a>
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

export default Project