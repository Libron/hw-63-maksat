import React, {Component} from 'react';
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from "../../axios_url";

class Add extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        title: '',
        description: [],
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    titleSave = (event) => {
        this.setState({title: event.currentTarget.value})
    };

    titleDescription = (event) => {

        this.setState({description: event.blocks.map(item => {
                return item.text
            })});
            //Текст у Wysiwyg находится в массиве blocks
        // Каждая новая строка это новый массив элемента
    };

    sendToApi = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const article = {
            title: this.state.title,
            description: this.state.description.join(' '),
        };

        axios.post('articles.json', article).then(()=>{
            this.setState({loading: false});
            this.props.history.push('/');
        });
      console.log(this.state);
    };

    render() {
        const {editorState} = this.state;
        return (
            <div className='add__container'>
                <div className='title__div'>
                    <form >
                        <p>Add new post</p>
                        <label>Title</label>
                        <input className='input__title' type="text" name="title" value={this.state.name} onChange={event=>this.titleSave(event)}/>
                        <label> Description</label>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.onEditorStateChange} onChange={event=>this.titleDescription(event)} />
                        <button type='button' onClick={event=>this.sendToApi(event)}> Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Add;