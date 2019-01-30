import React, {Component} from 'react';
import axios from "../../axios_url";

class Home extends Component {

    state = {
        fullResponse: '',
        responseArray: [],
    };

    componentDidMount() {

    axios.get('articles.json').then(response=>{
        this.setState({fullResponse: response.data, responseArray: Object.values(response.data)})
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
                <button onClick={this.readMore}>Read more</button>
                </div> )}
            </div>
        );
    }
}

export default Home;