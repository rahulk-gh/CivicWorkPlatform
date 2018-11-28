import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}} >Müd</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/aliciaC1/Mud-Project1" target="_blank" id="hover-img">Submit</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

      </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000000', height: '176px', background: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUWGB0aFxcYGBcYFxYaFxgaGhgXFxgaHSgiGholGxcYIjEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OFw8PFy0dHR0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUHBv/EAC0QAAECBAQFBQEBAQEBAAAAAAEAEQIhMfBBUWFxA4GRobESwdHh8QQTIjJC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAGxEBAQEBAQEBAQAAAAAAAAAAAAERAhIhMRP/2gAMAwEAAhEDEQA/APlEQvNInRMlAXVyJCFUQ+sbKKU0iUwSE4YZHlndhUSFJKs5KW1k/nFWBmFsuWs0wzJMnCgpASCYQJkICCEDj5zuSHHPW7dKIDucvIqpQN0A3eqYCklA3REk6fm+iKb9NvtOSgq4gxL1x0RAE30SN8kwVQ1WF5KAUBVGkYY0ZuvTNIBSEnVQ0xskDO+aPU1+USnFqnEgxHU0rWnj6SKqH4VQXtmoaSc2fXR+i1GaZOE2UkX7eOqp6e3cqXWmKAVb7LMJrtzWKyKCG8II2SC+e9ZpMgqiqqUzNP0y0UxFAXd4IxmnRByeePVUIJpQhVrNBXQ0SCQQxQM5JMmEwLPuglIqogEGeA2QKslEQVhDKiL7JhMAjNBUDCYGiSCUDDJgpFMneSoITOaZG/RDKReqqKJv7SESAgdFpkvjVlUOV6lJ6z6Yj4kE6d6YqACbS5oCTKxDh5pApjqnC3PDKoroz9QtM0oZpBNERmtRigIdCHW5WGZhSIVBERXietKSohIKqAEgE3Venb9aSCSJpAKz2SjHjrv1VChbF1QCQVd2F91UQyAtAL9vCUIG2u6mKkKmVGHnfZJMQiyRCpphVCqrMjJHpmy0MOXO+iQhVxEMkFTJtTC6qKn0oZX6UiJUQIeNkQw4K4RLU2ENPz9KolkmWpjJAEmFJAGZJmwc88woAe7wWsRJoiI3jzVNokMkRQh06T5BHpTihT9F6IF6OuV4Mpb7VGmCQVQkirwSIVZqSFYgJEhi2mzpBM2FqMUhoieibXukxWoxShbG/b9SZSArhOYv5Xlj1pIkkJb9lrCZfO6IW5pgxKoX7LTicEYPcvZZxaIKbPlz0vBZxNgqA1UxhUUPCYZBGbpQoKhZuav040SbGScImJclqBelEcLYFamHIMD0+1IhefSjc+TpggDTX5rsgQ/SXpN3qjSt6qBwmaZM04M5gvdE44JyHTFagzI1VAXY5rQcKg1e9FEMOrXqp5NSyRHnVbQQVarHtMnSQ7FAg1fplknkZQ2EcvZbAWcEGGWMts9lcTWQIyn7bN3ThhkxPutPTzaZzw1zVTEmAB9qditSJrG+oUxQLoMPW8EiLwUqazhh/UCX4rIDT6e6UIVNQM0CHJXySAxe9ERMMOqG2VwqzwlqRm1l6XKuGDFrorj4fpwNHye/ZRFGwu6qz4zfqY4WPXb5zWTKzHU4rMOnpm8pZaQw+We9EKoF5pHpq4eAHYvdCymHhtO7da8XjxFgS/pDDTGqmEa5LeRNTFw2yo/14UQDx5yWwikQA/VhWcsuifBYljIYlnbMsmDAwBpVUwcE0ZdMMJETwyIpOb6ZlVHFMMGz1f2TImuSPh1dXBCF0cb0zBHenLoph4cpV5y1dXF1kYCE+GRItQ9d0R8MjGXupENAxM8M/maY064jIS93Nhc5M6Fr+1pACxz+xLrNIRmEzDjF3YrVGT1epNXeypzvpktYsyJZeyyjGI+nZZouEtvmtITTTZ/K4+G7rq9V1xV5phA3PFaRQEAS6Udga5zCcVBIU2Ndpp+ojAOzYTnotSCBCVfp3z0fpunCCTvTCufddcHCeRxwn2WpzrNc0XCymM2Rw+DmBtLPHr4Xoj+fJnlRsc+vZLgfzyYEOav4WvDGvP8A8aPyknBDk+d5TXqQ/wApiyl1FB8KY/5DX0lp5S3V/mmvOMGzXfJTGDTfELo4kBduVXnoubiwkFmx8YLnVjOJqXu6fpNslHJvrDFXDFneW36sxSMGdsoi/mnJb/5h88BPlhlJVCGOJzzGa18Cg4bAB/lOKEUByvVHH4wbLeq4ouIl6xnNb8eEhiXY0nh8fa5OLE99lfE44LSWJrnflZtWQwd90nhxB6geyvh8InQapD+cqJTZ0wVOt3Xok65x1aveScTd7ZZ+q87dIRK6jSCJrzWvDOrajIyPZ91hwiXldhUIma3VlK1i4fyNs/zJKEM75ayL+a9VUAYAkzNJiUzPSmOag34VQQwkvV6jXBS5FJLQx3XBUBKf0VcNacMksDhQ7+60aEaZ68ljDWr3gtOEza7ZD7XTkbcHhiJ6hzkDK9lnxv5gDOXKUz8eFpwT6pUGK34lMmGfTzgunmWDjg4dQW99wVhxeC0TGQpS3XXEASC7EHFxSir/AHhLQkEtLJxOUJNMcFi8xdeZBwJ0+3mu/gfxmE/9CKjggS3dT/RwmaORGWZxBXRH/WTAPTOcxIbTUnMn6rk/pMIP/ku0p0yOoquSDiF558p59l0f2f0eqImmgxbzguSOZozYa37rHV+tY7uE04shv7jOu9V3QcJjKIGmIDcpE9qBeLC4xA63RbcOPX2O2y3zU2Pf40BAcRzeQ8/9BzhXZc3DgYOTOTANPCmIMs6rzoOP6ZGeIdq1ylstOH/RE++Y7aBslv1Geo9fhcVmMycyJTy7iWWi0/r4zB3IejzPT3Xk8T+0t6cpnMzlTIKeJx4ogfUXnIjXlor7+YzjTicYGm+5lgubjn/p3JLu4Er0VcKAmgG75HQpcThTnprj9rnVYxwCs3JppjPf8WUJLub0Xd/g8LjAgfq5+NwjDZWMNaRRiEAg49cmUf7AzEtL6qD/ADxROZtnp1ShgL48pKXRlFG94qI8vddXF4JH/qEh90f5iTZ46YdUwcjAihpv+OxK1/m/m9TzYCuO67eLC+TYBhyS4cIEMq9jXumJa4GLkPR/tdkHpYOI33ZZcIh/bE/S9aD+j0hiISan/oCs/dXmMdV+dTCknH3Bm3hOG75ri7qDMXG2/wCICkT0THbST10RFjxqFT0euIMpBZghvZVrPF3ozDvPwtC4Y2/An6pdrfksxEn6mwHX4VlRUMT1atyVmPLnjp4WPqOJVeob+1gK6Y1hivNaiKtTgzfS5wRJp5/XLygRXdarUpjqg4mmDSVD+hg3moXI/m5qoY+eFLmtex1+phsxxxsLECF59VjDxHwJ+W+PCf8ApiLuSXrTHRHxZMct8ZHuoPFweXfwsX1rydhnz7pE6vlfVPSlxINR46LQQ5w133vdXwuIBNiW0po6Hyqkhq+HwhM6foU8SBqUzI5jCin1TdUYnAE28XJa+MoBAY9ZDwqjNcM516vqoJwOpzni7ogi0vNZVcEDs7toz0aReZTEJfXVz7J8MtvgaZ0V8OMhxhT7Z5lWRNdHBglXoTS/K64GAGUnlLpjiuKGMCTTz0qkeI58Vqtz4xXo8WIVpoHWMUEJInzXPHFM0rtYbys/9DqylsTLr0If6IYA8hsuTiARF2aee+iwijDswyyLu5I1k3NTxjFDFNpHBiCRWYllms2rjX+vhk4uwWQ4ImQW0n0URRlq37lZR8Y4FZtiyLgjBkeTS7/Kz4jCk8XySgiNc/tZcSLVY1cVQyPNUItT0WcMV2FoYhbJKljkfBBZq8sP1J0NYXJ1UCmPxZuqqgsHDBBHZPgwAkAlpsayB/8ApLiD0xEOCxIcUOofAqhja6+FUW09/GQxWUJVA1WjFCLQsqJ0War/AEt8GQw+aH1CPGG8lL593v8AEMaAthJERxKiE3zVQh8MzSTclUAONyQ5Uk1u/tMn8yCaANjc57ydWIjnOntJZko8dU1WnDjYYKv9L9lkIuSBE1HfdWVMaEpmO9/pZCJpgmvhL1Yp6Rv6gVcB8WJLmPdUP1X2OiI4mRNu/VOEjAfT+aLH10sq4uK8yfk5+Vr0mNzEAOaPXSV5bLn9Qu54qidf1k9JjSOMYX9fCf8AplK3lJYxx2boodTTG0cZ2DpRxuZz6y6rERdr6IEV+ymmKMSjW+aRKUR0w9prNq4d781BOd80jEpBWdXGgIS9bWEoYSkSU0xm6CML5JMgXRYbMgs7SJbnI+46pw26U8vlUFQ3nRB3SCasDANedUO+Hyjauf0kqAlDptK7/UDRAzdFLoZBv5QO5qoYhiPZTDFNwkoiib9kkgEbXPuqK6drNUP9qQU7yvFA537JRAgOx0KXJBKaGneyUQ25UTBZ5+3XwiASVCOfjBueCUJ2p5QUFwntd804S15rMBXhpysKo0gimDPXbHs6IYnGwkJc7rILMHf2dP1XgVdFk3TeQWZiCAb+URUf5U0KKIIdIxoet8kAUBmN4/qkoJOnZRUOm6d30QJdabLIbn9TAGRUKidb6KjE3+p4ScZzlp4QR4k9Gc0SEKy0oG/tNMSlYRsgc9ZjqKexCIkDZMn8VEsFT0vJEMJJAGNOcr2TiDFjVUSUc0JRYPjfKiBs+nW/xSb5qoi/4yRMrCAKQvVOI4MUog2INKPjhPFBUId+3UdMeiRIUkIJQVfwg/X6k9LqpQXg8uofoj1SvT6UvJHfmiKh1ohEJ0VEjDq2V90ARzQ6Rh65YhEKCyZv5/Ec1MJTOyqKfRAN3gnL68oIJNb8fqINbv5SMSCeSHY7W6BMpNVYBoztd7qCNQih0GW6Ikmn+yUBupBVKVFMKxwnm/cfKzqmW1vkoJVQQvl2CEKKcIyAlPD3rshu6EKhgE53T36IGKSFRRQTfyhCBAFI9UIQJAOKEKhUG+hw159wkQhCgAJh6d2QQO+tOiaECIbDDyPhIIQgRyT4Ye6YpoVFEfnJ+iGlRCEQBMFJCguEKvVjnPdCFUEJf8dI90IVAKUxrdyUoQgaGF+XQhSiU4pv1MtdN0IUCd9UoS0xI5+yEKKTfl3NX6NRfJCEH//Z) center / cover'}} >MongoDB Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000000', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >MongoDB Project #2</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's

          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000000', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >MongoDB Project #3</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    }

  }



  render() {
    return(
      <div className="project-tab">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Manhattan</Tab>
          <Tab>Queens</Tab>
          <Tab>Brooklyn</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
