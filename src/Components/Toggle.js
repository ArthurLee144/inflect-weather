import React from 'react';

class Toggle extends React.Component {
  render() {
    return (
      <div>
        <p>
          <label className="switch-light switch-candy" onClick={this.props.toggleUnits}>
          <input type="checkbox"></input>
            <span>
              <span>Celsius</span>
              <span>Fahrenheit</span>
              <a> </a>
            </span>
          </label>
        </p>
      </div>
    );
  }
};

export default Toggle;