import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Junior Full Stack Web Developer</h1>

            <hr/>

          <p>HTML5/CSS3 | Bootstrap |Material-UI| Basics of Software Design Pattern |  Business Programming SDLC-Methodologies | JavaScript | SQL | MySQL Database Server | RDMS PyMySQL | Data Science-Pandas,Numpy,Matplotlib |  NodeJS | Express | Python Flask</p>

        <div className="social-links">
        "root" in 
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/victor-nkuna-24526911a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1B1BEbZRSM2aEKp4MWV5ww%3D%3D" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/developerVictorNkuna" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/certification/fcc276718ef-256c-4c3e-a4c3-d8bfe61859cc/responsive-web-design" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/*TWITTER*/}
          <a href="https://www.freecodecamp.org/certification/fcc276718ef-256c-4c3e-a4c3-d8bfe61859cc/responsive-web-design" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
