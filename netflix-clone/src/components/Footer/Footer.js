import React from 'react'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"
function Footer() {
  return (
   <div className='footer-outer-container'>
    <div className='footer-inner-container'>
        <div className='footer-icons'>
            <FacebookOutlinedIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>
        <div className='footer-data'>
            <div>
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notice</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className='service-code'>
            <p>
                Service Code
            </p>
        </div>
        <div className='copy-right'>
            &copy; 1917-2024 Netflix, Inc.
        </div>
    </div>
   </div>
  )
}

export default Footer
