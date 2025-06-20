import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;