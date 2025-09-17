// src/services/api.ts
import axios from 'axios';
import { cookies } from 'next/headers'; // برای server-side
import Cookies from 'js-cookie'; // برای client-side

// BaseURL از .env
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// ایجاد instance از axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// تابع برای گرفتن توکن از cookies
 const  getAuthToken = () => {
  // server-side
  if (typeof window === 'undefined') {
    const cookieStore = cookies();
    return  cookieStore.get('authToken')?.value || null;
  }
  // client-side
  return Cookies.get('authToken') || null;
};

// Interceptor برای اضافه کردن توکن به هدر
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// متد GET
export const apiGet = async <T>(endpoint: string, config = {}) => {
  try {
    const response = await api.get<T>(endpoint, config);
    return response.data;
  } catch (error) {
    console.error('API Get Error:', error);
    throw error;
  }
};

// متد POST
export const apiPost = async <T>(endpoint: string, data: any, config = {}) => {
  try {
    const response = await api.post<T>(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error('API Post Error:', error);
    throw error;
  }
};

// متدهای اختیاری: PUT و DELETE
export const apiPut = async <T>(endpoint: string, data: any, config = {}) => {
  try {
    const response = await api.put<T>(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error('API Put Error:', error);
    throw error;
  }
};

export const apiDelete = async <T>(endpoint: string, config = {}) => {
  try {
    const response = await api.delete<T>(endpoint, config);
    return response.data;
  } catch (error) {
    console.error('API Delete Error:', error);
    throw error;
  }
};

// ذخیره توکن در cookies
export const setAuthToken = (token: string) => {
  if (typeof window === 'undefined') {
    cookies().set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600, // 1 ساعت
    });
  } else {
    Cookies.set('authToken', token, { secure: true, sameSite: 'strict', expires: 1 });
  }
};

// حذف توکن از cookies
export const clearAuthToken = () => {
  if (typeof window === 'undefined') {
    cookies().delete('authToken');
  } else {
    Cookies.remove('authToken');
  }
};

export default api;