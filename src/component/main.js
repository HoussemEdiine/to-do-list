import React ,{Component} from 'react'
import {connect} from 'react-redux'
class Main extends Component{
    state ={}
    render(){
        return(
            <div className='container'>
               {this.props.todo.map(el=><li
               key={el.id}>{el.inputValue}
               <button  onClick={()=>{
                   this.props.remove(el.id)    
               }}>Delete</button>
               </li>)}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        todo : state.main
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        remove : (id) =>
{        dispatch ({type:'REMOVE_INPUT',id : id})
    }
}
}
export default connect(mapStateToProps,mapDispatchToProps) (Main)