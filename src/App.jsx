import './App.css'
import { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosAsos from './api';

function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
   async function loadData(){
    try{
      setLoading(true);
      let response = await axiosAsos("/shows")
      setData(response.data)
    }
  
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
   }

   loadData();
  }, []);



  console.log(data);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      {
        data.map(product => {
          return <div key={product.id}>
            <img src={product.image.medium} alt="" />
            <h3>{product.name}</h3>
            <p>{product.premiered}</p>
          </div>
        })
      }

      {
        loading && <p>Loadind...</p>
      }
    </div>
  )
}

export default App
