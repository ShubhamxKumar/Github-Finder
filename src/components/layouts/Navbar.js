import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {" "}
        <i className={props.icon}></i> {props.title}{" "}
      </h1>
      <ul>
        <li>
          <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
        </li>
      </ul>
    </nav>
  );
}

// We are declaring defaultProps and propsType down here because we are not using CLASS BASED COMPONENTS instead WE ARE USING FUNCTIONAL COMPONENTS, so we define these down here.

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github",
}; // this is what we call a default props, if we dont pass any props from outside then this will take over
// we are not using defaultProps.title because this directly because this is provided by React and is a pre-define static variable.

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
// it defines the type of props like string integer array or a object, it is also like defaultProps.

export default Navbar;

// We are using props here.
