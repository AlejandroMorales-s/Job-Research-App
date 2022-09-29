import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { putWithToken } from '../../../api';
import { globalContext } from '../../../context/GlobalContext';

export default function UserData() {
    const {auth, setAuth} = useContext(globalContext);
    const navigate = useNavigate();

    const updateUser = (e) => {
        e.preventDefault();
        putWithToken(`/api/users/${auth.id}`, {
            password: e.target.password.value,
        })
        .then(({data})=>{
            console.log(data); 
        })
        .catch(error=>{
            console.log(error.response.data);
        })
    }


    const LogOut=()=>{
        localStorage.removeItem("token")
        setAuth({
            logged:false,
            name:"",
            email:"",
            id:""
        })
        navigate('/')
    }

  return (
    <>
        <form className='form' action="" onSubmit={updateUser}>
            <div className='campos-container'>
                <label className='form-label' htmlFor="name">Name</label>
                <input id='name' className='form-input' disabled type="text" placeholder={auth.name} />
            </div>
            <div className='campos-container'>
                <label className='form-label' htmlFor="email">Email</label>
                <input id='email' className='form-input' type="email" disabled placeholder={auth.email} />
            </div>
            <div className='campos-container'>
                <label className='form-label' htmlFor="password">Password</label>
                <input id='password' className='form-input' type="password" placeholder="New Password" />
                <div className="profile-buttons">
                    <button onClick={LogOut} id='close-sesion-btn' className='form-link form-btn' >Log Out</button>
                    <button className='form-link form-btn' type="submit">Update</button>
                </div>
            </div>
        </form>
    </> 
  )
}
