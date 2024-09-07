import baseUrl from "../constants/baseUrl/baseUrl";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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

export const getCarDetailAdmin = async (slug) => {
  try {
    const response = await instanceAxios.get(`car/detail/admin/${slug}`);
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

export const dealerLogin = async (data) => {
  try {
    const response = await instanceAxios.post(`dealer/login`, data);
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
    toast.error("Sistemə Daxil olun")
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

export const carLoanRequest = async (data) => {
  try {
    const response = await instanceAxios.post(`car/loan-request`, data);
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

export const carFeatureListDrive = async (id) => {
  try {
    const response = await instanceAxios.get(`car-feature-list/drive`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const createCar = async (data, token) => {
  try {
    const response = await instanceAxios.post("car/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const editCar = async (data, token) => {
  try {
    const response = await instanceAxios.post("car/update", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const adminDealerUptade = async (data, token) => {
  try {
    const response = await instanceAxios.put(`dealer/update`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
export const getDealerCity = async () => {
  try {
    const response = await instanceAxios.get(`dealer/city-list`);

    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
export const dealerDetailSlug = async (slug) => {
  try {
    const response = await instanceAxios.get(`dealer/detail/${slug}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};


export const dealerFilterCars = async (slug,token) => {
  try {
    const response = await instanceAxios.get(`car/dealer-admin/list?status=${slug}`,{
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};


export const getDealerInfo = async (token) => {
  try {
    const response = await instanceAxios.get(`dealer/detail`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const dealerDetail = async () => {
  try {
    const response = await instanceAxios.get(`dealer/list`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteCar = async (slug, token) => {
  try {
    const response = await instanceAxios.delete(`car/delete/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};


export const getFaqs = async () => {
  try {
    const response = await instanceAxios.get(`faq/category/list`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const faqSearchQuery = async (query) => {
  try {
    const response = await instanceAxios.get(`faq/search/${query}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
