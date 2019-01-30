import React, { Component } from 'react';
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Add extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render() {
        const {editorState} = this.state;
        return (
            <div className='add__container'>
                <div className='title__div'>
                    <p>Add new post</p>
                    <label>Title</label>
                    <input className='input__title'/>
                    <label> Description</label>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </div>

            </div>
        )
    }
}

export default Add;