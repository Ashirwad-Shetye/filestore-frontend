import axios from "axios";
import { getItemFromStorage } from "../lib/localStorage";

const token = getItemFromStorage()

export const uploadFile = (params) => {
    return axios.post(`http://localhost:5000/api/file/upload`, params, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${token}`
        }
    });
};

export const getAllFile = ( userId) => {
    return axios.get(`http://localhost:5000/api/file/all/${userId}`, {
        headers: {
            Authorization: `${token}`
        }
    });
};

export const downloadFile = ( key) => {
    return axios.get(`http://localhost:5000/api/file/download/${key}`,{
        headers: {
            Authorization: `${token}`
        }
    });
};