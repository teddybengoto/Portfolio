import React from "react";
import defaultImage from "../img/DefaultProject.webp"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Project extends React.Component {
    render() {

              
      return (
        <div className="mx-2 my-2">
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img               
                variant="top" src={this.props.image?require("../img/"+this.props.image):defaultImage}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2  text-muted">Competance:</Card.Subtitle>
                    {this.props.competances.map((competance,i)=>{
                        return(
                            <Badge className="mb-2" key={i} pill bg="info">
                                {competance }
                            </Badge>)                                                      
                    })}
                    
                </Card.Body>
                <Card.Body>
                <Button 
                    className="mt-0"
                    variant="primary"
                    href={this.props.link}>
                    Tester
                </Button>
                </Card.Body>
                
            </Card>          
        </div>       
         
      );
    }
  }
  export default Project;
