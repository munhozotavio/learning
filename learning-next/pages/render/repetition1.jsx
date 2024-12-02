export default function Repetition1(){
  const approvedList = [
    'João',
    'Maria',
    'Carlos',
    'Danilo',
    'Laura',
    'Sofia',
    'Antonio'
  ];

  const renderList = () => {
    return approvedList.map((item, idx) => <li key={idx}>{item}</li>)
  }

  return(
    <ul>
      {renderList()}
    </ul>
  )
}
