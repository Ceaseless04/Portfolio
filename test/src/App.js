import Home from './Home';
import { NavBar } from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <BrowserRouter> {/* uses history API to keep UI in sync with URL*/}
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/Projects' element={<Projects />} />
        </Routes>
      </div>
      </BrowserRouter>
      </>
  );
}