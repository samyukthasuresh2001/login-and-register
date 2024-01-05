import React, { useState } from 'react'
import { FaLock} from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'

import {IoIosArrowRoundForward} from 'react-icons/io'
import {FaFacebook, FaGoogle, FaTwitter} from 'react-icons/fa'


import './Register.css'


const Register = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  })

  const [errors, setErrors] = useState({})


  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const validationErrors = {}
    if(!formData.email.trim()){
      validationErrors.email = 'email is required!'
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = 'email is not valid!'
    }

    if(!formData.password.trim()){
      validationErrors.password = 'password is required!'
    }else if(formData.password.length < 6){
      validationErrors.password = 'password should be atleast 6 characters!'
    }

    if(formData.confirmpassword !== formData.password){
      validationErrors.confirmpassword = 'password doesnot match!'
    }

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length == 0){
      console.log('signedin')
    }

  }

  return (
    <div>
        <div className="formDiv">
            <h2 className='text'>SignUp</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='input'>
                <input 
                type="email" 
                name='email'
                placeholder='Email'
                autoComplete='off'
                onChange={handleChange}
                  />
                {errors.email && <span className='error'>{errors.email}</span>}

                <MdEmail className="icon"/>
                </div>
                <div className='input'>
                <input
                 type="password"
                 name='password'
                 placeholder='Password'
                 autoComplete='off'
                 onChange={handleChange}
                  />
                {errors.password && <span className='error'>{errors.password}</span>}

                <FaLock className="icon"/>
                </div>
                <div className='input'>
                <input 
                type="password"
                name='confirmpassword'
                 placeholder='Confirm Password' 
                 autoComplete='off'
                 onChange={handleChange}
                  />
                {errors.confirmpassword && <span className='error'>{errors.confirmpassword}</span>}

                <FaLock className="icon"/>
                </div>
               
                <button className='btn' type='submit'>SignUp
                <IoIosArrowRoundForward className="icon" />
                </button>

                <p className='textDiv'>or SignUp with</p>
               
               <div className='footer' >
               <button className='btnn' ><span><FaFacebook className='icon'/></span></button>
               <button className='btnn'><span><FaGoogle className='icon'/></span></button>
               <button className='btnn'><span><FaTwitter className='icon'/></span></button>

               </div>

               <div className='registerLink'>
                    <p>Already have an account <IoIosArrowRoundForward className='icon'/>
                    <span><a href="/">Login</a></span></p>
                    
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default Register