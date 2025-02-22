'use client';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Link from 'next/link';

const ManageUser = () => {


    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        console.table(res.data);
        setUserList(res.data);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/user/delete/${id}`)
            .then((result) => {
                toast.success('User deleted successfully');
                fetchUserData();
            }).catch((err) => {
                console.log(err);
                toast.error('Failed to delete user')
            });
    }

    return (
        <div>
            <div className='max-w-[80%] mx-auto my-10 mt-8'>
                <h1 className='text-3xl font-bold text-center'>ManageUser</h1>

                <table className='w-full mt-10 border-2 border-blue-300'>
                    <thead className='bg-blue-600 text-white'>
                        <tr>
                            <th>S.No</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CITY</th>
                            <th>DATE</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user, index) => {
                                return <tr key={user._id}
                                    className={`border-2 border-blue-300 text-center  ${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                                    <td className='p-3'>{index + 1}</td>
                                    <td className='p-3'>{user._id}</td>
                                    <td className='p-3'>{user.name}</td>
                                    <td className='p-3'>{user.email}</td>
                                    <td className='p-3'>{user.city}</td>
                                    <td className='p-3'>{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button onClick={() => { deleteUser(user._id) }} className='rounded bg-red-500 text-white px-3 py-1 '><IconTrash />Delete</button>
                                    </td>
                                    <td>
                                        <Link href = {`/update-user/${user._id}`}
                                         className='block w-fit mx-auto rounded bg-blue-500 text-white px-3 py-1 '><IconPencil />Delete
                                         </Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ManageUser;