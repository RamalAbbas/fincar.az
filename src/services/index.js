
import baseUrl from "../constants/baseUrl/baseUrl";
import axios from "axios";

const instanceAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNDYwNzEyLCJpYXQiOjE3MjE4MjA3MTIsImp0aSI6ImM3YzhlY2YxODIwMTQwYWJiNjcwOWRkYmI2OGY1ZGZlIiwidXNlcl9pZCI6OX0.7uDeHCEZNw0UnpOCVuLwygk123gyU9zgRhPQ6Vw0Jv0",
  },
});

//! Cars
export const getCars = async () => {
  try {
    const response = await instanceAxios.get(`car/all-list`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getPopularCars = async () => {
  try {
    const response = await instanceAxios.get(`car/popular-list`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getCarDetail = async (slug) => {
  try {
    const response = await instanceAxios.get(`car/detail/${slug}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getCarFilter = async (data) => {
  try {
    const response = await instanceAxios.get(`car/filter/?${data}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const register = async (data) => {
  try {
    const response = await instanceAxios.post(`client/register`, data);
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const login = async (data) => {
  try {
    const response = await instanceAxios.post(`client/login`, data);
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const getDealerList = async () => {
  try {
    const response = await instanceAxios.get(`dealer/list`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getDealerSearch = async (keyword) => {
  try {
    const response = await instanceAxios.get(`dealer/search/${keyword}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getDealerDetail = async (slug) => {
  try {
    const response = await instanceAxios.get(`dealer/detail/${slug}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getCarFeature = async () => {
  try {
    const response = await instanceAxios.get(`/car-feature-list`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const carSave = async (data) => {
  try {
    const response = await instanceAxios.post(`car-save`, data);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const carSaveList = async () => {
  try {
    const response = await instanceAxios.get(`car-save/list`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const carLoanCalculation = async (data) => {
  try {
    const response = await instanceAxios.post(`car/loan-calculation`, data);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteSavedCar = async (data) => {
  try {
    const response = await instanceAxios.delete(`car-save/delete/${data}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const carFeatureListModel = async (id) => {
  try {
    const response = await instanceAxios.get(`car-feature-list/model/${id}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

