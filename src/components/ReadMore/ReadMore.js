import React from 'react';

const ReadMore = (props) => {
    console.log(props);
    return (
        <div className='description'>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
};

export default ReadMore;