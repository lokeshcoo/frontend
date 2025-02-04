'use client';
import React from 'react'

const EventHandling = () => {
    const previewImage = (e) => {
        const file = e.target.files[0];

        // initialize file reader object
        const reader = new FileReader();

        // add img to page when file is loaded
        reader.onload = (data) => {
            const img = document.createElement('img');
            img.src = data.target.result;
            document.body.appendChild(img);
        }
        //read the file
        reader.readAsDataURL(file);
    }

    return (
        <div className='max-w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold text-center my-6'>Event Handling</h1>
            <hr />

            <button
                onClick={() => { alert('button was clicked'); }}
                className='border rounded-md p-3 bg-gray-200'
            >Click Me</button>

            <input
                onChange={(e) => { console.log(e.target.value); }}
                className='w-full px-3 py-1 border-2 my-5'
                type="text" />
            <input
                onChange={(e) => { document.body.style.backgroundColor = e.target.value }}

                className='mt-5' type='color'></input>
            <input
                multiple
                accept='image/png'
                onChange={(e) => { console.log(e.target.files); }}
                type='file' />
            <input onChange={previewImage} accept='image/*' type="file" />
        </div>
    )
}

export default EventHandling;