import React, { Component } from 'react';
import email from "../images/icons/email.png";
import linkedin from "../images/icons/linkedin.png";
import github from "../images/icons/github.png";
import resume from "../images/icons/resume.png";

class LandingPage extends Component {
  render() {
    let bodyStyle = { backgroundColor: '#000000', width: '100vw', height: '100vh' };
    let nameStyle = { color: '#ffffff', fontfamily: 'Avenir', fontWeight: 600 };
    let subNameStyle = { color: '#c1c1c1', fontfamily: 'Avenir', fontSize: 20 };
    let linkDivStyle = { marginBottom: 20, display: 'flex' };
    let linkTextStyle = { color: '#ffffff', fontWeight: 500, fontSize: 16, marginLeft: 10 }
    return (
      <div style={bodyStyle} className="color-page">
        <div style={{ padding: 150 }}>
          <div style={{ marginBottom: 25 }} >
            <h1 style={nameStyle}>Yash Kakodkar</h1>
            <h4 style={subNameStyle}>
              Code. Design. Music.
            </h4>
          </div>
          <div>
            <div style={linkDivStyle}>
              <img src={email} width="20" height="20" />
              <a href="mailto:yskakodkar@utexas.edu" style={linkTextStyle}>Email</a>
            </div>
            <div style={linkDivStyle}>
              <img src={linkedin} width="20" height="20" />
              <a href="https://www.linkedin.com/in/yashkakodkar/" style={linkTextStyle}>Linkedin</a>
            </div>
            <div style={linkDivStyle}>
              <img src={github} width="20" height="20" />
              <a href="https://github.com/YashKakodkar" style={linkTextStyle}>Github</a>
            </div>
            <div style={linkDivStyle}>
              <img src={resume} width="20" height="20" />
              <a href="files/Yash Kakodkar Resume.pdf" style={linkTextStyle} download>Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;