import React from 'react'

const Login = () => {
  function handleclick(){
    alert ('hey login')
  }
  return (
    <button onClick={handleclick}>Login</button>
  )
}

export default Login