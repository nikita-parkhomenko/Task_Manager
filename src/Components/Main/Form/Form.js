import React from 'react'

import './Form.css'

const Form = (props) => {

    return(
        <form onSubmit={props.onSubmitHandler}>
            <input placeholder="Enter your task" onChange={props.onChangeHandler} type="text"></input>
            <input type="submit" value="Add to list"></input>
        </form>
    )
}

export default Form