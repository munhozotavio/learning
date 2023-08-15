import File from "./File"
import './folder.css'

function Folder(props) {
  if (JSON.stringify(props.files) === '{}') return
  return (
    props.files.map(file => file.type === "file" ? <File key={file.name} file={file}/> : <a key={file.name} onClick={() => props.changeFolder(file.files, props.files)}>{file.name}</a>)
  );
}

export default Folder;
