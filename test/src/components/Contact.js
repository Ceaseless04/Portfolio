// variables for links
let linkedIn = "https://www.linkedin.com/in/kristian-vazquez-0329b4244/";
let gitHub = "https://github.com/Ceaseless04";

export default function Contact() {
    return (
        <div className="flex container bg-red-200 my-11 w-auto text-center" id="contact"> {/* this will be the card container */}
          <ul>
            <li>
              <a href={linkedIn} target="_blank" rel="noreferrer" className='block px-4 py-3.5 hover:bg-red-300'>LinkedIn</a>
              <a href={gitHub} target="_blank" rel="noreferrer" className="block px-4 py-3.5 hover:bg-red-300">GitHUb</a>
            </li>
          </ul>
        </div>
    );
}