import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import star1 from "../assets/stars/star1.png";
import star2 from "../assets/stars/star2.png";
import star3 from "../assets/stars/star3.png";
import star4 from "../assets/stars/star4.png";
import star5 from "../assets/stars/star5.png";
import star6 from "../assets/stars/star6.png";
import star7 from "../assets/stars/star7.png";
import star8 from "../assets/stars/star8.png";
import hearts from "../assets/hearts_plaid.png";
import hero from "../assets/main plaid.png";
import tile1 from "../assets/tiles/tile1.png";
import tile2 from "../assets/tiles/tile2.png";
import tile3 from "../assets/tiles/tile3.png";
import tile4 from "../assets/tiles/tile4.png";

const Subheader = ({ text, classname }) => {
  return <h2 className={classname}>{text}</h2>;
};

const TechStack = ({ img, text }) => {
  return (
    <div className="techStack">
      <img src={img} />
      <p>{text}</p>
    </div>
  );
};

const Home = () => {
  const imgs = [
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/html-5.png?v=1742186066904",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/css-3.png?v=1742185711038",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/java-script-logo.png?v=1742185695999",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/react-icon-2048x1822-j20tyq26.png?v=1742186148723",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/github.png?v=1742239187949",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/code-stable-white.png?v=1742239182979",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/notion.png?v=1742239179316",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/Adobe-Logo-White-png_Horizontal_Red.png?v=1742239175028",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/unity-logo-white.png?v=1742332099554",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/maya-2017-logo-black-and-white.png?v=1742332164814",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/P5.js_icon.svg.png?v=1742332441825",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/app-icon-procreate-vector-45215008.png?v=1742335533523",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/cpp-programming-language-flat-34d199%20copy.png?v=1743478522432",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/arduino-icon-2048x968-b97ryocj.png?v=1743478525648",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/tinkercad-logo%20copy.png?v=1743478519270",
    "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/scratch-svgrepo-com.svg?v=1743529009942",
  ];

  return (
    <>
      <div className="imgContainer">
        <img id="star5" src={star5} style={{animation:"wiggle 3s infinite step-start"}}/>
        <img id="partyHat" src={hero}/>
        <img id="star2" src={star1} style={{animation:"pop 2s infinite step-start", width: "5rem"}} />
        <p></p>       
        <img id="hearts" src={hearts} />
        <img id="star3" src={star4} style={{marginLeft: "80vw", width: "5rem"}} />
        <img id="star1" src={star2} style={{marginLeft: "60vw", width: "5rem"}} />
        <img id="star2" src={star3} style={{marginRight: "60vw"}}/>
        <img id="star6" src={star7} style={{animation:"wiggle 3s infinite step-start"}} />
        <img id="star7" src={star6} style={{animation:"pop 2s infinite step-start", marginLeft: "9vw"}}/>
        <img id="star8" src={star8} />
      </div>

      <div className="home">
        <div className="textContainer" style={{marginTop:"8rem"}}><img src={tile1} style={{width:"10%"}}/> 
          <h1>lily nguyen</h1>
        </div>
        <div className="instructions">
          <h2 className="roles">
            <Link href="/coding">amature programmer</Link>
            <p></p>
            <Link href="/art">artist & creative strategist</Link>
            <p></p>
            <Link href="/gwc">hobby enthusiast</Link>
          </h2>
          <p style={{margin: "0px"}}>
            greetings! i am a 26 year old self-taught programmer, designer, and strategist
            that uses code and a keen design eye to get creative.{" "}
            <b>
              check out my pages to explore more of my projects and hobbies!
            </b>
          </p>
          
          <div className="textContainer"><img src={tile2} style={{width:"8%", margin: "6rem 0rem 0rem 0rem"}}/>
            <Subheader text="TOOLS" classname="homeSubheader" />
          </div>
          <p>a mix of coding and art-making software</p>
          {/* <TechStack img={imgs[6]} text="milanote" /> */}
          <TechStack img={imgs[6]} text="notion" />
          <TechStack img={imgs[11]} text="procreate" />
          <TechStack img={imgs[7]} text="adobe" />
          <TechStack img={imgs[8]} text="unity" />
          <TechStack img={imgs[9]} text="maya" />
          {/* <TechStack img={imgs[6]} text="capcut" /> */}
          {/* <TechStack img={imgs[14]} text="tinkerCAD" /> */}

          <div className="textContainer"><img src={tile4} style={{width:"8%", margin: "6rem 0rem 0rem 0rem"}}/>
            <Subheader text="TECH STACK" classname="homeSubheader" />
          </div>
          <p>always learning, but here's where i'm at right now!</p>
          <TechStack img={imgs[0]} text="html" />
          <TechStack img={imgs[1]} text="css" />
          <TechStack img={imgs[2]} text="javascript" />
          <TechStack img={imgs[3]} text="react" />
          <TechStack img={imgs[10]} text="p5.js" />
          <TechStack img={imgs[4]} text="github" />
          <TechStack img={imgs[5]} text="VSC" />
          {/* <TechStack img={imgs[12]} text="c++" />
          <TechStack img={imgs[13]} text="arduino" />
          <TechStack img={imgs[15]} text="scratch" /> 
          <p>in the pipeline: typescript, tailwind, node.js, SQL</p> */}

          <div className="textContainer"><img src={tile3} style={{width:"8%", margin: "6rem 0rem 0rem 0rem"}}/>
            <Subheader text="CONTACT" classname="homeSubheader" />
          </div>
          <div className="email">
            <p><b>lilyhknguyen@gmail.com</b></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
