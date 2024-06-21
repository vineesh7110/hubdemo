import React from 'react';
import { Link} from 'react-router-dom';


function HomePage(props) {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This enables smooth scrolling
    });

    return (
        <main className='h-full mt-36'>
            
        
         <img className="h-screen w-screen absolute" src="https://img.freepik.com/premium-photo/plant-growing-out-hole-ground_181083-567.jpg?w=996" alt="" />
    
         <h1 className='relative p-24 text-4xl text-white'>Organic & <br/> Eco Natural Products</h1>
         <Link className='text-xl px-16 py-6 relative ml-24 border border-white text-white rounded-lg hover:bg-amber-800' onClick={scrollTo} to={'/signup'}>Signup</Link>

        <video className='w-96 h-96' src="nt.mp4" controls></video>

        </main>

    );
}

export default HomePage;