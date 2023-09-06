import React from "react";
import '../stylesheet/Testimonial.css'

function Testimonial(props) {
  return(
    <div className="testimonial-container">
      <img 
        className="testimonial-image"
        src={require(`../images/${props.image}.png`)}
        alt="Emma's photo"/>

        <div className="testimonial-text-container">
          <p className="testimonial-name">{props.name} in {props.country}</p>
          <p className="testimonial-position">{props.position} at {props.company}</p>
          <p className="testimonial-description">{props.testimonial}</p>
        </div>
    </div>
  );
}

export default Testimonial;