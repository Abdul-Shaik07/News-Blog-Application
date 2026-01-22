import React, { useState, useEffect } from 'react'
import NewsApi from '../api/NewsApi'

const NewsApiHooks = () => {

    const [newsData, setNewsData] = useState([]);
    const [search, setSearch] = useState("india");

    const fetchNewsData = async (search) => {
        try {
           const result = await NewsApi(search);
           setNewsData(result.data.articles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleSearch = (e) => {
        // Handle both string input from SubNavbar and event from Navbar
        const searchValue = typeof e === 'string' ? e : e.target.value;
        setSearch(searchValue);
    }

    useEffect(() => {
        fetchNewsData(search);
    }, [search]);



    return {newsData, search, handleSearch};

}

export default NewsApiHooks