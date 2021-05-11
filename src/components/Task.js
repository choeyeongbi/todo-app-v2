import React from 'react'
import {useTaskState} from '../apis/Context'


const Task = ({id,text,reminder,history}) => {
const task = useTaskState();
   console.log('Task() >',id,text,reminder)
   console.log('Task() history:',history.location.pathname);

    return (
        <div >
            <p>
             id: {id}<br />
            text: {text}<br />
            reminder: {reminder} 
            </p>
        </div>
    )
}

export default Task
