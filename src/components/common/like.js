import React from 'react';

const Like = ({onClick, like}) => {
    let classes = like ? 'fas fa-heart' : 'far fa-heart';
    return(
        <i  className={classes}
            onClick={onClick}
            style={{cursor: 'pointer'}}
        >
        </i>
    );
  }

export default Like;