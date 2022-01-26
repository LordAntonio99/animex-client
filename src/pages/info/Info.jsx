import React from 'react';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';

export default function Info() {
    const location = useLocation();
    const movie = location.movie;

  return (
    <div className='w-full h-full bg-black flex flex-row'>
    <div className='w-24'>
        <Sidebar />  
    </div>
    <div className='w-full'>
        <div className='w-full flex justify-center'>
            <div className='w-[50vw] h-screen bg-gray-50/10'>
                <div>
                    <img src={movie.img} alt="" className='w-full aspect-video' />
                </div>
                <div className='mx-8 mt-8 text-white'>
                    <div className='flex flex-col relative'>
                        <h1 className='text-5xl font-bold mb-8'>{movie.title}</h1>
                        <Link to={{pathname: "/watch", movie: movie}}>
                            <Button variant='contained' color='error' startIcon={<VisibilityIcon />} className='mr-8'>
                                See
                            </Button>
                        </Link>
                        <div className='mt-8'>
                            {movie.desc}
                        </div>
                        <div className='mt-8 flex flex-row justify-between items-center'>
                            <span>{movie.genre}</span>
                            <span>1h 24min</span>
                            <span>{movie.year}</span>
                            <span className='p-2 bg-gray-600 rounded-xl'>+{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}
