import About from './About';
import Skills from './Skills';
import Portfolio from './Projects';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// variables for links
let linkedIn = "https://www.linkedin.com/in/kristian-vazquez-0329b4244/";
let gitHub = "https://github.com/Ceaseless04";

export default function TopNavBar() {
    return (
      <BrowserRouter>
        {/* nav tag for the navigation bar */}
      <nav className="top-0 text-center text-lg overflow-hidden no-underline bg-red-200 drop-shadow-lg py-3.5 px-4 w-96 mx-auto rounded-b-2xl font-a">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* will be linked to the About me section in another function*/}
            <a href='#about' src={About} className="py-3.5 px-4 hover:bg-red-300 rounded-full">About</a>
            <Link to="/Portfolio" className="py-3.5 px-4 hover:bg-red-300 rounded-full">Portolfio</Link>
            <a href="#skills" src={Skills} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Skills</a>
            <a href='#contact' className="px-4 py-3.5 inline-flex hover:bg-red-300 rounded-full">Contact</a>
        </div>
        <div className="hidden bg-white">
          <ul className='text-black'>
            <li>
              <a href={linkedIn} className='block px-4 py-3.5 hover:bg-red-300'>LinkedIn</a>
              <a href={gitHub} className="block px-4 py-3.5 hover:bg-red-300">GitHUb</a>
            </li>
          </ul>
        </div>
      </nav>


        <Routes>
          <Route path='/Portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    );
  }

