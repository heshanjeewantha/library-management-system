import type { Book } from '../types';
import { Link } from 'react-router-dom';

type Props = {
  books: Book[];
  onDelete: (id: number) => void;
};

const BookList = ({ books, onDelete }: Props) => (
    <div>
        <table className="table table-striped table-bordered ">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.description}</td>
                        <td>
                            <Link to={`/update/${book.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                            <button onClick={() => onDelete(book.id!)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default BookList;
