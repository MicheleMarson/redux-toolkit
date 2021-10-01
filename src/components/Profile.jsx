import React from 'react'
import { useSelector } from 'react-redux' //for accessing values

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)
  console.log(theme);
  return (
    <div style={{color:theme}}>
      <h1>Pofile page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
