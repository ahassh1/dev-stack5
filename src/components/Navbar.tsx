import React from 'react';
import navImg from "../assets/Background+Shadow.png"
const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className=''>
                <img src={navImg} alt="" />
                 <h2 className=''>Dev Stack</h2>
            </div>
             <ul>
                <li>

                Home
                </li>
                <li>
                 Technologies
               </li>
                <li>
                 Projects

                </li>
                <li>
                   About
                
                </li>
                <li>

                  Contact us                
                </li>
             </ul>
             <div>
                <button className=''> Sing In</button>
                <button className='text-[#D91B7E]'> Sing Up</button>
             </div>
        </div>
    );
};

export default Navbar;