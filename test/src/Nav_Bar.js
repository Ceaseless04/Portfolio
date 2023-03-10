import About from './About';
import Skills from './Skills';

// // create variables for sticky nav bar
// window.onscroll = function() {Sticky()}; // when user scrolls page, execute the Sticky function

// let nav_bar = document.getElementById("navbar"); // get the nav bar

// let sticky = nav_bar.offsetTop; // getting the offset position of the nav_bar

// // create another function that checks if the nav bar is sticky or not
// // Add the sticky class to the navbar when you reach its scroll position
// // Remove "sticky" when you leave the scroll position
// function Sticky() { 
//   if(window.pageXOffset >= sticky) nav_bar.classList.add("sticky");
//   else nav_bar.classList.remove("sticky");
// }

export default function TopNavBar() {
    return (
        // nav tag for the navigation bar
      <nav id="navbar" className="sticky top-0 text-center text-lg overflow-hidden no-underline py-3.5 px-4 bg-red-200 w-96 mx-auto rounded-b-2xl font-a">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href='#about' src={About} className="py-3.5 px-4">About</a> {/* will be linked to the About me section in another function*/}
            <a href='#portfolio' className="py-3.5 px-4">Portfolio</a>
            <a href="#skills" src={Skills} className="py-3.5 px-4">Skills</a>
            {/* <a href='#contact' src={Contact} className="py-3.5 px-4">Contact</a> */}
            <button className="px-4 py-3.5">Contact</button>
        </div>
        <div className="hidden absolute bg-gray-100">
          <button>Links to reach out to me</button>
        </div>
      </nav>
    );
  }