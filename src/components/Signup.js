import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../Assets/Logo.png'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
function Signup() {
  const dispatch = useDispatch()
  const [text, setText] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [array, setArray] = useState([])
  const navigate = useNavigate();

  const info = {
    name: text,
    id: shortid.generate(),
    mailId: email,
    pass: password
  }

  const handleClick = () => {
    array.push(info)
    setArray([...array, info])
    dispatch(addUser({email, password}))
    navigate('/todo')
  }
  return (
    <>

      <div className='mx-auto bg-blue-400 h-[100vh] '>
        <img src={image} className='w-[40%] py-4 md:w-52 mx-4' />
        <div className='flex flex-col justify-center items-center md:w-[35%] md:bg-white md:m-auto md:py-6 md:border-2 md:border-white md:rounded-md md:shadow-lg'>
          <h1 className='text-2xl text-white font-bold mx-auto mb-6 md:text-blue-600'>
            Welcome To TOPSOL
          </h1>
          <input type="text " onChange={(e) => setText(e.target.value)} placeholder='Enter name here ' value={text} className=' border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2' />
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email here ' value={email} className=' border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2' />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password here ' value={password} className=' border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2' />
          <button onClick={()=>handleClick()} className='border-2 rounded px-2 py-1 bg-white border-white text-blue-600 font-bold flex justify-center items-center my-5 md:bg-blue-600 md:border-blue-600 md:text-white'>Sign Up</button><br />
        </div>
      </div>
    </>

  )
}

export default Signup
