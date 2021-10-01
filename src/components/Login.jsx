import React from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from '../features/user'
// for modifiyng values

const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => {
        dispatch(login({ // this is action.payload
          name: "Ana", 
          age: 20,
          email: "email@gmail.com"
        }))
      }}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login
