import React from 'react' 

import './Main.css'
import Tasks from './Tasks/Tasks'
import Form from './Form/Form'

const Main = (props) => {
    return(
        <div className="Main">
        <h3 className="main-title">Your tasks for today:</h3>
        <Tasks tasks={props.tasks}/>
        <Form 
            onChangeHandler={props.onChangeHandler}
            onSubmitHandler={props.onSubmitHandler}
        />
        </div>
    )
}

export default Main