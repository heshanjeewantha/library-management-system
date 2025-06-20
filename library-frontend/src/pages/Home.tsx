import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';
import type {  Book } from '../types';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';


const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
   
<div className="container mt-5" style={{
    backgroundImage: `url('/src/assets/home.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh'
 }}>
 
    <h2>Book Details</h2>
    <Link to="/add" className="btn btn-primary mb-3">Add Book</Link>
    <BookList books={books} onDelete={handleDelete} />

 </div>
    
  );
};

export default Home;