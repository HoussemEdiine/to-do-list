import React from 'react'
import './App.css'
export default function ProductTable(props)
{
  console.log(props.p)
return(

  <table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Category</th> 
    </tr>
    {props.p.map(item =>
   
      <tr>
        <td>{item.name}</td>
       <td>{item.price}</td>
       <td>{item.category}</td>
       </tr>
  
  
    
    )

    }
  
      
       

  </table>
)
}