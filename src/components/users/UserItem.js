import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function UserItem({element: {avatar_url, html_url, login}}) {
    // if we dont want to use props.prop_name everytime, then we can destructure it a bit like in the arguments
    // this means we extract the following properties from the prop 'element' passed down to us, we can use the props.element.prop_name too, no problem in doing that without destructuring.
    // another way is like this:
       /* const {avatar_url, html_url, login} = props.element; */
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className="btn btn-dark btn-sm my-1"
        >
          More
        </Link>
      </div>
    </div>
  );
}

UserItem.propType = {
    element : PropTypes.object.isRequired,
}

export default UserItem;
