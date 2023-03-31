
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    return (
      <>
        <About/>
        <Skills/>
      </>
    );
}

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    /* nav tag for the navigation bar */
    <nav className="top-0 text-center text-lg overflow-hidden no-underline bg-red-200 drop-shadow-lg py-3.5 px-4 w-96 mx-auto rounded-b-2xl font-a">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
              {/* will be linked to the About me section in another function*/}
                  <a href='#about' src={About} className="py-3.5 px-4 hover:bg-red-300 rounded-full">About</a>
                  <button onClick={() => navigate("/Projects")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Projects</button>
                  <a href="#skills" src={Skills} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Skills</a>
                  <button onClick={() => navigate("/Contact")} className="px-4 py-3.5 inline-flex hover:bg-red-300 rounded-full">Contact</button>
              </div>
    </nav>
  );
}