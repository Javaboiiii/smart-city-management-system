import React, { useState } from 'react'

const Form = () => {
    const [issue, setIssue] = useState({
        username : '', 
        problem : '', 
        email : '', 
        phone : ''
    })

    const handleChange = (e) => {
        if(e.target.name === 'username') { 
            setIssue({
                ...issue, 
                username : e.target.value
            })
        }
        else if(e.target.name === 'email') { 
            setIssue({
                ...issue, 
                email : e.target.value
            })
        }
        else if(e.target.name === 'phone') { 
            setIssue({
                ...issue, 
                phone : e.target.value
            })
        }
        else { 
            setIssue({
                ...issue, 
                problem : e.target.value
            })
        }
    }


    const handleSubmit = () => {

    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <textarea name="problem" id="" cols="30" rows="10" placeholder='Problem Description' onChange={handleChange} required></textarea>
            <input type="text" name="username" id="" placeholder='Fullname' onChange={handleChange} required />
            <input type="email" name="email" id="" placeholder='Email' onChange={handleChange} required />
            <input type="number" name="phone" id="" placeholder='Phone' onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form> 
    </>
  )
}

export default Form
