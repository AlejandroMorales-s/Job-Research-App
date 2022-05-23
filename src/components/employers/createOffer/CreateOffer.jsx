import React, {useRef, useContext} from 'react'
import { postWithToken } from '../../../api';
import { GlobalContext } from '../../../App';
import Navbar from '../../Navbar';

export default function CreateOffer() {

  const {auth} = useContext(GlobalContext);

  const title = useRef();
  const category = useRef();
  const country = useRef();
  const province = useRef();
  const city = useRef();
  const salary = useRef();
  const description = useRef();

  const signup = (event) =>{
    event.preventDefault()

    postWithToken("/api/jobs",{
      "employer":{
        "id": auth.id,
        "name": auth.name,
        "email": auth.email,
        "role": auth.role
    },
    "description": description.current.value,
    "title": title.current.value,
    "category": category.current.value.split(", "),
    "location":{
        "country": country.current.value,
        "province": province.current.value,
        "city": city.current.value
    },
    "salary": salary.current.value
    })
    .then(({data})=>{
        alert("Offer created successfully");
    })
    .catch(error=>{
        console.log(error.response.data)
    })
}


  return (
    <>
        <Navbar/>
        <h2 className='create-offer-title'>Create Offer</h2>
        <div className="form-container">
          <form onSubmit={signup} action="" className='form'>
              <div className='campos-container'>
                  <label className='form-label' htmlFor="title">Title</label>
                  <input ref={title} id='title' className='form-input' type="text" placeholder="Title" />
              </div>
              <div className='campos-container'>
                  <label className='form-label' htmlFor="category">Category</label>
                  <input ref={category} id='category' className='form-input' type="text" placeholder="Separate categorys by comma and space" />
              </div>
              <div className='form-flex'>
                <div className='campos-container'>
                    <label className='form-label' htmlFor="country">Country</label>
                    <input ref={country} id='country' className='form-input' type="text" placeholder="Country" />
                </div>

                <div className='campos-container'>
                    <label className='form-label' htmlFor="province">Province</label>
                    <input ref={province} id='province' className='form-input' type="text" placeholder="Province" />
                </div>
                <div className='campos-container'>
                    <label className='form-label' htmlFor="city">City</label>
                    <input ref={city} id='city' className='form-input' type="text" placeholder="City" />
                </div>
                <div className='campos-container'>
                    <label className='form-label' htmlFor="salary">Salary</label>
                    <input ref={salary} id='salary' className='form-input' type="number" placeholder="Salary" />
                </div>
              </div>
                <div className='campos-container'>
                    <label className='form-label' htmlFor="description">Description</label>
                    <textarea className='form-input create-offer-desc' id='description' ref={description} name="textarea" rows="10" cols="50"/>
                </div>
              <div className='campos-container'>
                  <button className='form-link form-btn' type="submit">Create Offer</button>
              </div>
          </form>
        </div>
    </>
  )
}
