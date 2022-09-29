import React, {useEffect, useRef, useState} from 'react'
import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { auth, database } from '../../libs/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate()
    const [valid, setValid] = useState(false);
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const role = useRef();

    const signup = (event) =>{
        event.preventDefault()
        console.log(email, password) 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (res) => {
            await updateProfile(res.user, {
                displayName:name.current.value
            })
            await setDoc(doc(database, "users", res.user.uid), {
                role:role.current.value
            })
            navigate('/feed')
        })
        .catch(error => console.log(error))
    }

    const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

    const validation = () => {
        const pass = password.current.value

        regex.test(pass) ? setValid(true) : setValid(false)
    }

    useEffect(()=>{
        password.current.oninput = validation
    },[password])

    const check = <FontAwesomeIcon className='check' icon={ faCheck } />
    const fail = <FontAwesomeIcon className='fail' icon={ faX } />

    return (
    <>
        <form onSubmit={signup} action="" className='form'>
            <div className='campos-container'>
                <label className='form-label' htmlFor="name">Select your role</label>
                <select className='form-input role-select' ref={role} defaultValue="applicant">
                    <option value="applicant">Applicant</option>
                    <option value="employer">Employer</option>
                </select>
            </div>
            <div className='campos-container'>
                <label className='form-label' htmlFor="name">Name</label>
                <input ref={name} id='name' className='form-input' type="text" placeholder="Name" />
            </div>
            <div className='campos-container'>
                <label className='form-label' htmlFor="email">Email</label>
                <input ref={email} id='email' className='form-input' type="email" placeholder="Email" />
            </div>

            <div className='campos-container'>
                <label className='form-label' htmlFor="password">password</label>
                <input ref={password} id='password' className='form-input' type="password" placeholder="password" />
                <div>
                    {valid ? 
                        <p className='password-check'>{check} Password valid!</p>
                    : 
                        <p className='password-fail'>{fail} 8-16 characters, at least one digit, one lower case letter and one upper case letter.</p>
                    }
                </div>
                <button className='form-link form-btn' type="submit">Sign Up</button>
            </div>
        </form>
    </>
  )
}
