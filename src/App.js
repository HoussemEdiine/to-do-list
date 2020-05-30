import React from 'react';
import './App.css';
import ProductTable from './ProductTable'
import Profile from './profile/Profile'
import Input from './component/input'
import Main from './component/main'
import Hooks from './profile/hooks'
import Todo from './profile/todo'

function App() {
  var product = [{
    name : 'shirt',
    price: '20 £',
    category : 'Clothes'
  },{name : 'smart phone',
  price: '500 £',
  category : 'Electronics'},{name : 'shoes',
  price: '40 £',
  category : 'Clothes'}]
  let x = 10000 

 // const ProductComponent = product.map(item => <ProductTable name={item.name} price={item.price} category={item.category} />)

  return (
    <div className="App">
   <Input/>
   <Main/>
   <Hooks/> 
  <Todo/>
    </div>
  );
}

export default App;
