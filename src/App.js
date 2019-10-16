import React, {Component} from 'react';
import './App.css';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
 
Quill.register('modules/imageResize', ImageResize);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        [{ font: [] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ['link'],
        ['video'], ['image'],
        ['clean'],
      ],
      imageResize: {
        displayStyles: {
          backgroundColor: 'black',
          border: 'none',
          color: 'white'
        },
        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
      }
    };
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div>
        <center>
          <div style={{width:"70%"}}>
            <ReactQuill 
              style={{height:"90vh"}}
              value={this.state.text}
              onChange={this.handleChange} 
              modules={this.modules}
            />
          </div>
        </center>
      </div>
    );
  }
}

export default App;
