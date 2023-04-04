import React, { useState } from 'react'
import shortid from 'shortid'
import { FaBars, FaTelegramPlane } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr';
import { BiSortAlt2 } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegLightbulb } from 'react-icons/fa'
import { SlOptions } from 'react-icons/sl'
import img from '../Assets/umar2.jfif';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
function Todo() {
    const [input, setInput] = useState("");
    const [arr, setArr] = useState([]);
    const [open, setOpen] = useState(true);
    const [num, setNum] = useState()
    const navigate = useNavigate();
    const data = {
        todo: input,
        id: shortid.generate()
    }
    const handleAdd = () => {
        if (input === "") {
            alert("Please fill out the task");
        } else {
            setArr([...arr, data])
            setInput("");
            arr.push(data)
            console.log(arr);
        }
    }


    const handleEdit = (value, id) => {
        setInput(value)
        setOpen(false)
        setNum(id)
    }

    const handleUpdate = () => {
        arr.splice(num, 1, data)
        console.log(arr);
        setOpen(true)
        setInput("")
    }
    const handleDelete = (_, id) => {
        let a = arr.filter((_, ind) => {
            return arr[ind].id !== arr[id].id;
        })
        console.log(arr);
        setArr(a);
    }
    const handleLogout = () => {
        navigate('/login')
    }
    return (
        <div>

            <div className='py-3 bg-blue-500 text-white px-3  flex items-center justify-between ' >

                <div className='flex items-center'>
                    < FaBars className='' />
                    <p className='ml-2'> To Do List</p>
                </div>
                <input type="text" placeholder='  Seach Here' className='rounded-md py-1 w-28  md:w-96' />
                <div className='flex items-center md:text-2xl '>
                    <FiSettings />
                    <FaTelegramPlane className='mx-2' />
                    <img src={img} className='w-6 rounded-full md:w-7 ' />
                    <button className='btn1 md:w-20 md:text-xl' onClick={handleLogout}>Logout</button>
                </div>
            </div>


            <div className='my-6'>
                <div className='flex items-center justify-start mx-6 '>

                    <h1 className='mr-3 text-2xl mb-3 md:ml-12'>
                        My Day
                    </h1>
                    <SlOptions />
                </div>
                <div className='flex items-center justify-between mx-9 md:mx-20'>
                    <div className='text-sm'>
                        {moment(new Date()).format("MMM Do YY")}
                    </div>
                    <div className='flex items-center space-x-2 text-xl '>
                        <BiSortAlt2 />
                        <FaRegLightbulb />
                    </div>
                </div>
            </div>

            <div className=' flex justify-between items-center   border-2 rounded-md mx-auto my-4  px-3 w-72 shadow-md pb-1  md:w-[90%] md:py-2' >
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder=' What needs to be done?' className='outline-none    ' />
                {open ? <button onClick={handleAdd}><p className='text-3xl text-blue-600'>+</p></button> :
                    <button onClick={() => { handleUpdate() }}><GrUpdate /></button>}
            </div>

            {arr.map((value, id) => {
                return (
                    <div key={id} className='flex justify-between  list-none  items-center mx-auto w-72 shadow-md border-2 rounded-md py-2 px-3 mb-2 md:w-[90%] md:py-3 '>
                        <li>{value.todo}</li>
                        <div className='text-xl'>
                            <button onClick={() => { handleEdit(value.todo, id) }}><AiOutlineEdit /></button>
                            <button onClick={() => { handleDelete(value, id) }} className='ml-2'><RiDeleteBin6Line /></button>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default Todo;
