import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const Countries = [
  { label: "Divison 1", value: 355 },
  { label: "Division 2", value: 54 },
  { label: "Division 3", value: 43 },
  { label: "Division 4", value: 61 }
];

class Multidivi extends Component {
    render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-12">
            Select the Division
            <Select options={Countries} components={animatedComponents}
              isMulti />
            
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
  }
}

export default Multidivi;