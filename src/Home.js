import React,{useState,useEffect} from 'react'
import './Text.css';
// import pic from './my.jpeg'
function Home() {
  const phrases = ["am front developer", "Build websites", "solve problems"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        (prevIndex + 1) % phrases.length
      );
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [phrases.length]);

  return (
    <div className='main'>
    <div id='load'>
      <section className="section" >
      {/* <!-- <div class="container-fluid" style="background-image: url(./Quality\ Blue\ White\ Powerpoint\ Templates\ -\ Quality\ Blue\ White\ Download\ image.jpg); background-size: cover; width: 90vw; height: 70vh;"> --> */}
      <div style={{"marginLeft":"10%","marginTop": "5%"}}>
        <h1 style={{"marginTop": "8%","fontFamily": "Aladin"," line-height":"2","color":" black" ,"fontSize": "55px"}}>Hi <span style={{fontSize:'3rem'}}>👋</span>,I am Akhilandeswari</h1>
        <span className="text text-one">I </span>
        <span className="animated-text">{phrases[currentPhraseIndex]}</span>
        <h5 style={{"marginTop": "2%","marginBottom":"2%","fontWeight":"500",color:'black'}}>I am a Front-End / Full-Stack Developer.
        </h5>
        <a href='https://www.instagram.com/' target='to_blanck' style={{textDecoration:'none'}}><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png" alt="" class="image" width="58px" height="68px"/></a>
       <a href='https://www.facebook.com/' target='to_blanck' style={{textDecoration:'none'}}> <img src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" alt="" class="image" width="55px" height="63px" /></a>
       <a href='https://www.linkedin.com/in/akhila-adepu-8b433120a/' target='to_blanck' style={{textDecoration:'none'}}> <img src="https://www.freeiconspng.com/thumbs/linkedin-icon/linkedin-icon-1.png" alt="" class="image" width="56px" height="64px"/></a>
       <a href='https://github.com/akkiadepu' target='to_blanck' style={{textDecoration:'none'}}> <img src="https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-github-4555889_121361.png" alt="" class="image" width="56px" height="64px"/></a>

      </div>



      <div class="dot" >
       {/* <img src='./my.png'/> */}
      
      </div>
      <a href="https://drive.google.com/file/d/1LWOEcW-DKxE538kQc6oGE8IFzbf1lkre/view" target='to_blanck'><button className="button1"
        style={{"marginLeft":"10%","marginTop": "1%"," width": "20%","padding": "2%","paddingLeft":"8%", "paddingRight":"8%","borderRadius":"6px"}}>Resume</button></a>
    </section>
    
  </div>
    </div>
      
    
  )
 
}

export default Home