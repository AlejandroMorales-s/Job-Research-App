import React, {useRef, useContext, useState} from 'react'
import { GlobalContext } from '../../App'
import { post } from '../../api'
import { authContext } from './AuthContext'

export default function SignUp() {
    const context = useContext(authContext)
    const [error,setError] = useState({
        isError:false,
        message:"",
        loading:false
    })
    const email = useRef()
    const password = useRef()
    const name = useRef()
    const role = useRef()

    const signup = (event) =>{
        event.preventDefault()

        console.log(role.current.value)
        setError({...error,loading:true})
        post("/api/auth/signup",{
            name:name.current.value,
            email: email.current.value,
            password:password.current.value,
            role:role.current.value
        })
        .then(({data})=>{
            setError({...error,loading:false})
            localStorage.setItem("token",data.token)
            context.setAuth({
                id:data.user.id,
                name:data.user.name,
                logged:true
        })
        })
        .catch(error=>{
            console.log(error.response.data)
            setError({
                isError:true,
                message:error.response.data.message,
                loading:false
            })
        })
    }

    const recoverSession = ()=>{
        const token = localStorage.getItem("token")

        if(token){
            fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ token
            },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.failed){
                console.log(data)
            }else{
                context.setAuth({
                    id:data.user.id,
                    name:data.user.name,
                    logged:true
                })
            }
        })
        .catch(error=>console.log(error))
        }
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
