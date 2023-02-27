import React from 'react'
import { Link} from "react-router-dom";
const ShowAlbum = (props) => {
  return (
    <>
    <div className="mx-auto text-center pb-4">
      <br></br>
      {/* will got to addAlbum page */}
      <Link to="/addAlbum"><button className="btn btn-outline-success">Add Album</button></Link>
      </div>
      <div className="row mx-auto">
         {props.albumData
         .sort((a,b)=>a.id<b.id)
         .map((album)=>{
            return <div className="col-md-4" key={album.id+1}>
            <div className="card mb-4 box-shadow">
            <div className="card-body">
              <p className="card-text">{album.title}</p>
                      {/* will got to updateAlbum page */}
                      <Link to="/updateAlbum"><button 
                      onClick={()=>props.handleUpdate(album)}
                      type="button" 
                      className="btn btn-sm btn-outline-secondary me-2">
                        Update
                      </button>
                      </Link>
                      {/* will delete the album */}
                      <button onClick={()=>props.deleteAlbum(album.id)} type="button" className="btn btn-sm btn-outline-danger">
                        Delete
                      </button>
              </div>
            </div>
            </div>
         })}
         </div>
      </>
  )
}

export default ShowAlbum