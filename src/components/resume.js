import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Victor</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm an individual characterised by openness to experience and a dynamic personality which is  epitomized by my intellectual curiosity. I have a keen interest in the financial service industry in its broadest form, specifically financial inclusion using latest technology like block-chain and Artificial Intelligence. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>5 Flammingo Crescent Lansdwane,Cape Town, 7779</p>
            <h5>Phone</h5>
            <p>(+27) 760-170851</p>
            <h5>Email</h5>
            <p>victor.nkuna@yahoo.com</p>
            <h5>Web</h5>
            <p>https://victor-nkuna-online-portfolio.netlify.app/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Ngakana Secondary School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My University"
                 schoolDescription="Bachelor of Commerce specialising in Management Studies [CB001BUS06]  is the most flexible degree offered in the Faculty of Commerce. It gives students the ability to discover what they enjoy during their first and second years of study and make adjustments before their final year. The degree enables this by allowing students to take the same core courses as BBusSc students up to the third-year level.  How this works is if you are a student interested in this degree, you will be prescribed more courses than your peers on the other BCom degrees. In addition to the 18 core courses, you will be required to complete another 9 electives. 

                 This gives students a chance to discover what they enjoy doing within the School of Management Studies and honing in on that to complete their degree. This also sets the trajectory for their subsequent postgraduate degrees, so it is important that you aren't sure what you want to do after attaining your degree that you seek guidance and introspection during this time. This degree leaves room to do just that. http://www.students.uct.ac.za/students/study/degrees-diplomas/commerce/undergraduate"
                  Course Name Last Programme="Bcom(Management Studies)"
                  Completed="No"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
