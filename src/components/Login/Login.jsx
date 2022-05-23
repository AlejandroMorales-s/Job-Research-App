import React, { useState, useContext } from 'react';
import Form from './Form';
import DocumentTitle from 'react-document-title';
import SignUp from './SignUp';
import {useNavigate} from 'react-router-dom';
import { GlobalContext } from '../../App';

export default function Login() {
    const [form, setForm] = useState(true);
    const {auth, setAuth} = useContext(GlobalContext)
    const navigate = useNavigate();

    const toggle = () => {
        setForm(!form);
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
                    setAuth({
                        id:data.user.id,
                        name:data.user.name,
                        email:data.user.email,
                        role:data.user.role,
                        logged:true
                    })

                    if (data.user.role === "applicant") {
                        navigate("/feed",{
                            replace:true
                        })
                    } else {
                        navigate("/myoffers",{
                            replace:true
                        })
                    }
                }
            })
            .catch(error=>console.log(error))
        }    
    }

    recoverSession()

    return (
        <div>
            <DocumentTitle title={form ? "devJobs | Login" : "devJobs | SignUp"}/>
            <div className='logo-form'>
                <h1 className='logo'>devJobs<span className='logo-span'>()</span></h1>
            </div>
            <div className='form-container'>
                {form ? 
                <>
                    <p className='align-text bold'>Login</p> 
                    <Form/>
                    <button onClick={toggle} className='login-signup'>You don't have account? Sign Up here</button>
                </> 
                : 
                <>
                    <p className='align-text bold'>SignUp</p> 
                    <SignUp/>
                    <button onClick={toggle} className='login-signup'>You have account? Login</button>
                </>
                }
            </div>
        </div>
    )
}
