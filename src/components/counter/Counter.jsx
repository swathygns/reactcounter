import React from 'react'
import { useState } from 'react'
import CounterButton from './CounterButton'
import './Counter.css'

export default function Counter (){
    const[count,setcount]=useState(0)

    function incrementCounterParentFunction(by){
        setcount(count+by)
    }

    function decrementCounterParentFunction(by){
        setcount(count-by)
    }

    function resetCounter(){
        setcount(0)
    }
    return (
        <div>
            
            <span className='totalCount'>{count}</span>
            <CounterButton by={1}
                         incrementMethod = {incrementCounterParentFunction}
                         decrementMethod = {decrementCounterParentFunction}/>
            <CounterButton by={2}
                         incrementMethod = {incrementCounterParentFunction}
                         decrementMethod = {decrementCounterParentFunction}/>
            <CounterButton by={5}
                         incrementMethod = {incrementCounterParentFunction}
                         decrementMethod = {decrementCounterParentFunction}/>
            <button className='resetButton'
                          onClick={resetCounter}>Reset
            </button>  

                         
        </div>
    )
}
