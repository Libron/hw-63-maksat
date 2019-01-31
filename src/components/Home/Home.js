import React, {Component} from 'react';
import axios from "../../axios_url";
import {NavLink} from "react-router-dom";

class Home extends Component {

    state = {
        responseArray: [],
    };

    componentDidMount() {
        let keys=[];
    axios.get('articles.json').then(response=>{
        for (let key in response.data) {
                const key2 = response.data[key];
                console.log(response.data[key].description);
                keys.push({id:key, key2});
        }
            console.log(response.data);
        this.setState({responseArray: keys})
        });
}



    componentDidUpdate() {
        console.log(this.state);
    }


    render() {
        return (
            <div className='home__container'>
                {this.state.responseArray.map((item, index)=>
                    <div key={index}><p>Title:</p>
                        <p>{item.key2.title}</p>
                    <NavLink to={'/posts/' + item.id + "&" + item.key2.title + "&" + item.key2.time + "&" + item.key2.description} className="read__more__btn" id={item.id}>Read More</NavLink>
                </div> )}
            </div>
        );
    }
}

export default Home;