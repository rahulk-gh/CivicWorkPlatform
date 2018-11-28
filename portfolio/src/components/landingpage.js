import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './images/IMG_1605.jpg';


class Landing extends Component {
  render() {
    return(
      <div className = "landingPage2">
        <Grid container direction="row" justify="center" alignItems="center" id="landing-page2">
            
            <Cell col={4}>
                <img src={logo} alt="Jordan Russell" style={{height: '450px'}}/>
            </Cell>
            <Cell col={1}></Cell>
            <Cell col ={7}>
                <div>
                    <h2>Let's build something...</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <h2>Let's build something...</h2> 
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>                  
                    <h4>I speak multiple front and backend languages</h4>
                    <div className="social-skills">
                        <ul>
                            <i class="devicon-html5-plain-wordmark"></i>
                            <i class="devicon-react-original-wordmark"></i>
                            <i class="devicon-javascript-plain"></i>
                            <i class="devicon-jquery-plain-wordmark"></i>
                            <i class="devicon-mysql-plain-wordmark"></i>
                            <i class="devicon-mongodb-plain-wordmark"></i>    
                            <i class="devicon-python-plain-wordmark"></i>                               
                            <i class="devicon-express-original"></i>
                            <i class="devicon-nodejs-plain"></i>
                            <i class="devicon-sequelize-plain"></i>
                            <i class="devicon-git-plain"></i>
                            <i class="devicon-bootstrap-plain"></i>
                            <i class="devicon-css3-plain"></i>
                            <i class="devicon-django-plain"></i>
                        </ul>
                    </div> 
                </div> 
            </Cell>       
        </Grid>
      </div>
    )
  }
}

export default Landing;