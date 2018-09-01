import React from "react";
import Toggle from "./Toggle.js";

const Weather = props => (
  <div>
    { (!isNaN(props.temperature)) && <p>It is { props.temperature } degrees { props.units } in { props.city }, {props.country}</p>
    }
    <Toggle toggleUnits={props.toggleUnits}/>
    {
      props.error && <p className="weather__error">{ props.error }</p>
    }
  </div>
);

export default Weather;