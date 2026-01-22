
import React from 'react';
import Navbar from './Navbar';
import ScrollingText from './ScrollingText';
import SubNavbar from './SubNavbar';
import Cards from './Cards';
import NewsApiHooks from '../hooks/NewsApiHooks';


// Newsapp component: main container for the news application
const Newsapp = () => {
  // Custom hook for news data and search logic
  const { newsData, handleSearch } = NewsApiHooks();

  return (
    <div>
      {/* Top navigation bar with search */}
      <Navbar handleSearch={handleSearch} />

      {/* Scrolling breaking news or highlights */}
      <ScrollingText />

      {/* Sub-navbar for category selection */}
      <SubNavbar handleSearch={handleSearch} />

      {/* News cards display */}
      {
        newsData ? ( <Cards data={newsData} /> ) : 
        ( <div className='not-found'>No Data Found</div> )
        }
    </div>
  );
};

export default Newsapp;