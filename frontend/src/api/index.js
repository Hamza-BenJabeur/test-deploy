import axios from 'axios';

const url = 'http://20.94.198.235:6868/api/pets';


export const Registration = (reg) => axios.post(url, reg);
