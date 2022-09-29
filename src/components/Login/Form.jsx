import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useRef, useContext} from 'react';
import { auth, database } from '../../libs/firebase';
import { GlobalContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

export default function Form() {
    const {setUser} = useContext(GlobalContext)

    const navigate = useNavigate();

    const email = useRef();
    const password = useRef();

    const login = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(res => {
            const {displayName, email, uid} = res.user
            const docRef = doc(database, "users", uid)
            getDoc(docRef)
            .then(data => {
                const {role} = data.data()
                setUser({
                    id: uid,
                    name: displayName,
                    email: email,
                    role: role,
                    logged: true
                })
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
