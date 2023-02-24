import './App.css';

export default function App() {
  return (
    <div className="App">
      <body>
          <div className="text">
            {/*nav bar that links according to headings*/}
            <div className="nav-bar">
              <a class="active" href=".about-me">About Me</a>
              <a href=".education">Education</a>
              <a href=".tech-skills">Skills</a>
              <a href=".portfolio">Portfolio</a>
            </div>
            <h1 id="title">Personal Website</h1>
            <h2 id="intro">Hi!😄</h2>
            <section className="about-me">
              <h2 id="intro" className='text-2xl font-mono'>About Me</h2>
              {/*Short description (interest other than coding)*/}
              <p className="description">
                Apart from being a Software Engineer,<br></br>
                I like to listen to music, read books,<br></br>
                and help my community.
              </p>
            </section>
            {/*Education relevant to FIU (courses that relate to CS)*/}
            <section className="education">
              <h2 id="intro">Education</h2>
              <h3 id="school">Florida International University</h3>
                <p className="description">
                  <ul>
                    <li id="unordered-list" className='list-disc'>
                      Programming I & II
                    </li>
                    <li id="unordered-list2" className='list-disc'>
                      Discrete Structures
                    </li>
                  </ul> 
                </p>
            </section>
            {/*Dividing skills in 3 categories: tech skills, soft skills, and dev tools*/}
            <section className="tech-skills">
              <h2 id="intro">Technical Skills</h2>
              <div className="typesOf-skills">
                <div className='text-center'>
                  <h3 id="languages">Languages</h3>
                  <ul>
                    <li id="unordered-list" className='list-disc'>
                      HTML5/CSS
                    </li>
                    <li id="unordered-list" className='list-disc'>
                      React.js
                    </li>
                    <li id="unordered-list" className='list-disc'>
                      Tailwind
                    </li>
                    <li id="unordered-list" className='list-disc'>
                      TypeScript
                    </li>
                  </ul>
                </div>
                <h3 id="database">Database Management</h3>
                <h3 id="tools">Tools</h3>
                <h3 id="other">Soft Skills</h3>
              </div>
            </section>
        </div>
      </body>
    </div>
  );
}
