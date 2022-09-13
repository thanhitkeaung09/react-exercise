import React from 'react'
import "./ListContainer.css"
import { BiTrash,BiEdit } from 'react-icons/bi'

const ListContainer = ({data,drop,edit}) => {
  return (
    // console.log(props)
    <>
      <div>
           <div className="listContainer" key={data.id}>
                          <p>{data.text}</p>
                          <BiTrash 
                          onClick={()=>{
                            drop(data.id)
                          }} 
                          />
                          <BiEdit 
                          onClick={()=>{
                            edit(data.id,data.text)
                          }}
                           />
                      </div>
    </div>
    </>
  )
}

export default ListContainer