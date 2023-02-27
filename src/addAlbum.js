import React, { useState } from 'react'
import { Link} from "react-router-dom";
import './addAlbum.css'
const AddAlbum = (props) => {
  const [userId,setUserId]=useState();  //userId that will be set by user
  const [id,setId]=useState();  //id that will be set by user
  const [title,setTitle]=useState('');  //title that will be set by user

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User id</label>
          <input type="number" className="form-control" id="userId" onChange={(event)=>setUserId(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Id" className="form-label">Id</label>
          <input type="number" className="form-control" id="Id" onChange={(event)=>setId(event.target.value)}/>
        </div>
        <div className="mb-3">
        <label className="form-label" htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" onChange={(event)=>setTitle(event.target.value)}/>
        
        </div>
        {/* clicking it will add new album and make an api call */}
        <Link to="/"><button className="btn btn-primary" onClick={()=>props.addAlbums(id,userId,title)}>Add Album</button></Link>
      </form>
    </div>
  )
}

export default AddAlbum