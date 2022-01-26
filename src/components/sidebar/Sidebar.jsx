import { Computer, Home, Movie } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../authContext/AuthActions';
import { AuthContext } from '../../authContext/AuthContext';

export default function Sidebar() {
    const { dispatch } = useContext(AuthContext);
  return (
    <div className='fixed w-24 min-h-screen hover:bg-black ease-linear duration-150 bg-gray-500/40 shadow-xl shadow-black flex flex-col py-52 justify-between items-center z-50'>
        <span className='text-red-500 font-bold text-5xl cursor-default'>
            P
        </span>
        <Link to='/'>
            <Tooltip title="Home" placement='right'>
                <IconButton>
                    <Home className='text-white' fontSize='large'/>
                </IconButton>
            </Tooltip>
        </Link>
        <Link to="/movies">
            <Tooltip title="Movies" placement='right'>
                <IconButton>
                    <Movie className='text-white' fontSize='large'/>
                </IconButton>
            </Tooltip>
        </Link>
        <Link to="/series">
            <Tooltip title="Series" placement='right'>
                <IconButton>
                    <Computer className='text-white' fontSize='large'/>
                </IconButton>
            </Tooltip>
        </Link>
        <Tooltip title={
            <>
                <div className='flex flex-col gap-2'>
                    <a><span>Settings</span></a>
                    <a onClick={() => dispatch(logout())}><span className='cursor-pointer'>Log Out</span></a>
                </div>
            </>
        }
        placement='right'>
            <div className='cursor-pointer'>
                <img src="https://i.pinimg.com/474x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg" alt="Profile picture" className='w-8 h-8 rounded-md' />
            </div>
        </Tooltip>
    </div>
  );
}
