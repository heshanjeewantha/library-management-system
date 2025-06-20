import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import type { LoginDto } from '../types';
import '../css/Login.css'; 

const Login = () => {
  const [form, setForm] = useState<LoginDto>({ username: '', password: '' });
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { username?: string; password?: string } = {};
    if (!form.username) newErrors.username = 'Username is required';
    if (!form.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await login(form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch {
      alert('Login failed');
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
          {/* Social Login Section */}
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            
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

          {/* Login Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Username Input */}
            <div className="form-floating mb-4">
              <input
                name="username"
                type="text"
                className={`form-control form-control-lg${errors.username ? ' is-invalid' : ''}`}
                id="username"
                placeholder="Username"
                onChange={handleChange}
                value={form.username}
              />
              <label htmlFor="username">Username</label>
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>

            {/* Password Input */}
            <div className="form-floating mb-4">
              <input
                name="password"
                type="password"
                className={`form-control form-control-lg${errors.password ? ' is-invalid' : ''}`}
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
              />
              <label htmlFor="password">Password</label>
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="d-flex justify-content-between mb-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-decoration-none">Forgot password?</a>
            </div>

            {/* Login Button & Register Link */}
            <div className="text-center text-md-start mt-4 pt-2">
              <button className="btn btn-primary btn-lg mb-0 px-5" type="submit">
                Login
              </button>
             
              <p className="small fw-bold mt-2 pt-1 mb-2">
                  <p className="text">Don't have an account?</p>
                 <a href="/register" className="link-danger text-decoration-none">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>

    
      
      
    </div>
  );
};

export default Login;