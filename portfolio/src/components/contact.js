import React, { Component } from 'react';
import { Button, Row, Col, Input } from 'react-materialize';
import Axios from 'axios';


class Contact extends Component {
  
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    Axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            name: name,   
            email: email,  
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}
  
resetForm(){
    document.getElementById("contact-form").reset();
}

  render() {
    return(

        <div className="bottom-contact-section">
          <Col l={12}>  
            <Row>
              <Col l={12}>
                <Row l={12}>
                  <div className="contact-form">
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                      <Col l={12} m={12} s={12}>
                        <Row>
                          <div className="form-group">
                            <Input type='textarea' className="form-control" label="Message" id="message" l={12} m={8} s={8} style={{ fontSize: '20px' }} />
                          </div>
                        </Row>
                        
                        <Row>
                          <Button waves='light' type="submit" className="btn btn-primary">Submit</Button>
                        </Row>

                      </Col>
                    </form>
                  </div>
                </Row>
              </Col>

            </Row>
          </Col>
        </div>
    )
  }
}

export default Contact;
