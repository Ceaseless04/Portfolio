import About from './About';
import Skills from './Skills';
import Portfolio from './Projects';

// variables for links
let linkedIn = "https://www.linkedin.com/in/kristian-vazquez-0329b4244/";
let gitHub = "https://github.com/Ceaseless04";

export default function TopNavBar() {
    return (
        // nav tag for the navigation bar
      <nav id="navbar" className="sticky top-0 text-center text-lg overflow-hidden no-underline py-3.5 px-4 bg-red-200 w-96 mx-auto rounded-b-2xl font-a">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* will be linked to the About me section in another function*/}
            <a href='#about' src={About} className="py-3.5 px-4 hover:bg-red-300 rounded-full">About</a>
            <a href='#portfolio'src={Portfolio} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Portfolio</a>
            {/* <Link to={Portfolio} className='py-3.5 px-4 hover:bg-red-300 rounded-full'>Portfolio</Link> */}
            <a href="#skills" src={Skills} className="py-3.5 px-4 hover:bg-red-300 rounded-full">Skills</a>
            <button id="actButton" data-dropdown-toggle="links" data-dropdown-trigger="hover" className="px-4 py-3.5 inline-flex hover:bg-red-300 rounded-full" type='button'>Contact</button>
        </div>
        <div id="links" className="hidden bg-white">
          <ul className='text-black' aria-labelledby='actButton'>
            <li>
              <a href={linkedIn} className='block px-4 py-3.5 hover:bg-red-200'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
