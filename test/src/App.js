import './App.css';

export default function App() {
  return (
    <div className="App">
      <body>
          <div className="text">
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
              <p className="description">
                Apart from being a Software Engineer,<br></br>
                I like to listen to music, read books,<br></br>
                and help my community.
              </p>
            </div>
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
            <div className="technical-skills">
              <h2 id="intro">Skills</h2>
            </div>
        </div>
      </body>
    </div>
  );
}
