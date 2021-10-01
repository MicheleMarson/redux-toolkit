import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'

const ChangeColor = () => {
  const [color, setColor] = useState("")
  const dispatch = useDispatch()

  return (
    <div>
      <input onChange={(e) => setColor(e.target.value)} type="text" value={color} />
      <button onClick={() => dispatch(changeColor(color))}>change color</button>
    </div>
  )
}

export default ChangeColor
