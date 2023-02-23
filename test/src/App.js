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
            <div className="about-me">
              <h2 id="intro">About Me</h2>
              {/*Short description (interest other than coding)*/}
              <p className="description">
                Apart from being a Software Engineer,<br></br>
                I like to listen to music, read books,<br></br>
                and help my community.
              </p>
            </div>
            {/*Education relevant to FIU (courses that relate to CS)*/}
            <div className="education">
              <h2 id="intro">Education</h2>
              <h3 id="school">Florida International University</h3>
                <p className="description">
                  <ul>
                    <li id="unordered-list">
                      Programming I & II
                    </li>
                    <li id="unordered-list2">
                      Discrete Structures
                    </li>
                  </ul> 
                </p>
            </div>
            {/*Dividing skills in 3 categories: tech skills, soft skills, and dev tools*/}
            <div className="tech-skills">
              <h2 id="intro">Technical Skills</h2>
              <div className="typesOf-skills">
                <div className="coding-languages">
                  <h3 id="languages">Languages</h3>
                  <ul>
                    <li>
                      
                    </li>
                  </ul>
                </div>
                <h3 id="database">Database Management</h3>
                <h3 id="tools">Tools</h3>
                <h3 id="other">Soft Skills</h3>
              </div>
            </div>
        </div>
      </body>
    </div>
  );
}
