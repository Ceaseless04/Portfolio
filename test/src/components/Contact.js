// variables for links
let linkedIn = window.open("https://www.linkedin.com/in/kristian-vazquez-0329b4244/");
let gitHub = window.open("https://github.com/Ceaseless04");

export default function Contact() {
    return (
        <div className="bg-red-200 my-11 w-auto text-center">
          <ul>
            <li>
              <a href={linkedIn} className='block px-4 py-3.5 hover:bg-red-300'>LinkedIn</a>
              <a href={gitHub} className="block px-4 py-3.5 hover:bg-red-300">GitHUb</a>
            </li>
          </ul>
        </div>
    );
}