import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { login } from "../../authContext/apiCalls";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password}, dispatch);
    }

  return (
    <div className='w-[100vw] h-[100vh] bg-black relative'>
        <img src="https://c.tenor.com/6LyXLgF8ksUAAAAC/anime-gif.gif" className='w-full h-full object-cover' alt="" />
        <div className='w-96 h-96 bg-black/20 absolute bottom-0 top-0 left-0 my-auto ml-20 rounded-xl flex flex-col justify-center p-12'>
            <span className='text-center text-red-500 font-bold text-5xl mb-8'>PUMPUM</span>
            <span className='text-left text-white font-bold text-xl mb-4'>Email</span>
            <input type="email" className='mb-8 p-2 rounded-lg' placeholder='Enter your email here!' onChange={(e) => setEmail(e.target.value)} />
            <span className='text-left text-white font-bold text-xl mb-4'>Password</span>
            <input type="password" className='mb-8 p-2 rounded-lg' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <Button variant='contained' color='error' onClick={handleLogin}>Login</Button>
        </div>
    </div>
    
    );
}
