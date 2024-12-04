export default function MyList(props){
  return(
    <div>
      <h1>List of itens</h1>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}
