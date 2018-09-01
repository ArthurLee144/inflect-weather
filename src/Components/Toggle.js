import React from 'react';

class Toggle extends React.Component {
  render() {
    return (
      <div>
        <label className="switch-light switch-candy" onClick={this.props.toggleUnits}>
        <input type="checkbox"></input>
          <span>
            <span>Celsius</span>
            <span>Fahrenheit</span>
            <a> </a>
          </span>
        </label>
      </div>
    );
  }
};

export default Toggle;