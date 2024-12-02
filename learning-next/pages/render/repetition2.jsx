import mock from '../../data/productsMock'

export default function Repetition2(){

  const renderTableLines = () => {
    return mock.map(product => {return(
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )})
  }

  return(
    <div>
      <table style={{border: "1px solid white"}}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {renderTableLines()}
        </tbody>
      </table>
    </div>
  )
}
