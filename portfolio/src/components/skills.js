import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid>
        <Cell col={12}>
          <div className="social-skills">
            <ul>
              <i class="devicon-html5-plain-wordmark"></i>
              <i class="devicon-react-original-wordmark"></i>
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-jquery-plain-wordmark"></i>
              <i class="devicon-mysql-plain-wordmark"></i>
              <i class="devicon-mongodb-plain-wordmark"></i>    
              <i class="devicon-python-plain-wordmark"></i>
              <i class="devicon-nodejs-plain"></i>
              <i class="devicon-sequelize-plain"></i>
            </ul>
          </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Skills;
