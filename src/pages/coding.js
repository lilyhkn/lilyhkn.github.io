import React, { useState, useEffect } from "react";
import classNames from "classnames";

const Header = ({ text }) => {
  return <h1 className="page">{text}</h1>;
};
export { Header };

const Blurb = ({ text, handleBlurb, tracker, total }) => {
  return (
    <div className="page">
      <div className="container">
        <p className="blurbTracker">
          {tracker}/{total}
        </p>
        <p>{text}</p>
      </div>
      <div>
        <Button onClick={handleBlurb} text="read more" />
      </div>
    </div>
  );
};
export { Blurb };

const Button = ({ text, onClick }) => {
  //   const [isHovered, setIsHovered] = useState(false)

  //   const btnClass = classNames({
  //     btn: true,
  //     "btn-over": isHovered
  //   })

  //{btnClass} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}

  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};
export { Button };

const Container = ({ preview, text, tech, summary, link, linkText }) => {
  return (
    <div className="container">
      <h2 className="subheader">{text}</h2>
      <p>
        demonstrated skills: <b>{tech}</b>
      </p>
      <iframe allow="camera" src={preview}></iframe>
      <div className="summaryContainer">
        <p>{summary}</p>
        <a href={link}>{linkText}</a>
      </div>
    </div>
  );
};
export { Container };

const ContainerVideo = ({ text, tech, summary, webm, mp4 }) => {
  return (
    <div className="container">
      <h2 className="subheader">{text}</h2>
      <p>
        demonstrated skills: <b>{tech}</b>
      </p>
      <video controls muted="true">
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
      <div className="summaryContainer">
        <p>{summary}</p>
      </div>
    </div>
  );
};
export { ContainerVideo };

const Coding = () => {
  const [blurb, setBlurb] = useState(0);

  const blurbs = [
    "here are my coding projects!",
    "my first introduction to coding was in 2020, when i took a creative coding class in college as a part of my art degree. we used processing, and i was just beginning to understand what functions, variables, loops, and other foundational coding elements were. the best thing i left this class with was learning how to use code to make my creative ideas come to life, even if it was extremely buggy, convoluted, and inefficient. but hey, they were mine and they worked!",
    "i began to take self-teaching myself programming seriously after college. i remembered how bloated my old programs were in college, and i wanted to learn how to get better.",
    "i began to teach myself basic web development with html, css, and javascript. i found that the best way for me to learn wasn't to follow tutorials, but to come up with a project idea and just CODE. once i dived in, my learning increased exponentially. i read docs in order to debug, discovered more efficient ways to do things, and increased the tools in my toolbelt to bring my projects to life.",
    "eventually, i knew i wanted to dive into react. i wanted a more efficient tool to create my projects. i began full stack open's react course and learned basic best practices. but as i mentioned, charging head-on into projects is how i learn best. my first project using react is this very own website! i've already learned so much.",
    "please take a look at my coding projects below! :)",
  ];

  const summaries = [
    "this project's goal was to create an interactive game of pong that coalesced digital and physical worlds. i used ml5 to track players' wrists that they could then use to bounce the ball back in forth, mimicking pong.",
    "this website was my first real project using react. creating real world applications of code will never stop being the coolest thing ever. in the future i hope to add more interactivity and design concepts. i also am planning to learn more about backend soon!",
    "this friendship quiz, as you might be able to tell by the 'Ms.Nguyen', was created as a demo for my Girls Who Code club. i used is as an example for my students to create their own friendship quizzes to send to their friends. i would love to revamp this project in the future to incorporate the skills i've learned with react.",
    "this project was created as an experiement between creative coding and physical computing. users can click on each picture and a corresponding led light (hidden under a ceramic form i made) would light up in response. it was interesting to understand more about serial ports and how c++ operates on the computer through this project.",
  ];

  const handleBlurb = () => {
    setBlurb(blurb + 1);
    if (blurb > blurbs.length - 2) {
      setBlurb(0);
    }
  };

  return (
    <>
      <Header text="coding" />
      <Blurb
        text={blurbs[blurb]}
        handleBlurb={handleBlurb}
        tracker={blurb + 1}
        total={blurbs.length}
      />
      <div className="align">
        <Container
          text="human pong"
          tech="p5.js, ml5, javascript"
          preview={"https://editor.p5js.org/lilyhkn/full/-NKfyQ_Ma"}
          summary={summaries[0]}
          link="https://editor.p5js.org/lilyhkn/full/LLlbL3P6I"
          linkText="psst! click here to fully enjoy the interactivity!"
        />
        <Container
          text="this website!"
          tech="react, html, css, javascript, wouter, classnames"
          preview={
            "https://codesandbox.io/embed/y3z2qn?view=preview&module=%2Fsrc%2Fpages%2Fcoding.js"
          }
          summary={summaries[1]}
        />
        <Container
          text="be my friend?"
          tech="html, css, javascript"
          preview={"https://nguyen-personal-quiz.glitch.me/"}
          summary={summaries[2]}
          link="https://nguyen-personal-quiz.glitch.me/"
          linkText="click here for the live site!"
        />
        <ContainerVideo
          text="sensory serial"
          tech="p5.js, c++, arduino circuitry"
          mov="assets/IMG_5948.mov"
          summary={summaries[3]}
        />
      </div>
    </>
  );
};

export default Coding;
