
import About from './components/About';
import Skills from './components/Skills';
import { useNavigate } from 'react-router-dom';
import Photo from "./Images/Contact_pfp.png";

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
    <>
    {/* nav tag for the navigation bar */}
    <nav className="top-0 text-center text-lg overflow-hidden no-underline bg-red-200 drop-shadow-lg py-3.5 px-3.5 w-max mx-auto rounded-b-2xl font-a">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
              {/* will be linked to the About me section in another function*/}
                  <button onClick= {() => navigate("/")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Home</button>
                  <a href='#about' src={About} className="py-3.5 px-4 hover:bg-red-300 rounded-full">About</a>
                  <button onClick={() => navigate("/Projects")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Projects</button>
                  <a href="#skills" src={Skills} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Skills</a>
                  <button onClick={() => navigate("/Contact")} className="py-3.5 px-3.5 inline-flex hover:bg-red-300 rounded-full"><img src={Photo} alt='Me drinking Boba' className='object-scale-down h-10 max-w-full rounded-full'></img></button>
              </div>
    </nav>
    </>
  );
}