import React from 'react'

const ScrollingText = () => {
  return (
    <div>
        <marquee className='scrolling-text' behavior="scroll" direction="right" scrollamount="10">
            <p>Stay updated with the latest news from around the world!</p>
        </marquee>
    </div>
  )
}

export default ScrollingText