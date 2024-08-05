import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const [songs, setSongs] = useState([
        { title: 'God has done it', id: 1, artist: "olamide"},
        { title: 'Oluwa e tobi', id: 2, artist: "Fireboy" },
        { title: 'God is the greatest', id: 3, artist: "Wizkid" },
        { title: 'God is the greatest', id: 4, artist: "tuface" },
    ]);
    const [age, setAge] = useState(20);
    const addSong =(artist) =>{
        setSongs([...songs, { artist, id: uuidv4()  }]);
    }
    useEffect(() => {
        console.log('use Effect hook ran', songs);
    }, [songs])
    useEffect(() => {
        console.log('use Effect hook ran', age);
    }, [age])
    return ( 
        <div className='song-list'>
            <ul>
               {songs.map(song => {
                return (<li key={song.id}>{song.artist}</li>)
               })}
            </ul>
         <NewSongForm  addSong={addSong}/>
         <button onClick={() => setAge(age + 1)}> Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;