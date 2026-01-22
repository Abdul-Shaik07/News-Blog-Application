import React from 'react'

const SubNavbar = ( {handleSearch} ) => {
  return (
    <div>
        <nav className='sub-navbar'>
            <ul>
                <li onClick={() => handleSearch("sports")}>Sports</li>
                <li onClick={() => handleSearch("fitness")}>Fitness</li>
                <li onClick={() => handleSearch("politics")}>Politics</li>
                <li onClick={() => handleSearch("entertainment")}>Entertainment</li>
                <li onClick={() => handleSearch("health")}>Health</li>
            </ul>
        </nav>
    </div>
  )
}

export default SubNavbar