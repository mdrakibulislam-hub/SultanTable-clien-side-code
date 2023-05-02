import React from 'react';
import mailIcon from './../assets/mail-icon.png';
import phoneIcon from './../assets/phone-icon.png';

const ContactsSection = () => {
    return (
        <div className='main-container my-16'>


            <div className='grid grid-cols-2'>


                <div className='flex flex-col gap-4 my-auto'>

                    <h1 className='font-semibold text-3xl my-8'>Send Us Your Feedback</h1>

                    <div className='flex gap-2 items-center'>
                        <img src={mailIcon} alt="" />
                        <div>
                            <p>E-mail us</p>
                            <h1 className='font-bold text-2xl'>hello@rakib.pro</h1>
                        </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <img src={phoneIcon} alt="" />
                        <div>
                            <p>Phone / WhatsApp</p>
                            <h1 className='font-bold text-2xl'>01571-252327</h1>
                        </div>
                    </div>
                </div>

                <div className='my-auto'>
                    <h1 className='font-bold text-4xl'>👋 Say Hi!</h1>
                    <input className='mt-6 block border-b-2 w-8/12 p-3 outline-none' type="email" name="" id="" placeholder='Enter your email here' />

                    <textarea className='mt-6 block border-b-2 w-8/12 p-3 outline-none' name="" id="" cols="30" rows="3" placeholder='Enter your feedback here...'></textarea>
                    <button className='mt-6 btn bg-[#FFD541] text-black hover:text-white border-none w-2/5'>Send</button>
                </div>


            </div>

        </div>
    );
};

export default ContactsSection;