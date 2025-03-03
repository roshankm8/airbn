import React from 'react'
import './Banner.css'
import { Button } from '@mui/material'
function Banner() {
  return (
    <div className='banner'>
        <Button variant='outlined'>Search Dates</Button>
        <div className='banner_info'>
        <p>Sun, Pool & Bliss – Your Perfect Retreat Awaits!</p>
        <h3>Luxury, Comfort, and Serenity – Book Your Stay Today!</h3>
        <button>Explore Now</button>
        </div>

    </div>
  )
}

export default Banner