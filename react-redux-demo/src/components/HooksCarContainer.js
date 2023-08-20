import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCars } from '../redux'

function HooksCarContainer () {
  const numbeOfcars = useSelector(state => state.Car.numbeOfcars)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cars - {numbeOfcars} </h2>
      <button onClick={() => dispatch(buyCars())}>Buy car</button>
    </div>
  )
}

export default HooksCarContainer
