import axios from 'axios';
import type { Book } from '../types';

const API_URL = 'https://localhost:7235/api/book';

const authHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
};

export const getBooks = () => axios.get(API_URL, authHeader());
export const getBook = (id: number) => axios.get(`${API_URL}/${id}`, authHeader());
export const addBook = (book: Book) => axios.post(API_URL, book, authHeader());
export const updateBook = (id: number, book: Book) => axios.put(`${API_URL}/${id}`, book, authHeader());
export const deleteBook = (id: number) => axios.delete(`${API_URL}/${id}`, authHeader());
