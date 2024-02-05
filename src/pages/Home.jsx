import React from 'react'
import { toast } from 'react-toastify';

function Home() {

    const notify = () => toast.info("Wow so easy!");

    return (
        <div className='text-center'>
            <header >Home</header>
            <button onClick={notify}>click me</button>
        </div>

    )
}

export default Home