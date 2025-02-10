'use client'

import { IconSquareRounded, IconSquareRoundedCheck, IconSquareRoundedCheckFilled, IconTrash, IconTrashFilled } from '@tabler/icons-react';
import React, { useState } from 'react'

const Todolist = () => {

    // let count = 0;
    // const [count, setCount] = useState(0)

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
        
        
        if (e.code === 'Enter') {
            if(!e.target.value.trim()){
                return alert('Please Enter a task');
            }
            
            console.log(e.target.value);

            const newTask ={ text: e.target.value, completed: false};
            
            setTaskList( [newTask, ...taskList ] );


            e.target.value = '';



        }

    }
    
    const deleteTask = (index) => {
        console.log(index);

        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }

    const toggleTask = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTaskList([...temp]);
        }

    return (
        <div className='bg-slate-100 h-screen '>
            <div className='max-w-[80%] mx-auto py-10'>

                <h1 className='font-bold text-center my-5 text-3xl'>TODO LIST</h1>

                <div className='bg-white rounded-lg shadow-lg'>

                    <div className='p-6 border-b-2'>

                        <input
                            onKeyDown={addNewTask}
                            className='w-full px-3 py-1 border-2'
                            type="text"
                        />

                         
                    </div>

                    <div className='p-8 h-[60vh] overflow-y-scroll'>
                        {
                            taskList.map((task, index) => {
                                return <div key={index} className='shadow mb-5 rounded-lg p-5 bg-blue-500 font-medium text-white flex justify-between items-center'>
                                    <div>
                                    {task.completed ?
                                     <p className='bg-white w-fit text-green-500 font-bold text-sm rounded-full px-3 '>Completed</p> : 
                                    <p className='bg-white w-fit text-yellow-700 font-bold text-sm rounded-full px-3'>pending</p>} 
                                    <p className='font-bold'>{task.text}</p>
                                    
                                    
                                    </div>
                                    <div className='flex gap-3'>
                                        <button className='p-2 rounded bg-white' onClick={() => {deleteTask(index)}}>
                                            <IconTrash color= 'red' size ={24}  />
                                        </button>
                                        <button className='p-2 rounded bg-white' onClick={() => {toggleTask(index)}}>
                                            {
                                                task.completed ?
                                                <IconSquareRoundedCheckFilled  className='text-green-700' size ={24}/> :
                                            
                                            <IconSquareRoundedCheck className='text-green-700' size ={24}/>
                               }
                                        </button>
                                    </div>
                                </div>
                            })
                        }



                    </div>

                </div>

            </div>




        </div>
    )
}

export default Todolist;