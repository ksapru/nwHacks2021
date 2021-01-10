import axios from 'axios';
import React from 'react';

export default axios.create({
  baseURL: 'http://35.230.108.125:8080',
});
