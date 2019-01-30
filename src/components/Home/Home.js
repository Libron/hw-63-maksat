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
            console.log(keys);
        this.setState({responseArray: Object.values(response.data)})
        });
}



    componentDidUpdate() {
        console.log(this.state);
    }

    readMore=()=>{

    };

    render() {
        return (
            <div className='home__container'>
                {this.state.responseArray.map((item, index)=><div key={index}><p>{item.title}</p>
                    <NavLink to='/posts/:id' className="read__more__btn">Contact
                        Us</NavLink>
                </div> )}
            </div>
        );
    }
}

export default Home;