import React , {useState} from 'react'
  export default function  Hooks(){
      
    const [count,setcount] =useState(0)
    let styles={
        margin:'0.5em',
        pading:'0.5em'
    }
    return(
      
        <div>
            <h2>{count}</h2>
            <button style={styles} onClick={()=>setcount(count + 1)}>+</button>
            <button style={styles} onClick={()=>setcount(count - 1)}>-</button>
        </div>
    )
        
          
      
  }