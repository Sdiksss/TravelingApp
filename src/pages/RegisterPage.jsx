import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import "../pages/style/RegisterPage.css"


const RegisterPage = () => {


  const {handleSubmit, reset, register} = useForm()

  const {createNewUser} = useAuth()

  //capturar informacion

  const submit = data  => {
    createNewUser(data)
    reset({
      firstName: "",
      lastName: "",
      password: "",
      gender: "other",
      email: ""
    })

  }


  return (
    <div className='register__contaier' >
      <form className='register__form' onSubmit={handleSubmit(submit)}>
        <label className="register__label" >
          <span className="register__form-span"  >First name</span>
        <input className="register__form-input" {...register("firstName")} type="text" /></label>
        <label className="register__label" >
          <span className="register__form-span" >Last Name</span>
        <input className="register__form-input" {...register("lastName")} type="text" /></label>
        <label  className="register__label">
          <span className="register__form-span" >Email:</span>
        <input className="register__form-input" {...register("email")} type="email" /></label>
        <label className="register__label">
          <span className="register__form-span" >Password</span>
        <input className="register__form-input" {...register("password")}  type="password" /></label>
        <label className="register__label">
          <span className="register__form-span" >Gender</span>
        <select className="register__form-input" {...register("gender")} >
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
          <option value="other">OTHER</option>
        </select>
        </label>
        <button className='register__btn'>Submit</button>
      </form>

    </div>
  )
}

export default RegisterPage
