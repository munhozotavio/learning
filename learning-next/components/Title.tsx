interface IProps {
  main: String;
  description: String;
  small?: Boolean;
}


export default function Title(props: IProps) {
  if (props.small) {
    return (
      <>
        <p>{props.main}</p>
        <p>{props.description}</p>
      </>
    )
  }

  return (
    <>
      <h1>{props.main}</h1>
      <h2>{props.description}</h2>
    </>
  )
}
