import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style/App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='components'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/movie" element={<Movie />}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
