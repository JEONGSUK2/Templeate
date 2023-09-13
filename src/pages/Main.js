import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store'

function Main() {
  
const dispatch = useDispatch()

  const b = useSelector(state => state.state)
  const a = useSelector(state => state.user)
  const dark = useSelector(state => state.dark)

  console.log(a)
  
  return (
    <>
    <p>{a}</p>
    <p>{b}</p>
    <button onClick={()=>{dispatch(changeName())}}>변경</button>
    </>
  )
}

export default Main