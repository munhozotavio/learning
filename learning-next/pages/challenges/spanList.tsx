// Create a span list with 10 elements
export default function spanList() {
  const createList = (qty: number) => {
    const list = []
    for (let i:number = 1; i<=qty; i++) {
      i != qty ? list.push(<span>{i},</span>) : list.push(<span>{i}</span>)
    }
    console.log(list)
    return list;
  }

  return(
    <div>
      {createList(10)}
    </div>
  )
}
