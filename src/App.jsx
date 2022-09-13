import React from 'react'
import "./App.css"
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import { BiTrash } from 'react-icons/bi'
import { BiEdit } from 'react-icons/bi'  
import ListContainer from './components/ListContainer'

const App = () => {
  const [text,setText] = useState("")
  const [list,setList] = useState([]);
  const [bool,setBool] = useState(false);


  const handleChange = (e) =>{
    setText(e.currentTarget.value)
  }

  // console.log(uuidv4())


  const handleClick = () =>{

    const data = {
      id: uuidv4(),
      text
    }
    if(text != ""){
      setList((pre)=>[...pre,data]);
      setText("")
      // console.log(list)
    }
    else{
      alert("Error")
    }   
  //   setBool(!bool)  
  // console.log(bool)

 
  }
  // console.log(bool)  //   setBool(!bool)  
  // console.log(bool)


  // console.log(list)

  const handleDelete =(id) =>{
    // console.log(id)
    console.log(list)
    // list.filter(el=> el.id != id);
    setList((preState)=>preState.filter((i)=>i.id !== id))

  }

  const handleEdit = (id,text) => {
    // console.log(id)
    // let data = "ssssss"
    const value = prompt("Are You Sure want to edit",text);
    setList((preState)=>  preState.map(el=>{

      return    el.id === id ? {id:uuidv4(),text:value} : el
    
      // if(el.id === id){
      //     return {
      //       id:uuidv4(),
      //       text : value
      //     }
      // }
      // else{
      //     return el
      // }
    }))
    console.log(value)
  }

  return (
    <div>
        <h1 className='header text-blue-700' >CRUD Todo</h1>
        <div className="inputContainer">
            <input className='input' value={text} onChange={handleChange} type="text" />
            <button onClick={handleClick} >Add Goal</button>
        </div>
        <div className="">
                {

                  list.map(el=> {
                    return(
                      <ListContainer key={el.id}  data={el} drop={handleDelete} edit={handleEdit} />
                    )
                  })

                }
            </div>
    </div>
  )
}

export default App