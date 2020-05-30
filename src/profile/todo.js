import React , {useState} from 'react'
import inputR from '../reducers/inputR'
    export default function Todo(){
    
      const [value,setvalue] = useState([]) 
      const [str, setstr] = useState('')
     
      const onChange = e =>{
          setstr(e.target.value)    
      }
      
      
      const add = () =>{
          if(str!==''){
          setvalue([...value,{
             id : value.length ,
             value : str

          }])
          
        }
        setstr('')
      }
      const del = (index) =>{
         let newValue = value.filter((_el)=> _el.id !== index
         
         )
        
         console.log(newValue)
         setvalue(newValue)         
       }
     
    const edit = (text,id) =>{
      value.map(item =>{
            if(item.id==id){
                item.text = text 
            }
        })
        setvalue(value)
    

    }
        return(
            
            <div>
                
                <input value={str}  onChange={onChange}/> <button onClick={add}>[+]</button>
       
            {value.map(item  =>
                  <li key={item.id}> 
                           {item.value}
                     <button onClick={()=>del(item.id)}>[DEL]</button>
                             </li>
            )}
            
               
                 
            </div>
            
        )
    }