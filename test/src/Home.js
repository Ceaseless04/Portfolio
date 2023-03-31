
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <BrowserRouter>
        {/* nav tag for the navigation bar */}
        <nav className="top-0 text-center text-lg overflow-hidden no-underline bg-red-200 drop-shadow-lg py-3.5 px-4 w-96 mx-auto rounded-b-2xl font-a">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
            {/* will be linked to the About me section in another function*/}
                <a href='#about' src={About} className="py-3.5 px-4 hover:bg-red-300 rounded-full">About</a>
                <Link to='/Projects' className="py-3.5 px-4 hover:bg-red-300 rounded-full">Projects</Link>
                <a href="#skills" src={Skills} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Skills</a>
                <Link to="/Contact" className="px-4 py-3.5 inline-flex hover:bg-red-300 rounded-full">Contact</Link>
            </div>
        
        </nav>
        <About/>
        <Skills/>

        <Routes>
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </>
    );
}