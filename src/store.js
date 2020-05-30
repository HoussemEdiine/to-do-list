import {createStore,combineReducers} from  'redux'
import inputR from './reducers/inputR'
import mainR from './reducers/mainR'
const  store = createStore(combineReducers({
 input :inputR,
 main : mainR
}))
export default store