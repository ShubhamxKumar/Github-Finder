import React, { Component } from 'react';
import RepoItem from './RepoItem';

class Repos extends Component {
    render() {
        return (this.props.repos.map((repo)=>{
            return <RepoItem repo={repo} key = {repo.id}/>
        }))
    }
}

export default Repos
