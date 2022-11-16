import React from "react";

class Graduation extends React.Component {

   
    render() {

      const graduation= {...this.props.graduation};

      return (
          <div className="w-75 ms-4 me-3 mt-3 shadow p-2 text-white rounded">
            <div className="card-body">
              <h3 className="">{graduation.title}</h3>
                  <span className="text-green me-2"> {graduation.dateStart} - {graduation.dateEnd}:</span>
                  {graduation.school}
            </div>
          </div>
         
      );
    }
  }
  export default Graduation;
