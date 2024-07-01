import baseUrl from "@/constants/baseUrl/baseUrl";
import axios from "axios";

const instanceAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

//! Cars 
export const getCars = async () => {
    try {
        const response = await instanceAxios.get(`car/all-list`);
        return response.data;
    } catch (error) {
        console.log({ error })
    }
};

export const getCarDetail = async (slug) => {
    try {
        const response = await instanceAxios.get(`car/detail/${slug}`);
        return response.data;
    } catch (error) {
        console.log({ error })
    }
};

