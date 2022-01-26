import React, {useEffect, useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Tooltip } from '@mui/material';
import { Info } from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Item({item}) {
  const [ hovered, setHovered ] = useState(false);
  const [ movie, setMovie ] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("https://animex-api.herokuapp.com/api/movies/find/" + item, {
          headers: {
            token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          }
        })
        setMovie(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div className='h-48 aspect-video cursor-pointer ' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {
        hovered ? 
          ( <div className='relative w-full h-full'>
              <video src={movie.trailer} autoPlay={true} loop className='w-full h-full object-cover' /> 
              <Link to={{pathname: "/watch", movie: movie}}>
                <Tooltip title="View">
                  <VisibilityIcon className='absolute bottom-0 left-0 m-2 text-2xl text-white' />
                </Tooltip>
              </Link>
              <Link to={{pathname: "/info", movie: movie}}>
                <Tooltip title="Info">
                  <Info className='absolute bottom-0 right-0 m-2 text-2xl text-white' />
                </Tooltip>
              </Link>
            </div>) :
          (<img src={movie.imgSm} alt="Movie cover" className='w-full h-full object-fill' />
        )
      }
    </div>

  );
}
