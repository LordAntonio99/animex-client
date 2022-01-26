import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
  return (
    <div className='w-[100vw] h-[100vh] bg-black relative'>
        <div className='absolute top-0 left-0 w-full flex flex-row justify-between z-50'>
            <Link to={{pathname: "/info", movie: movie}} >
                <span className='text-white ml-8 my-8 flex justify-center items-center text-xl cursor-pointer '>
                    <ArrowBack className='mr-4'/> BACK
                </span>
            </Link>
        </div>
        <div className='absolute top-0 left-0 w-full flex flex-row justify-center'>
            <span className='text-white my-8 text-xl text-center'>{movie.title}</span>
        </div>
        <video src={movie.video} controls autoPlay className='w-full h-full object-cover'></video>
    </div>
    );
}
