
import About from './components/About';
import Skills from './components/Skills';
import { useNavigate } from 'react-router-dom';
import Photo from "./Images/Contact_pfp.png";
import Contact from './components/Contact';

export default function Home() {

    return (
      <>
        <About/>
        <Skills/>
        <Contact />
      </>
    );
}

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* nav tag for the navigation bar */}
    <nav>
      <div className="container flex flex-wrap items-center justify-between mx-auto bg-red-200 top-0 text-center text-lg overflow-hidden no-underline drop-shadow-lg py-3.5 px-3.5 w-max rounded-b-2xl font-a">
      {/* will be linked to the About me section in another function*/}
          <a href="#" onClick= {() => navigate("/")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Home</a>
          <a href='#about' src={About}  onClick={() => navigate("/#about")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">About</a>
          <button onClick={() => navigate("/Projects")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Projects</button>
          <a href="#skills" src={Skills} onClick={() => navigate("/#skills")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Skills</a>
          <a href="#contact" onClick={() => navigate("/#contact")} className="inline-flex rounded-full border-4 border-red-200 hover:scale-110"><img src={Photo} alt='Me drinking Boba' className='object-scale-down h-20 max-w-full rounded-full'></img></a>
      </div>
    </nav>
    </>
  );
}