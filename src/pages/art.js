import React, { useState, useEffect } from "react";
import { Header, Blurb, Button, ContainerVideo } from "../pages/coding";
import classNames from "classnames";

const Pics = () => {};

const ContainerPic = ({ text, tech, summary, pic, picc }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [isClickedTwo, setIsClickedTwo] = useState(true);

  const imgClass = classNames({
    artImage: true,
    "elfOne-clicked": !isClicked,
  });

  const imgClassTwo = classNames({
    artImage: true,
    "elfTwo-clicked": !isClickedTwo,
  });

  return (
    <div className="container">
      <h2 className="subheader">{text}</h2>
      <p>
        demonstrated skills: <b>{tech}</b>
      </p>
      <div className="imageContainer">
        <img
          className={imgClass}
          onClick={() => setIsClicked(!isClicked)}
          src={pic}
        />
        <img
          className={imgClassTwo}
          onClick={() => setIsClickedTwo(!isClickedTwo)}
          src={picc}
        />
      </div>
      <div className="summaryContainer">
        <p>{summary}</p>
      </div>
    </div>
  );
};

const Art = () => {
  const [blurb, setBlurb] = useState(0);

  const blurbs = [
    "here are my art projects!",
    "art has been a constant in my life for forever. mostly in traditional mediums such as ink, acrylic, and oil painting.",
    "as i entered college and pursued my degree in studio art, i began to concentrate my major into a technical focus. i learned the creative coding language p5.js, took a electronic sculptural class using Arduino, and a video game design class for 3D modeling with animation and scripting in C#. post-grad, I’ve continued my pursuit into programming, learning languages such as HTML, CSS, JavaScript, and React to build more complex projects.",
    "many of my art projects now overlap with my coding projects, since i often intertwine the two. please check out my coding page for a deeper look into those!",
  ];

  const pics = {
    elf: [
      "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/Screenshot%202025-03-19%20at%205.36.16%E2%80%AFPM.png?v=1742420312009",
      "https://cdn.glitch.global/9136e073-9a44-4dec-a568-2ef9ae061fbc/Screenshot%202025-03-19%20at%205.36.36%E2%80%AFPM.png?v=1742420314560",
    ],
  };

  const handleBlurb = () => {
    setBlurb(blurb + 1);
    if (blurb > blurbs.length - 2) {
      setBlurb(0);
    }
  };

  // const picture = () => {
  // for(let i=0; i<pics.elf.length; i++){
  //   return(
  //     <img src={pics.elf[i]} />
  //   )
  // }
  // }

  return (
    <>
      <Header text="art" />
      <Blurb
        text={blurbs[blurb]}
        handleBlurb={handleBlurb}
        tracker={blurb + 1}
        total={blurbs.length}
      />
      <div className="align">
        <ContainerPic
          text="Elf Series"
          tech="procreate, illustration"
          pic={pics.elf[0]}
          picc={pics.elf[1]}
          summary="this is a glimpse into my love for illustration, created on procreate on the ipad. i enjoy fantastical, whimsical, and romantic themes in my art."
        />
        <ContainerVideo
          text="Witchy Work"
          tech="maya, unity, 3D modeling, lighting"
          mp4="https://cdn.glitch.me/9136e073-9a44-4dec-a568-2ef9ae061fbc/witchy%20work%20780.mp4?v=1743481326612"
          summary="this was my culminating project for my 3D environment modeling class. i modeled every prop in my environment by hand in maya, then set up the lighting and rendering in unity. i scripted the player controls in unity using C#. my goal to was to create a story within the constricted environment of a sigular room, a story that revealed itself to the player the closer they looked."
        />
      </div>
    </>
  );
};

export default Art;
