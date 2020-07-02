import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  GET_REPOS,
  CLEAR_USERS,
  GET_USERS,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
// we are importing only these types from the types file because we only need these in Github COntext, the alert related types will be used in the alert context.

let githubClientId;
let githubClientSecret;
if(process.env.NODE_ENV !== 'production'){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  // this is our global state that contains all the data related to github.

  const [state, dispatch] = useReducer(GithubReducer, initState);
  // here when we call a function like get users and get a response back then we need to dispath it to the reducer, in
  // order to update or chnage the state.

  //Search User
  const searchSubmit = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //Clear Users

  const clearUsers = () => {
    dispatch({type : CLEAR_USERS});
  };

  //Get User
  const getUser = async (user) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${user}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({type : GET_USERS, payload : res.data});
  };

  // Get User Repo
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({type : GET_REPOS, payload : res.data});
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        loading: state.loading,
        repos: state.repos,
        searchSubmit,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
  // GithubContext.Provider takes in a prop called value, which contains the data that we want to be available in the entire app.
};

export default GithubState;
