import React, { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import ItemCarousel from '../../components/itemCarousel/ItemCarousel';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';

export default function Home({type}) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`https://animex-api.herokuapp.com/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            "Access-Control-Allow-Origin": "*"
          }
        });
        setLists(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre])
  

  return (
    <>
      <div className='w-full h-full bg-black flex flex-row'>
        <div className='w-24'>
          <Sidebar />  
        </div>
      <div className='w-full'>
          <Featured type={type} setGenre={setGenre} />
          {
            lists.map((list) => (
              <ItemCarousel list={list}/>
            ))
          }
      </div>
      </div>
    </>
    );
}
