export default function jsx3() {
  const sub = "Hi, this is JS";

  return(
    <div>
      <h1>Integrating JS and JSX</h1>
      <h2>{sub}</h2>
      <h3>{inBetween(3, 2, 4) ? "Sim" : "Não" }</h3>
      <h3>{inBetween(1, 2, 4) ? "Sim" : "Não" }</h3>
    </div>
  )
}

const inBetween  = (value: number, min: number, max: number):boolean => {
  return (value >= min && value <= max);
}
