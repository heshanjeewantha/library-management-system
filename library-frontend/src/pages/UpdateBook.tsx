import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook, updateBook } from '../services/bookService';
import type { Book } from '../types';
import BookForm from '../components/BookForm';

const UpdateBook = () => {
  const { id } = useParams();
  const [form, setForm] = useState<Book>({ title: '', author: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getBook(parseInt(id)).then(res => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) await updateBook(parseInt(id), form);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      
      <BookForm book={form} onChange={handleChange} onSubmit={handleSubmit} isUpdate />
    </div>
  );
};

export default UpdateBook;