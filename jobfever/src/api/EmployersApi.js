import axios from "axios";


export const createEmployer = async(userData) =>{
    return await axios.post('http://localhost:8080/api/employers', userData);
}