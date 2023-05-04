import React from 'react';
import PDFFile from '../../Components/PDFFile';
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
    return (

        <div className='main-container'><h1 className='font-bold text-center text-5xl mt-8'>SultanTable Blogs</h1>




            <PDFDownloadLink document={<PDFFile />} filename="BLOGS">
                {({ loading }) => (loading ? <button className='block mt-8 mx-auto btn text-xl bg-[#FFE382] text-black hover:text-white border-none'>Loading Document...</button> : <button className='block mt-8 mx-auto btn text-xl bg-[#FFE382] text-black hover:text-white border-none'>Download this page as pdf</button>)}
            </PDFDownloadLink>



            <div className='main-container my-12 grid grid-cols-2 gap-8'>




                <div className="bg-slate-200 p-8 rounded-md">
                    <h1 className='font-semibold text-3xl'>1. Differences between uncontrolled and controlled components.</h1>
                    <p className='text-justify mt-4'>
                        Uncontrolled components are typically inputs or elements in a system that are not directly managed or manipulated by the system itself. They can include things like user inputs, environmental factors, or random events that impact the system but are not under its direct control. <br />

                        In contrast, controlled components are those that are managed or manipulated directly by the system. These components can include things like the software code of a program, the hardware components of a device, or the physical processes used in a manufacturing system. <br />

                        Overall, the key difference between uncontrolled and controlled components is that the former are external to the system and beyond its direct control, while the latter are internal and can be actively managed and manipulated by the system itself.
                    </p>
                </div>


                <div className="bg-slate-200 p-8 rounded-md">
                    <h1 className='font-semibold text-3xl '>2. How to validate React props using PropTypes?</h1>
                    <p className='text-justify mt-4'>
                        PropTypes is a library in React that allows us to validate the props passed to a component. We use it by defining the expected types and requirements for each prop using the propTypes object attached to the component class.
                    </p>
                </div>

                <div className="bg-slate-200 p-8 rounded-md">
                    <h1 className='font-semibold text-3xl '>3. difference between nodejs and express js?</h1>
                    <p className='text-justify mt-4'>
                        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript. <br />

                        Express.js, on the other hand, is a web application framework for Node.js that simplifies the process of building web applications. It provides a set of tools and features that allow developers to easily create robust and scalable web applications using Node.js.
                    </p>
                </div>



                <div className="bg-slate-200 p-8 rounded-md">
                    <h1 className='font-semibold text-3xl '>4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='text-justify mt-4'>
                        In React, a custom hook is a function that allows you to extract reusable logic from a component and share it across multiple components. Custom hooks are created by using the use prefix followed by a descriptive name. <br />

                        creating a custom hook can make your code more efficient, reusable, and easier to understand and maintain, particularly for complex or repetitive tasks that are used in multiple places throughout your application.
                    </p>
                </div>



            </div>
        </div>
    );
};

export default Blog;