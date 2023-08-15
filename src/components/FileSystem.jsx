import React from 'react';
import ReactDOM from 'react-dom/client';
import Folder from "./Folder"

export default class FileSystem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentFolder: this.props.folder
    }
  }

  changeFolder(newFolder) {
    this.setState({
      currentFolder: newFolder
    })
  }

  render() {
    console.log(this.state);
    return(
      <div className="folder">
         <Folder files={this.state.currentFolder} changeFolder={(i) => this.changeFolder(i)}/>
      </div>
    )
  }
}
