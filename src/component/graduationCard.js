import React from "react";

class Graduation extends React.Component {
    render() {
      return (
          <div className="card  ms-4 me-3 mt-3 ">
            <div className="card-body">
              <h3 className="">{this.props.title}</h3>
                <p >
                  <span className="blue-text"> {this.props.dateStart} - {this.props.dateEnd}:</span>
                  {this.props.school}
                </p>       
            </div>
          </div>
         
      );
    }
  }
  export default Graduation;
