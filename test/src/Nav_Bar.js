import About from './About';
import Skills from './Skills';

export default function TopNavBar() {
    return (
        // nav tag for the navigation bar
      <nav className="text-center text-lg overflow-hidden no-underline py-3.5 px-4 bg-red-200 w-96 mx-auto rounded-b-2xl font-a">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href='#about' src={About} className="py-3.5 px-4">About</a> {/* will be linked to the About me section in another function*/}
            <a href='#portfolio' className="py-3.5 px-4">Portfolio</a>
            <a href="#skills" src={Skills} className="py-3.5 px-4">Skills</a>
            <a href='#contact' className="py-3.5 px-4">Contact</a>
        </div>
        
        
      </nav>
    );
  }