import React, {useRef, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { post } from '../../api';
import { GlobalContext } from '../../App';

export default function Form() {
    const {auth, setAuth} = useContext(GlobalContext)

    const navigate = useNavigate();

    const email = useRef();
    const password = useRef();

    const login = (event) =>{
        event.preventDefault();

        post("/api/auth/login",{ // Peticion de login
            email: email.current.value,
            password:password.current.value
        })
        .then(data=>{
            const {token,user} = data.data
            localStorage.setItem("token",token); // Guardamos el token que recibimos
            setAuth({
                id:user.id,
                name:user.name,
                email:user.email,
                logged:true
            })
            navigate("/feed",{
                replace:true
            })
        })

    }
    return (
        <>
            <form onSubmit={login} action="" className='form'>
                <div className='campos-container'>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input ref={email} id='email' className='form-input' type="email" placeholder="Email" />
                </div>

                <div className='campos-container'>
                    <label className='form-label' htmlFor="password">Password</label>
                    <input ref={password} id='password' className='form-input' type="password" placeholder="Password" />
                        <button className='form-link form-btn' type="submit">Login</button>
                </div>
            </form>
        </>
    )
}
