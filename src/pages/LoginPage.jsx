import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import "../pages/style/LoginPage.css"

const LoginPage = () => {

  const {handleSubmit, reset, register} = useForm()

  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: "",
      password: ""
    })
  }

  const handleLogout = ( ) =>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

  if(localStorage.getItem("token")){
    const {firstName, lastName, email} = JSON.parse(localStorage.getItem("user"))
    return (
      <div className='login__div'>
        <img src='' alt='' />
        <h2>Welcome {firstName + " " + lastName} </h2>
        <button onClick={handleLogout}>Logouts</button>

      </div>
    )
  }


  return (
    <div>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <label className='login__label'>
        <span className='login__label-span' >Email</span>
        <input className='login__label-imput' {...register("email")} type="email" />
        </label>
        <label className='login__label'> 
        <span className='login__label-span' >Password</span>
        <input  className='login__label-imput' {...register("password")}  type="password" />
        </label>

        <button className='login__label-btn' >Submit</button>

        
      </form>
    </div>
  )
}

export default LoginPage
