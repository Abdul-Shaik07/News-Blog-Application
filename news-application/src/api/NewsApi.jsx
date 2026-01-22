import axios from 'axios';
import React from 'react'

const API_BASE_URL = "http://localhost:8080";

const NewsApi = (search) => {
    return axios.get(`${API_BASE_URL}/news/api/search?search=${search}`);
  
}

export default NewsApi