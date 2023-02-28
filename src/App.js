import './App.css';
import { Routes, Route, BrowserRouter  as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddAlbum from './addAlbum';
import Navbar from './Navbar';
import ShowAlbum from './ShowAlbum';
import UpdateAlbum from './UpdateAlbum';

const baseUrl = 'https://jsonplaceholder.typicode.com/albums';
function App() {
  let [albumData, setAlbumData] = useState([]);  //main album data
  let [updateAlbum, setUpdateAlbum] = useState({});  //album which needs to be updated will be stored here
  
  // to fetch the albums when the page is first loaded
  useEffect(() => {
     if(albumData.length===0){
      fetchAlbums();
     }
   },[albumData]);


  // making an api call to get the album data
  const fetchAlbums = () => {
    axios.get(baseUrl).then((response) => {
      setAlbumData(response.data);
    });
  };

  // making an api call to submit album data
  const addAlbums = async (id, userId, title) => {
    await axios
      .post(baseUrl, {
        userId: userId,
        id: id,
        title: title,
      })
      .then(function (response) {
        const albums = [response.data, ...albumData]; //adding the album to the current albumData
        setAlbumData(albums);
        alert('album added');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // making an api call to delete the album
  const deleteAlbum = async (id) => {
    await axios
      .delete(`${baseUrl}/${id}`)
      .then(function (response) {
        const albums = albumData.filter((album) => album.id !== id);
        setAlbumData(albums);
        alert('album deleted');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // making an api call to update the album
  const updateAlbums = async(id, userId, title, oldAlbum) => {
    let userid=parseInt(userId);
    const album = {
      userId: userid,
      id: id,
      title: title,
    };
    await axios.put(`${baseUrl}/${oldAlbum.id}`, album).then((response) => {
      console.log(response);
      let newAlbums=[...albumData];
      let index=newAlbums.findIndex((x)=>x.id===oldAlbum.id);
      newAlbums[index]=response.data;
      setAlbumData(newAlbums);
      console.log(albumData);
      alert('album changed');
    });
  };

  // to know which album to update, the updatedAlbum will be set by showAlbum component 
  const handleUpdate = (album) => {
    setUpdateAlbum(album);
  };

  

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          {/* main path */}
          <Route
            path='/'
            element={
              <ShowAlbum
                albumData={albumData}
                deleteAlbum={deleteAlbum}
                handleUpdate={handleUpdate}
              />
            }
          />
          {/* path where a new album wil be added */}
          <Route
            path='/addAlbum'
            element={<AddAlbum addAlbums={addAlbums} />}
          />
          {/* path where an album will be updated */}
          <Route
            path='/updateAlbum'
            element={
              <UpdateAlbum album={updateAlbum} updateAlbums={updateAlbums} /> //album is the old album object which needs to be updated and updateAlbums is the function that will be called to make an api call after clicking the update button 
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
