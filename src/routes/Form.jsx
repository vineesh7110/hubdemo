import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function FormPage(props) {

    return (
        <main className='h-full mt-36'>

            <div className='grid grid-cols-2'>

                <section >

                    <div className='flex flex-row justify-between items-center justify-center p-4'>
                        <h1 className='text-2xl font-bold'>Contact</h1>
                        <Link to={'/login'}>Log in</Link>
                    </div>


                    <div className='m-4'>
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='Email' />
                    </div>

                    <div className='m-4'>
                        <h1 className='p-2 text-2xl font-bold'>Delivery</h1>
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='Country/region' />
                    </div>

                    <div className='grid grid-cols-2 m-4 gap-2'>
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='First Name' />
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='First Name' />
                    </div>

                    <div className='m-4'>
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='Address' />
                        <input className='w-full p-4 rounded-md border border-gray-400 mt-2' type="text" placeholder='Apartment,suite,etc.(optional)' />
                    </div>

                    <div className='grid grid-cols-3 m-4 gap-2'>
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='City' />
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='State' />
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='PIN Code' />
                    </div>

                    <div className='m-4'>
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='Phone' />
                    </div>

                    <div className='m-4'>
                        <h1 className='text-lg font-bold mb-4 p-2'>Shipping Method</h1>
                        <input className='w-full p-4 rounded-md bg-gray-100 border-gray-400' type="text" placeholder='Enter your shipping address to view available shipping methods' />
                    </div>

                    <div className='m-4'>
                        <h1 className='text-2xl mb-4 font-bold'>Payment</h1>
                        <p className='p-2'>All transactions are secure and encrypted.</p>

                        <div  className='w-full p-4 rounded-md border border-gray-400 flex flex-row justify-between'  >
                        <p>Cards, UPI, NB, Wallets, BNPL by PayU India</p>
                         
                        
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="visa.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="PaytmIMG.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="rupay.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="master.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="Googlepay.png" alt="" />
                       
                        </div> 
                        <section className='border flex flex-col items-center justify-center bg-gray-100' >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpjN7K7ebxchReP9n1xDmEyDoDC6NXtb7ow&s" alt="" />
                            <p className='m-4'>After clicking “Pay now”, you will be redirected to Cards, UPI, NB,<br /> Wallets, BNPL by PayU India to complete your purchase securely</p>
                        </section>
                    </div>


                    <div className='m-4'>
                        <h1 className='mb-2 font-bold'>Billing Address</h1>
                        <input className='w-full p-4 rounded-md border border-gray-400 mb-2' type="text" placeholder='Phone' />
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='Phone' />
                    </div>

                    <div className='flex items-center justify-center p-4'>
                        <button className='text-white text-lg font-bold bg-black rounded-md w-full p-4'>Pay now</button>
                    </div>
                </section>











                <section className=''>b</section>
            </div>



        </main>
    );
}

export default FormPage;