import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Book } from '../types';
import { addBook } from '../services/bookService';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const [form, setForm] = useState<Book>({ title: '', author: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBook(form);
    navigate('/');
  };

  return (
    <div className="container mt-5">
    <style>
        {`
            body {
                
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
            }
        `}
    </style>
      <BookForm book={form} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};
export default AddBook;