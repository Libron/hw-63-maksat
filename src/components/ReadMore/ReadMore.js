import React from 'react';
import './ReadMore.css';
import axios from "../../axios_url";

const ReadMore = (props) => {
    console.log(props);
    const postDelete = () => {
        console.log('delete works', props.match.params.id);
        // axios.delete("url", { params: { id: itemId } }).then(response => {
        //     console.log(response);
        // });
        axios.delete('articles.json', { params: { id: props.match.params.id } }).then((response)=>{
            console.log(response);
            props.history.push('/');
        });
    };
    return (
        <div className='description'>
            <div className='p__div'>
                <p className='read__more__p'>Time: {props.match.params.time}</p>
                <p className='read__more__p'>Titile: {props.match.params.title}</p>
                <p className='read__more__p'>Description: {props.match.params.description}</p>
            </div>
            <div className='buttons__div'>
                <button className='delete__btn' onClick={postDelete}>Delete</button>
                <button className='edit__btn'>Edit</button>
            </div>
        </div>
    );
};

export default ReadMore;