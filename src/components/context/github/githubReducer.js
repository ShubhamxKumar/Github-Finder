import {
  GET_REPOS,
  CLEAR_USERS,
  GET_USERS,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

export default (state, action) => {
    switch(action.type){
        case SEARCH_USERS : {
            return {
                ...state, // as state is immutable we send a copy of the original state, and then we send the data that changes by overwriting it
                users : action.payload,
                loading : false,
            }
        }
        case SET_LOADING : {
            return {
                ...state,
                loading : true,
            }
        }
        case CLEAR_USERS : {
            return {
                ...state,
                users : [],
                loading : false,
            }
        }
        case GET_USERS : {
            return {
                ...state,
                user : action.payload,
                loading : false,
            }
        }
        case GET_REPOS : {
            return {
                ...state,
                repos : action.payload,
                loading : false,
            }
        }
        default : {
            return state;
        }
    }
}