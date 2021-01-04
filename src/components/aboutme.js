import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div><h1>About Me Page</h1></div>
      
    )
  }

  newMethod() {
    return <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> I work </p>;
  }
}
// function paragraphImg() {
//   return <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
//     I work </p>

// }
export default About;
