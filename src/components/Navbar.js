import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className='flex justify-between container mx-auto mt-20 uppercase'>
      <div>
        <HashLink smooth to="#home" className='link-item'>
            Amir Khan Sumon
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li><HashLink smooth to="#home" className='link-item'>Home</HashLink></li>
        <li><HashLink smooth to="#home" className='link-item'>Projects</HashLink></li>
        <li><HashLink smooth to="#home" className='link-item'>Skills</HashLink></li>
        <li><HashLink smooth to="#home" className='link-item'>About</HashLink></li>
        <li><HashLink smooth to="#home" className='link-item'>Contact</HashLink></li>
        <li><a 
        href="www.google.com"
        target="_blank"
        rel="noreferrer"
        className='link-item'
        >
          Resume
        </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;