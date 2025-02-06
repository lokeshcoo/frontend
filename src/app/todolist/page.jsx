'use client';
import { IconSquareRoundedCheck, IconTrash, IconTrashFilled } from '@tabler/icons-react';
import React, { useState } from 'react'

const TodoList = () => {
  //let count = 0;
  // const [count, setCount] = useState(0); // first value is read only/display and sec is setcount is for updation 
  const [taskList, setTaskList] = useState([
    //{ text: 'Eat Food', completed: false },
    //{ text: 'Play Games', completed: false },
    //{ text: 'Do Coding', completed: false }
  ]);

  const addNewTask = (e) => {

    if (e.code === 'Enter') {

      if (!e.target.value.trim()) {
        return alert('Please enter a task');
      }
      console.log(e.target.value);

      const newTask = { text: e.target.value, completed: false };

      setTaskList([newTask, ...taskList])

      e.target.value = '';


    }

  }

  const deleteTask = (index) => {
    console.log(index);

    const temp = taskList;
    taskList.splice(index,1);
    setTaskList([...temp]);
    
  }

  return (
    <div className='bg-slate-100 h-screen'>
      <div className='max-w-[80%] mx-auto py-10'>
        <h1 className='font-bold text-center my-5 text-3xl'>TODO LIST</h1>
        <div className=' bg-white rounded-lg shadow-lg'>
          <div className='p-6 border-b-2'>
            <input
              onKeyDown={addNewTask}
              className='w-full px-3 py-1 border-2'
              type='text' />
            {/* <h1 className='text-2xl font-bold'>{count}</h1>
            <button className='border p-3' onClick={() => {
              setCount(count+1);
              console.log(count);
            }}> Add Count </button> */}
          </div>
          <div className='p-8 h-[60vh] overflow-y-hidden overflow-y-scroll'>
            {
              taskList.map((task, index) => {
                return <div key={index} className='shadow mb-5 rounded-lg p-5 bg-blue-500 text-white flex justify-between item-center'>
                  <p>{task.text}</p>
                  <div className='flex gap-3'>
                    <button className='bg-white p-2 rounded ' onClick={() => { deleteTask(index)}}>
                      <IconTrash color='red' size={20} />
                    </button>
                    <button className='bg-white p-2 rounded '>
                      <IconSquareRoundedCheck color='green' size={20} />
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

export default TodoList;