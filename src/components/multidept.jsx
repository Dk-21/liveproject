import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const Countries = [
  { label: "Department 1", value: 355 },
  { label: "Department 2", value: 54 },
  { label: "Department 3", value: 43 },
  { label: "Department 4", value: 61 }
];

class Multiple extends Component {
    render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-12">
            Select the Department
            <Select options={Countries} components={animatedComponents}
              isMulti />
            
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
  }
}

export default Multiple;