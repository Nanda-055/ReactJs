
const MyTable = ({
  data,onDelete
}) => {
  return (
     data.map((v)=>{
       return (
        <tr>
          <td>{v.id}</td>
          <td>{v.name}</td>
          <td>{v.age}</td>
          <td><button onClick={()=>onDelete(v.id)}>Delete</button></td>
      </tr>
       )
     }) 
  )
}


export default MyTable