import baseUrl from "../constants/baseUrl/baseUrl";
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

export const filterCar = async (data) => {
    try {
        const response = await instanceAxios.get(`car/filter`,data);
        return response;
    } catch (error) {
        console.log({ error })
    }
};

export const register = async (data) => {
    try {
        const response = await instanceAxios.post(`client/register`,data);
        return response;
    } catch (error) {
        console.log({ error })
    }
};

export const login = async (data) => {
    try {
        const response = await instanceAxios.post(`client/login`,data);
        return response;
    } catch (error) {
        console.log({ error })
    }
};
