import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import GithubContext from '../context/github/githubContext';

const User = ({match}) => {
  const githubContext = useContext(GithubContext);


  useEffect(() => {
      // we create a function and since I have not destructured the props I have to pass down the props in the function
      // I DONOT LIKE DESTRCUTURING.
    githubContext.getUser(match.params.login);
    // this line of code helps us to get access to the param passed through the endpoint in the route
    // we passed {...props} in the User component, so that we can get access to it.
    // what this does is that whatever props are being passed down to render{(props)=>(.....)}, we are passing them down.
    // And here the props of render contains the params value.
    githubContext.getUserRepos(match.params.login);
    // The comment in the next line is not a regular shit I Type, it is important, otherwise we get a warning.
        // eslint-disable-next-line
  }, []);
  // this is another hook, called useEffect which is used to perform the same functionality as componentDidMount,
  // the extra [] that we passed is to ensure that this runs only once when the component mounts, because useEffect
  // is NOT componentDidMount, we just make it to work like that after some modification.
  // useEffect actually updates component, so it runs quite a few times, hence we pass the '[]' to make sure that is runs 
  // only one time, this [] is use to take in conditions when we want it to run
  // For eg. if we wrote [var_name] something like this, then it will only run, when var_name updates or change,
  // so we want it it run only once hence we pass it empty like this [].


  return (
    <Fragment>
      {githubContext.loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/" className="btn btn-light">
            Back To Search
          </Link>
          Hireable :{" "}
          {githubContext.user.hireable ? (
            <i className="fa fa-check text-success"></i>
          ) : (
            <i className="fa fa-times-circle text-danger"></i>
          )}
          <div className="card-grid-2">
            <div className="all-center">
              <img
                src={githubContext.user.avatar_url}
                alt="avatar"
                className="round-image"
                style={{ width: "150px" }}
              />
              <h1>{githubContext.user.name}</h1>
              <p>{githubContext.user.location}</p>
            </div>
            <div>
              {githubContext.user.bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{githubContext.user.bio}</p>
                </Fragment>
              )}
              <a href={githubContext.user.html_url} className="btn btn-dark my-1">
                {" "}
                Visit Github Profile{" "}
              </a>
              <ul>
                <li>
                  {githubContext.user.login && (
                    <Fragment>
                      {" "}
                      <strong>Username: </strong> {githubContext.user.login}{" "}
                    </Fragment>
                  )}
                </li>
                <li>
                  {githubContext.user.login && (
                    <Fragment>
                      {" "}
                      <strong>Company: </strong> {githubContext.user.company}{" "}
                    </Fragment>
                  )}
                </li>
                <li>
                  {githubContext.user.login && (
                    <Fragment>
                      {" "}
                      <strong>Website: </strong> {githubContext.user.blog}{" "}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">
              Followers : {githubContext.user.followers}{" "}
            </div>
            <div className="badge badge-success">
              Following : {githubContext.user.following}{" "}
            </div>
            <div className="badge badge-light">
              Public Repos : {githubContext.user.public_repos}{" "}
            </div>
            <div className="badge badge-dark">
              Public Gists : {githubContext.user.public_gists}{" "}
            </div>
          </div>
          <Repos repos={githubContext.repos} />
        </div>
      )}
    </Fragment>
  );
};

export default User;
