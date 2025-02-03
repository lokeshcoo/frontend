import Button from '@/components/Button';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import React from 'react';

const Home = () => {
   return (
      <div >

         <h1 className='text-center font-bold my-5 text-3xl'> Home</h1>
         <h2 style={{ color: 'red', textAlign: 'center', fontSize: 30 }}>Welcome to React using Next JS </h2>
         <input type="text" className='p-2 border border-gray-800 ' />
         <button className='globalbtn'>Global Button</button>
         <img src="/next.svg" alt="" />
         <Button disabled={true}>My Button</Button>
         <Button>Submit </Button>
         <Button disabled={false}> Nice</Button>
         <Card
            title={'my card title'}
            description={'this is a card description'}
            primaryText={'Ok'}
            secondaryText={'Cancel'}></Card>
         <Card
            title={'my card title'}
            description={'this is a card description'}
            primaryText={'Ok'}
            secondaryText={'Cancel'}></Card>
         <Card
            title={'my card title'}
            description={'this is a card description'}
            primaryText={'Ok'}
            secondaryText={'Cancel'}></Card>



      </div>
   )
}

export default Home;