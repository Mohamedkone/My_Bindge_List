import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './Style/App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Movie from './components/Movie'
import TvShow from './components/TvShow';
import Stars from './components/Stars';
import Search from './components/Search';

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
          <Route  path="/search/:id" element={<Search />}/>
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
