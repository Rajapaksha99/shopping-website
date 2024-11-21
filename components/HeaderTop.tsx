import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";




const HeaderTop = () => {
  return <div className='border-b border-gray-200 hidden sm:block'>
    <div className='container py-4'>
      <div className='flex justify-between items-center'>
        <div className='hidden lg:flex gap-1'>
          <div className='header_top__icon_wrapper'>
            <BsFacebook/>
          </div>

          <div className='header_top__icon_wrapper'>
            <FaTwitter/>
          </div>

          <div className='header_top__icon_wrapper'>
            <BsInstagram/>
          </div>

          <div className='header_top__icon_wrapper'>
            <BsLinkedin/>
          </div>
        </div>

        <div className='text-gray-500 text0[12px]'>
          <b>FREE SHIPPING</b> THIS WEEK OREDER OVER - $100
        </div>

        <div className='flex gap-4 text-gray-500 text-[12px] w-[70px]'>
          <select 
          name="currency" 
          id="currency"
          >
            <option value="USD $">USD $</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="LKR">LKR</option>  
          </select>

          <select
          className='text-gray-500 text-[12px] w-[80px]' name="language"
          id="language">
            <option value="English">English</option>
            <option value="French">French</option>
          </select>

        </div>
      </div>
    </div>
  </div>
}

export default HeaderTop;