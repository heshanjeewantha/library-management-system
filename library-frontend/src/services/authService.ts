import axios from 'axios';
import type {  LoginDto } from '../types';

const API_URL = 'https://localhost:7235/api/Auth';

export const register = (data: LoginDto) => axios.post(`${API_URL}/register`, data);
export const login = (data: LoginDto) => axios.post(`${API_URL}/login`, data);