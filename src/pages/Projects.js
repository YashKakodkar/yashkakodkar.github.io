import React, { Component } from 'react';

class ProjectPage extends Component {
  render() {
    let bodyStyle = { backgroundColor: '#000000', width: '100vw', height: '100vh' };
    let titleStyle = { color: '#ffffff', fontfamily: 'Avenir', fontWeight: 600 };
    let subTitleStyle = { color: '#c1c1c1', fontfamily: 'Avenir', fontSize: 20 };
    let linkTextStyle = { color: '#67baf5', fontfamily: 'Avenir', fontSize: 20 };
    return (
      <div style={bodyStyle} className="color-page">
        <div style={{ padding: 150 }}>
          <div style={{ marginBottom: 25 }} >
            <h1 style={titleStyle}>Coming soon to a browser near you.</h1>
            <h4 style={subTitleStyle}>
              In the meantime feel free to checkout my
              <a href="https://github.com/YashKakodkar" style={linkTextStyle}> Github </a>
              or my
              <a href="files/Yash Kakodkar Resume.pdf" style={linkTextStyle} download> Resume </a>
               to learn more about my work!
            </h4>
          </div>

        </div>
      </div>
    );
  }
}

export default ProjectPage;