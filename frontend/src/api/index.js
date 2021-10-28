import axios from 'axios';
//in the FILL_ME blank put your public ip adress of the instance
const url = 'http://"FILL_ME":6868/api/pets';


export const Registration = (reg) => axios.post(url, reg);
