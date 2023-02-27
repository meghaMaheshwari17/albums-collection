import React,{ useState } from 'react'
import { Link} from "react-router-dom";
import './addAlbum.css'
const UpdateAlbum = (props) => {
 
    const [userId,setUserId]=useState(0);
    const [id,setId]=useState(0);
    const [title,setTitle]=useState('');   
  
    return (
      <div className="container">
        <form>
          <div className="mb-3">
            <label  className="form-label">Old user id:{props.album.userId}</label>
            <br></br>
            <label htmlFor="userId" className="form-label">Enter New User id:</label>
            <input type="number" className="form-control" id="userId" onChange={(event)=>setUserId(event.target.value)}/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Old id:{props.album.id}</label>
            <br></br>
            <label htmlFor="Id" className="form-label">Enter new Id:</label>
            <input type="number" className="form-control" id="Id" onChange={(event)=>setId(event.target.value)}/>
          </div>
          <div className="mb-3">
          <label  className="form-label">Old title:{props.album.title}</label>
          <br></br>
          <label className="form-label" htmlFor="title">Enter new Title:</label>
          <input type="text" className="form-control" id="title" onChange={(event)=>setTitle(event.target.value)}/>
          
          </div>
           {/* clicking it will update the existing album and make an api call */}
          <Link to="/"><button className="btn btn-primary" onClick={()=>props.updateAlbums(id,userId,title,props.album)}>Update Album</button></Link>
        </form>
      </div>
  )
}

export default UpdateAlbum