import React, {useRef, useState} from 'react'
import { post } from '../../api'

export default function SignUp() {
    const [error,setError] = useState({
        isError:false,
        message:"",
    })
    const email = useRef()
    const password = useRef()
    const name = useRef()
    const role = useRef()

    const signup = (event) =>{
        event.preventDefault()
        
        post("/api/auth/signup",{
            name:name.current.value,
            email: email.current.value,
            password:password.current.value,
            role:role.current.value
        })
        .then(({data})=>{
            alert("User created successfully")
        })
        .catch(error=>{
            console.log(error.response.data)
            setError({
                isError:true,
                message:error.response.data.message,
            })
            alert(error.response.data.message)
        })
    }



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
                <button className='form-link form-btn' type="submit">Sign Up</button>
            </div>
        </form>
    </>
  )
}
