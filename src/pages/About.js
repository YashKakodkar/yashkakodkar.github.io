import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    let bodyStyle = { backgroundColor: '#000000', width: '100vw', height: '100vh' };
    let nameStyle = { color: '#ffffff', fontfamily: 'Avenir', fontWeight: 600 };
    let paragraphStyle = { color: '#c1c1c1', fontfamily: 'Avenir', fontSize: 20 };
    return (
      <div style={bodyStyle} className="color-page">
        <div style={{ padding: 150 }}>
          <div style={{ marginBottom: 25 }} >
            <h1 style={nameStyle}>Hi there!</h1>
            <p style={paragraphStyle}>
              My name is Yash. I'm currently a third year studying Computer Science <br />
              with a minor in Business at the University of Texas at Austin. Hook'em! <br />
              <br />
              I've a been a dreamer since I could remember starting by designing my crazy <br />
              ideas to ultimately building them out. I think technology is a fascinating <br />
              discipline that can truly be utilized to solve some of the greatest problems. <br />
              <br />
              Outside from school, I love to travel, take pictures and play the Tabla, an <br />
              Indian classical percussion instrument I've been playing since I was 6 years old.
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutPage;