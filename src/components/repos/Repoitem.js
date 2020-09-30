import React from 'react';
import PropTypes from 'prop-types';

const Repoitem = ( { repo }) => {
    return (
        <div>
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div> 
    )
}

Repoitem.propTypes = {
  repo: PropTypes.object.isRequired,  
}

export default Repoitem;
