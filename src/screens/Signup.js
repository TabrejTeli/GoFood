import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const {creds, setCreds} = useState({name : "",email : "",password : "",geoLocation: ""})
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = fetch("http://localhost:4000/api/createuser",{
            method : "POST",
            header : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify()
        })
        

    }

    const handleOnChange = (e) => {
        setCreds({...creds,[e.target.name]:e.target.value})
    }

  return (
    <>
    <div className='container'>
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={creds.name} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={creds.email} onChange={handleOnChange}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={creds.password} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" name='geoLocation' value={creds.geoLocation} onChange={handleOnChange}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="m-3 btn btn-primary">Submit</button>
            <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
        </form>
        </div>
    </>
  )
}
