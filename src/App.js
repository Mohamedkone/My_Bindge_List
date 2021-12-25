import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style/App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Movie from './components/Movie'
import TvShow from './components/TvShow';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='components'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/movie" element={<Movie />}/>
          <Route  path="/tv_show" element={<TvShow />}/>
          <Route  path="/stars" element={<Stars />}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
