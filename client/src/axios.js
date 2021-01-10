import axios from 'axios';
import react from 'react';

export default axios.create({
  baseURL: 'http://35.230.108.125:8080',
});