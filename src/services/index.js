import baseUrl from "../constants/baseUrl/baseUrl";
import axios from "axios";
import Cookies from "js-cookie";

// Check if the cookie exists and is valid JSON
let data;
try {
  const cookieData = Cookies.get("data");
  data = cookieData ? JSON.parse(cookieData).access_token : "";
} catch (error) {
  console.error("Error parsing cookie data:", error);
  data = "";
}
console.log(data);

const instanceAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: data ? `Bearer ${data}` : "",
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
    const response = await instanceAxios.get(`car-feature-list`);
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

export const createCar = async (data) => {
  try {
    const response = await instanceAxios.post("car/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
