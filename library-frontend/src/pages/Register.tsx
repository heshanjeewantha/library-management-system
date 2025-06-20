import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import type { LoginDto } from '../types';
import '../css/Login.css'; 

const Register = () => {
  const [form, setForm] = useState<LoginDto>({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(form);
      alert('Registered successfully');
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <div className="container-fluid p-3 my-5 h-custom">
      <div className="row">
        {/* Image Column */}
        <div className="col-10 col-md-6">
         <img 
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" 
            className="img-fluid" 
            alt="Sample image" 
          />
        </div>

        {/* Form Column */}
        <div className="col-4 col-md-6">
          {/* Social Registration Section */}
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign up with</p>
            
            <button className="btn btn-floating btn-primary me-2" type="button">
              <i className="fab fa-facebook-f"></i>
            </button>
            
            <button className="btn btn-floating btn-info me-2" type="button">
              <i className="fab fa-twitter"></i>
            </button>
            
            <button className="btn btn-floating btn-primary me-2" type="button">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          {/* Divider */}
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Username Input */}
            <div className="form-floating mb-4">
              <input
                name="username"
                type="text"
                className="form-control form-control-lg"
                id="username"
                placeholder="Username"
                onChange={handleChange}
                value={form.username}
                required
                minLength={3}
              />
              <label htmlFor="username">Username</label>
            </div>

            {/* Password Input */}
            <div className="form-floating mb-4">
              <input
                name="password"
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
                required
                minLength={6}
              />
              <label htmlFor="password">Password</label>
            </div>

            {/* Validation Messages */}
            <div className="mb-3">
              {form.username && form.username.length < 3 && (
                <div className="text-danger small">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  Username must be at least 3 characters.
                </div>
              )}
              {form.password && form.password.length < 6 && (
                <div className="text-danger small">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  Password must be at least 6 characters.
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="d-flex justify-content-center mb-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" required />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree to the <a href="#!" className="link-danger text-decoration-none">Terms & Conditions</a>
                </label>
              </div>
            </div>

            {/* Register Button & Login Link */}
            <div className="text-center text-md-start mt-4 pt-2">
              <button 
                className="btn btn-success btn-lg mb-0 px-5" 
                type="submit"
                disabled={
                  !form.username ||
                  !form.password ||
                  form.username.length < 3 ||
                  form.password.length < 6
                }
              >
                Register
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Already have an account? <a href="/login" className="link-primary text-decoration-none">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
};

export default Register;