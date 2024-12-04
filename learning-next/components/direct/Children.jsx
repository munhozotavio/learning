export default function ChildrenObj(props){
  return(
    <div style={{display:"flex", alignItem:"center"}}>
      <h3>{props.name}</h3>
      <h2>{props.family}</h2>
    </div>
  )
}
