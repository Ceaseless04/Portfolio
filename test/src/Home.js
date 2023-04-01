
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
    <nav>
      <div className="container flex flex-wrap items-center justify-between mx-auto bg-red-200 top-0 text-center text-lg overflow-hidden no-underline drop-shadow-lg py-3.5 px-3.5 w-max rounded-b-2xl font-a">
      {/* will be linked to the About me section in another function*/}
          <button onClick= {() => navigate("/")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Home</button>
          <a href='#about' src={About} className="py-3.5 px-4 hover:bg-red-300 rounded-full">About</a>
          <button onClick={() => navigate("/Projects")} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Projects</button>
          <a href="#skills" src={Skills} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Skills</a>
      </div>
      <div className=''>
        <button onClick={() => navigate("/Contact")} className="inline-flex rounded-full border-4 border-red-200 hover:scale-110"><img src={Photo} alt='Me drinking Boba' className='object-scale-down h-24 max-w-full rounded-full'></img></button>
      </div>
    </nav>
    </>
  );
}