import type { Book } from '../types';
import '../css/Login.css'; // Use the same CSS file

type Props = {
  book: Book;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isUpdate?: boolean;
};

const BookForm = ({ book, onChange, onSubmit, isUpdate = false }: Props) => (
  <div className="container-fluid p-3 my-5 h-custom">
    <div className="row justify-content-center">
      {/* Image Column */}
      <div className="col-10 col-md-5 d-flex align-items-center justify-content-center">
        <img 
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" 
        
          className="img-fluid" 
          alt="Book illustration" 
          style={{ maxWidth: '400px' }}
        />
      </div>

      {/* Form Column */}
      <div className="col-12 col-md-7">
        <div className="card shadow-lg border-0" style={{ borderRadius: '1rem' }}>
          <div className="card-body p-5">
            {/* Header Section */}
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2">
                <i className={`fas ${isUpdate ? 'fa-edit' : 'fa-plus-circle'} me-2 text-${isUpdate ? 'primary' : 'success'}`}></i>
                {isUpdate ? 'Update Book' : 'Add New Book'}
              </h2>
              <p className="text-muted">
                {isUpdate ? 'Modify the book details below' : 'Fill in the details to add a new book to the library'}
              </p>
            </div>

            {/* Divider */}
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Book Details</p>
            </div>

            {/* Book Form */}
            <form onSubmit={onSubmit}>
              {/* Title Input */}
              <div className="form-floating mb-4">
                <input
                  name="title"
                  type="text"
                  className="form-control form-control-lg"
                  id="title"
                  placeholder="Book Title"
                  onChange={onChange}
                  value={book.title}
                  required
                />
                <label htmlFor="title">
                  <i className="fas fa-book me-2"></i>Book Title
                </label>
              </div>

              {/* Author Input */}
              <div className="form-floating mb-4">
                <input
                  name="author"
                  type="text"
                  className="form-control form-control-lg"
                  id="author"
                  placeholder="Author Name"
                  onChange={onChange}
                  value={book.author}
                  required
                />
                <label htmlFor="author">
                  <i className="fas fa-user-edit me-2"></i>Author Name
                </label>
              </div>

              {/* Description Textarea */}
              <div className="form-floating mb-4">
                <textarea
                  name="description"
                  className="form-control form-control-lg"
                  id="description"
                  placeholder="Book Description"
                  onChange={onChange}
                  value={book.description}
                  required
                  style={{ minHeight: '120px' }}
                ></textarea>
                <label htmlFor="description">
                  <i className="fas fa-align-left me-2"></i>Book Description
                </label>
              </div>

              {/* Submit Button */}
                <div className="text-center text-md-start mt-4 pt-2">
                  <button
                  type="button"
                  className={`btn btn-lg mb-0 px-5 ${isUpdate ? 'btn-primary' : 'btn-success'}`}
                  onClick={() => {
                    if (!localStorage.getItem('token')) {
                    alert('Please login to add books.');
                    return;
                    }
                    // If logged in, submit the form
                    (document.activeElement as HTMLElement)?.blur();
                    // Manually trigger submit
                    const form = document.querySelector('form');
                    // Simple validation
                    let valid = true;
                    const errors: Record<string, string> = {};
                    if (!book.title.trim()) {
                      errors.title = 'Title is required';
                      valid = false;
                    }
                    if (!book.author.trim()) {
                      errors.author = 'Author is required';
                      valid = false;
                    }
                    if (!book.description.trim()) {
                      errors.description = 'Description is required';
                      valid = false;
                    }
                    // Show errors if any
                    if (!valid) {
                      // Find or create error elements and set messages
                      Object.entries(errors).forEach(([field, msg]) => {
                      let el = document.getElementById(`${field}-error`);
                      if (!el) {
                        el = document.createElement('div');
                        el.id = `${field}-error`;
                        el.className = 'text-danger small mt-1';
                        const input = document.getElementById(field);
                        input?.parentElement?.appendChild(el);
                      }
                      el.textContent = msg;
                      });
                      // Remove error messages for valid fields
                      ['title', 'author', 'description'].forEach((field) => {
                      if (!errors[field]) {
                        const el = document.getElementById(`${field}-error`);
                        if (el) el.remove();
                      }
                      });
                      return;
                    } else {
                      // Remove all errors
                      ['title', 'author', 'description'].forEach((field) => {
                      const el = document.getElementById(`${field}-error`);
                      if (el) el.remove();
                      });
                    }
                    form && form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                    }}
                    >
                  <i className={`fas ${isUpdate ? 'fa-save' : 'fa-plus'} me-2`}></i>
                  {isUpdate ? 'Update Book' : 'Add Book'}
                  </button>
                  <div className="mt-3">
                  <small className="text-muted">
                    <i className="fas fa-info-circle me-1"></i>
                    {isUpdate ? 'Update the book information in your library' : 'Add this book to your digital library collection'}
                  </small>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>

   
  </div>
);

export default BookForm;