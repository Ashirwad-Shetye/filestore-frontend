import axios from "axios";
import { getItemFromStorage } from "../lib/storage";

const token = getItemFromStorage("token")

export const uploadFile = (params) => {
    return axios.post(`${import.meta.env.VITE_BASE_URL}/upload`, params, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    });
};

export const getAllFile = async () => {
    const userId = await getItemFromStorage("userId");
    return axios.get(`${import.meta.env.VITE_BASE_URL}/all/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const downloadFile = async(key) => {
    const userId = await getItemFromStorage("userId");
    return axios.get(`${import.meta.env.VITE_BASE_URL}/download/${userId}/${key}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};