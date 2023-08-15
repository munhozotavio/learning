import {Route, Routes, Navigate } from 'react-router-dom';
import "./App.css"
import FileSystem from "./components/FileSystem";

const root = [
  {
    name:"readme.txt",
    type:"file",
    content: "esse é um texto",
  },
  {
    name:"gol.mp4",
    type:"file",
    content: "esse é um video uhuuuuh",
  },
  {
    name:"code.html",
    type:"file",
    content: "esse é um html",
  },
  {
    name:"folder2",
    type:"folder",
    files:[{
      name:"league.exe",
      type:"file",
      content: "esse é um video exe",
    },
    {
      name:"code2.html",
      type:"file",
      content: "esse é um html (2)",
    }]
  },
]

function App() {
  return(
  <div className="page">
    <div className="location">path</div>
    <hr/>
    <div className="system">
      <FileSystem folder={root}/>
    </div>
  </div>
  )
}

export default App
