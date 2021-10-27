import axios from 'axios';

const url = 'http://20.115.132.190:6868/api/pets';


export const Registration = (reg) => axios.post(url, reg);
