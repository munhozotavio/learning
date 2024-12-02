export default function OnlyEven(props) {
  //return props.number % 2 === 0 ? <span>{props.number}<br/></span> : null;
  return (
    <div>
      {props.number % 2 === 0 ? <span>{props.number}</span> : null}
    </div>
  )
}
