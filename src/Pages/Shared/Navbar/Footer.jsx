import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#FFE382]'>
            <div className='main-container bg-[#FFE382] py-8 mt-16 flex justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Sections</h1>
                    <ul className='text-lg flex flex-col gap-1 mt-2'>
                        <li>Home</li>
                        <li>Blogs</li>
                        <li>About</li>
                        <li>Our Mission</li>
                        <li>Contacts</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>FAQ</h1>
                    <ul className='text-lg flex flex-col gap-1 mt-2'>
                        <li>Who are we?</li>
                        <li>What we do?</li>
                        <li>What is our motive?</li>
                        <li>Can we be hired?</li>

                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-xl'>Subscribe to our newsletter</h1>
                    <p>
                        There are many variations of passages of available, but the majority have suffered
                    </p>
                    <div className='flex gap-3'>
                        <input className='bg-transparent border-black border-2 py-2 px-3 outline-none text-black rounded-md' type="email" name="" id="" placeholder='Email' />
                        <button className='btn'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;