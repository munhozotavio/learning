import Square from "./square";

const generateColumns = (columns, isWhite) => {
  const line = [];
  for (let i=0;i<columns;i++){
    line.push(<Square color={isWhite ? "#fff" : "#000"}/>);
    isWhite = !isWhite;
  }
  return line;
}

const generateLines = (lines, columns, isWhite) => {
  const fullBoard = [];;

  for (let i=0; i<lines; i++) {
    fullBoard.push(<div className="line">{generateColumns(columns, isWhite)}</div>)
    isWhite = !isWhite;
  }
  return fullBoard;
}

export default function Board(props) {
  const isWhite = props.firstColor === "#fff"
  return (
    <div className="board">
      {generateLines(props.lines, props.columns, isWhite)}
    </div>
  )
}
