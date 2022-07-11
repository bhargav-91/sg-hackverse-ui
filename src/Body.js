import * as react from 'react'
import {Routes} from 'react-router-dom'

export default function Body(props){
    return(
        <div className='flex-grow-1'>
            <Routes>{props.route}</Routes>
        </div>
    )
}