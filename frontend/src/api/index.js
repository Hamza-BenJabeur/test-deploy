import axios from 'axios';

const url = 'http://20.112.114.234:6868/api/pets';


export const Registration = (reg) => axios.post(url, reg);
