import React from "react";
import "./App.css";
import 'primereact/resources/themes/arya-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Image } from "primereact/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faApple, faBootstrap, faCss3Alt, faHtml5, faNodeJs, faReact, faSquareJs, faWindows } from "@fortawesome/free-brands-svg-icons";
import scrollToSection from "./ScrollToSection";
import scrollToTop from "./ScrollToTop";
import FrozenMenuBar from "./FrozenMenuBar";

function App() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => scrollToTop(50),
    },
    {
      label: "Work",
      icon: "pi pi-folder-open",
      command: () => scrollToSection("projects"),
    },
    {
      label: "About Me",
      icon: "pi pi-info-circle",
      command: () => scrollToSection("about"),
    },
    {
      label: "Experience",
      icon: "pi pi-briefcase",
      command: () => scrollToSection("experience", 60),
    },
    {
      label: "Connect",
      icon: "pi pi-user-plus",
      command: () => scrollToSection("connect", 80),
    }
  ];

  return (
    <div className="container">
      <FrozenMenuBar items={items}/>
      <h1>Matthew Lewis - Software Developer</h1>
      <h3>Experienced With:</h3>
      <div className="row">
        <div className="icon-container">
          <div className="icon">
            <a href="https://react.dev/" target="_blank">
              <FontAwesomeIcon icon={faReact} style={{ fontSize: "1.75rem" }}/>
            </a>
          </div>
          <p>React</p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <FontAwesomeIcon icon={faSquareJs} style={{ fontSize: "1.75rem" }}/>
            </a>
          </div>
          <p>JavaScript</p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
              <FontAwesomeIcon icon={faHtml5} style={{ fontSize: "1.75rem" }}/>
            </a>
          </div>
          <p>HTML</p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: "1.75rem" }}/>
            </a>
          </div>
          <p>CSS</p>
        </div>
      </div>
      <div className="row">
        <div className="icon-container">
          <div className="icon">
            <a href="https://getbootstrap.com/" target="_blank">
              <FontAwesomeIcon icon={faBootstrap} style={{ fontSize: "1.75rem" }} />
            </a>
          </div>
          <p>Bootstrap</p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://nodejs.org/en/about" target="_blank">
              <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: "1.75rem" }} />
            </a>
          </div>
          <p>Node.js</p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://www.apple.com/macos" target="_blank">
              <FontAwesomeIcon icon={faApple} style={{ fontSize: "1.75rem" }} />
            </a>
          </div>
          <p>macOS</p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://www.microsoft.com/en-us/windows" target="_blank">
              <FontAwesomeIcon icon={faWindows} style={{ fontSize: "1.75rem" }} />
            </a>
          </div>
          <p>Windows</p>
        </div>
      </div>
      <h3 id="projects">Check Out My Projects:</h3>
      <p className="project-description"><b>Decoder Ring:</b> A site that allows users to encrypt<br /> 
        and decrypt messages. Built using JavaScript, HTML, CSS.</p>
      <div className="text-center">
        <a href="https://iammattlewis.github.io/decoder-ring/" target="_blank">
          <img src="/decoder-screenshot.jpg" width="500dvh"></img>
        </a>  
        <div className="links">
          <a href="https://github.com/iammattlewis/decoder-ring" target="_blank" style={{ marginRight: "10px" }}><b>CODE</b></a>
          <a href="https://iammattlewis.github.io/decoder-ring/" target="_blank"><b>LIVE</b></a>
        </div>
      </div>  
      <p className="project-description"><b>Flashcard-o-matic:</b>A site that allows the user to create<br /> 
      and edit decks of flashcards. Built using React, CSS.</p>
      <div className="text-center">
        <a href="https://matt-lewis-flashcard-app.netlify.app/" target="_blank" style={{ marginTop: "10px" }}>
          <img src="/flashcard-screenshot.jpg" width="500dvh"></img>
        </a>
        <div className="links">
          <a href="https://github.com/iammattlewis/flashcard-app" target="_blank" style={{ marginRight: "10px" }}><b>CODE</b></a>
          <a href="https://matt-lewis-flashcard-app.netlify.app/" target="_blank"><b>LIVE</b></a>
        </div>
      </div>  
      <h2 id="about">About Me:</h2>
      <p className="centered-text">
        After years of working in warehouses,<br />
        I finally decided it was time to pursue an interest I've always had: software.<br />
        I'm looking forward to jumping into the development process<br />
        and being part of a creative team solving real-world problems for myself and others.<br />
      </p>
      <h3>When I'm not learning about software, I enjoy:</h3>
      <div className="hobbies">
        <FontAwesomeIcon icon={faCat} />
        <h5>Spending time with my cat, Newman.</h5>
        <FontAwesomeIcon icon={faCat} flip="horizontal" />
      </div>
      <div className="hobbies">
        <FontAwesomeIcon icon={faBaseball} />
        <h5>Watching baseball, especially the Atlanta Braves.</h5>
        <FontAwesomeIcon icon={faBaseball} flip="horizontal" />
      </div>
      <div className="hobbies">
        <FontAwesomeIcon icon={faUserGroup} />
        <h5>Spending time with my friends.</h5>
        <FontAwesomeIcon icon={faUserGroup} flip="horizontal" />
      </div>
      <Image src="/Newman.jpg" alt="Newman" width="500" />
      <div>
        <h2 id="experience">My Resumé:</h2>
        <iframe src="/resume.pdf" width= "800px" height= "800px"></iframe>
      </div>
      <h2 id="connect">Connect:</h2>
      <div className="social-icons">
        <a href="https://github.com/iammattlewis" target="_blank" rel="noopener noreferrer">
          <i className="pi pi-github" style={{ fontSize: "1.75rem" }}></i>
        </a>
        <a href="https://www.linkedin.com/in/iammattlewis/" target="_blank" rel="noopener noreferrer">
          <i className="pi pi-linkedin" style={{ fontSize: "1.75rem" }}></i>
        </a>
        <a href="mailto:032e2vn0j@mozmail.com">
          <i className="pi pi-envelope" style={{ fontSize: "1.75rem" }}></i>
        </a>
      </div>
    </div>
  );
}

export default App;
