import React from 'react'
import "../App.css"
import insta from ".././assets/icons/Instagram.svg"
import twitter from ".././assets/icons/Twitter.svg"
import github from ".././assets/icons/Github.svg"
import linkedin from ".././assets/icons/Linkedin.svg"
import medium from ".././assets/icons/Medium.svg"



export default function Footer() {
  return (
    <div className='footer mx-auto max-w-screen-xl px-4 py-8 lg:px-8 border-t border-t-slate-400'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <div className='footer-text text-center text-m text-white lg:mt-0 lg:text-right'>
          <span>Built with 🖤 by <span><a href='https://www.linkedin.com/in/rbm77' target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline" }}>Ronak Maheshwari</a></span></span>
        </div>
        <div className='footer-icons flex justify-center align-middle'>
          <a href="https://x.com/0xronak077" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" style={{width:"25px"}} className='mx-5'/></a>
          <a href="https://github.com/ronakmaheshwari" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" style={{width:"25px"}} className='mx-5'/></a>
          <a href="https://www.instagram.com/ronakmaheshwari.eth/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram" style={{width:"25px"}} className='mx-5'/></a>
          <a href="https://www.linkedin.com/in/rbm77" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" style={{width:"25px"}} className='mx-5'/></a>
          <a href="https://medium.com/@ronakmaheshwari077" target="_blank" rel="noopener noreferrer"><img src={medium} alt="medium" style={{width:"25px"}} className='mx-5'/></a>
        </div>
      </div>
    </div>
  )
}
