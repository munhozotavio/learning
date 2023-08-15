import React from 'react';
import Folder from "./Folder"

export default class FileSystem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentFolder: this.props.folder,
      parents: []
    }
    this.canGoBack = false;
  }

  changeFolder(newFolder, newParent) {
    const parents = [...this.state.parents];
    parents.push(newParent);
    this.setState({
      currentFolder: newFolder,
      parents
    });
  }

  returnTo(){
    const parents = [...this.state.parents];
    const newFolder = parents.pop();
    if(!newFolder) return;
    this.setState({
      currentFolder: newFolder,
      parents
    });
  }

  render() {
    console.log(this.state);
    this.canGoBack = this.state.parents.length > 0;
    return(
      <div>
        <div className="location">
          <a className={this.canGoBack ? "active" : "hidden"} onClick={() => this.returnTo()}>{"< go back"}</a>
        </div>
        <hr/>
        <div className="folder">
         <Folder files={this.state.currentFolder} changeFolder={(i,j) => this.changeFolder(i,j)}/>
        </div>
      </div>
    )
  }
}
