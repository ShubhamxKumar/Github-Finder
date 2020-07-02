import React, {useContext} from "react";
import UserItem from "./UserItem";
import Spinner from '../layouts/Spinner';
import GithubContext from '../context/github/githubContext';


function Users(props) {
  const githubContext = useContext(GithubContext);
  if(githubContext.loading){
      return (
          <Spinner />
      );
  } else{
    return (
        <div style={userStyle}>
          {githubContext.users.map((element) => {
            return <UserItem key={element.id} element={element} />;
          })}
        </div>
      );
  }
}


const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;

// each child when we map through the list needs an unique key that identifies it, so we assign a unique value to the key prop, key prop is a special kind of prop.
