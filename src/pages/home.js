import React, { useState, useEffect } from "react";
import { Link } from "wouter";

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
        <img
          id="partyHat"
          src="https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/transparent.png?v=1743517728541"
        />
        <img
          id="hearts"
          src="https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/IMG_0451.png?v=1742313239096"
        />
        <img
          id="smile"
          src="https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/23712.png?v=1742317601799"
        />
      </div>

      <div className="home">
        <h1>hi, i'm lily</h1>
        <div className="instructions">
          <h2 className="roles">
            <Link href="/coding">amature programmer</Link>
            <p></p>
            <Link href="/art">artist & creative strategist</Link>
            <p></p>
            <Link href="/gwc">hobby enthusiast</Link>
          </h2>
          <p>
            i am a 26 year old self-taught programmer, designer, and strategist
            that uses code and a keen design eye to get creative.{" "}
            <b>
              check out my pages to explore more of my projects and hobbies!
            </b>
          </p>

          <Subheader text="tech stack" classname="homeSubheader" />
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
          <TechStack img={imgs[15]} text="scratch" /> */}
          <p>in the pipeline: typescript, tailwind, node.js, SQL</p>

          <Subheader text="tools" classname="homeSubheader" />
          <p>a mix of coding and art-making software</p>
          <TechStack img={imgs[6]} text="milanote" />
          <TechStack img={imgs[6]} text="notion" />
          <TechStack img={imgs[11]} text="procreate" />
          <TechStack img={imgs[7]} text="adobe" />
          <TechStack img={imgs[8]} text="unity" />
          <TechStack img={imgs[9]} text="maya" />
          <TechStack img={imgs[6]} text="capcut" />
          <TechStack img={imgs[6]} text="adobe suite" />
          {/* <TechStack img={imgs[14]} text="tinkerCAD" /> */}

          <Subheader text="contact" classname="homeSubheader" />
          <div className="email">
            <img src="https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/Untitled_Artwork.png?v=1742411054402" />{" "}
            <p>lilyhknguyen@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
