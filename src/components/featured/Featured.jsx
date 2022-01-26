import axios from 'axios';
import "./featured.css";
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Info } from '@mui/icons-material';

export default function Featured({type, setGenre}) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`https://animex-api.herokuapp.com/api/movies/random?type=${type}`,{
          headers: {
            token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            "Access-Control-Allow-Origin": "*"
          }
          
        });
        setContent(res.data[0]);
      } catch(err) {
        console.log(err);
      }
    }
    getRandomContent();
  }, [type])
  
  return (
    <div className='w-[100%] h-[50vh] relative'>
        <video src={content.trailer} className='w-full h-full object-cover' autoPlay muted loop></video>
        {/* <img src={content.img} alt="" /> */}
        <div className='absolute bottom-0 right-0 mx-8 my-8 w-3/6 text-right'>
          <h1 className='text-3xl font-bold text-white text-shadow'>{content.title}</h1>
          <h2 className='text-xl text-white text-shadow mb-2'>{content.desc}</h2>
          <Link to={{pathname: "/watch", movie: content}}>
            <Button variant='contained' color='error' className='mt-2'startIcon={<VisibilityIcon />}>See</Button>
          </Link>
          <Link to={{pathname: "/info", movie: content}} className='ml-2'>
            <Button variant='contained' color='error' className='mt-2'startIcon={<Info />}>Info</Button>
          </Link>
        </div>
    </div>
    );
}
