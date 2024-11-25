export default function Style(props) {
return (
  <div>
    <h1 style={ {
      backgroundColor: props.number >= 0 ? "#2D2" : "#D22",
      color: props.color
    } }>
      Text
    </h1>
  </div>
)
}
