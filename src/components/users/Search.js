import React, { useState, useContext } from "react";
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

function Search(props) {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  // here we are using useState hook, 
  // here we define state as const [state_name, name_of_the_method_that_will_change_or_set_state] = useState(default_value_of_the_state);
  // and then whenever we want to use the state value we just use the state_name, like any other variable
  // and when we want to change the state we use the function to change it .

  const onChange = (e) => {
    setText(e.target.value);
    // so this is how we change or set state.
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") // and this is how we get access to the current value of the state
    {
      alertContext.alertMsg("Please enter something", "light");
    } else {
      githubContext.searchSubmit(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}



// what we did here is that in input type text, we attatched a state to it through the value attribute and we change the state whenever the value inside it changes. Thats why we created a function called onChange, which takes a parameter, which contains the value every time the value of text feild changes and set the state accordingly.
export default Search;
