import React from 'react'

const RepoItem = (props) => {
    return (
        <div>
            <h3>{props.repo.html_url}</h3>
        </div>
    )
}

export default RepoItem;
