import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Component } from 'react';
//components  
import MyTable from './components/table';


function App() {
  const [counter,setCounter] = useState(0)

  const handleCounter = (num) => {
    setCounter(counter+num)
  }

  const handleDelete = (id) => {
    setProduct(products.filter((v)=>v.id!==id))
  }

  useEffect(() => {
    // ini menjalankan suatu function saat web belum benar2 muncul
    // cth: get data from api
    //willount
    console.log("use effect run")
  }, [])

  const [buttonName,setButtonName] = useState('button dari state')

  const [products,setProduct] = useState([
    { id: 1, name: "Budi", age: 21 },
    { id: 2, name: "Andi", age: 22 },
    { id: 3, name: "Mirna", age: 23 },
    { id: 4, name: "Hansel", age: 34 },
    { id: 5, name: "Nicko", age: 54 }
  ]);

  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <MyTable
      data={products}
      onDelete={handleDelete}
    />
  </tbody>
</table>
      
  );
}

export default App;
