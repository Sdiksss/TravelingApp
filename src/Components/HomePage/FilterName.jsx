import React, { useRef } from 'react'
import "../HomePage/styles/FilterName.css"

const FormName = ({setNameInput}) => {

    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setNameInput(inputSearch.current.value.trim().toLowerCase())
        inputSearch.current.value = ""
    }


    return (
        <form className="filterName__form" onSubmit={handleSubmit}>
            <input ref={inputSearch} type='text'/>
            <button >Seach</button>
            
        </form>
    )
  
}

export default FormName
