import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useRef, useContext} from 'react';
import { auth } from '../../libs/firebase';
import { GlobalContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const {setUser} = useContext(GlobalContext)

    const navigate = useNavigate();

    const email = useRef();
    const password = useRef();

    const login = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(res => {
            const {displayName, email} = res
            console.log(res) 
            setUser({
                name: displayName,
                email: email,
                logged: true
            })
            navigate('/feed')
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
