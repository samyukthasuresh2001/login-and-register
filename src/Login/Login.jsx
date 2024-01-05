import React, {  useState } from 'react'
import {FaUser, FaLock} from 'react-icons/fa'
import {IoIosArrowRoundForward} from 'react-icons/io'
import './Login.css'


const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''

    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const validationErrors = {}
        if (!formData.username.trim()){
            validationErrors.username = 'username is required!'
        }

        if(!formData.password.trim()){
            validationErrors.password = 'password is required!'


    }
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length == 0){
      console.log('signedin')
    }
}
  return (
    <div>
        <div className="formDiv">
            <h2 className='text'>Login</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='input'>
                <input
                 type="text"
                 name='username'
                 placeholder='Username'
                 autoComplete='off'
                 onChange={handleChange}
                />
                {errors.username && <span className='error'>{errors.username}</span>}
                <FaUser className="icon"/>

                </div>
                <div className='input'>
                <input 
                type="password" 
                placeholder='Password' 
                name='password'
                autoComplete='off'
                onChange={handleChange}
                />
                {errors.password && <span className='error'>{errors.password}</span>}
                <FaLock className="icon"/>

                </div>

                <div className='remember'>
                    <label ><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button className='btn' type='submit'>Login
                <IoIosArrowRoundForward className="icon" />
                </button>
               
                <div className='registerLink'>
                    <p>Don't have an account?
                    <span><a href="/register">Register</a></span></p>
                    
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login;