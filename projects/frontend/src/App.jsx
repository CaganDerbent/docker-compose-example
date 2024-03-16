import { useState,useEffect } from 'react'

import './App.css'



function App() {

  const [json,setJson] = useState("");

  useEffect(()=>{

    async function get(){
  
      try{
        const response = await fetch("http://localhost:3002/",{
        method:'GET'
      })
      const data = await response.json();
  
      if(response.ok){
        setJson(data)
        console.log(json)
      }
  
      }
      catch(err){
        console.log(err)
      }
      
  
    }
    get()
  })

  return (
    <>
      <h1>{json}</h1>
    </>
  )
}

export default App
