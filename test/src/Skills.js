export default function Skills() {
    return (
        <div id='skills' className="text-center text-3xl pt-72">
            <h2>Skills</h2>
            <div className="grid-rows-1 columns-3 pt-8 text-2xl">
                {/* Dev tools container */}
                <h5>Dev Tools</h5>
                <h5>Languages</h5>
                <h5>Soft Skills</h5>
            </div>
            <div className="text-justify text-base">
                <ul className="list-disc list-inside grid-rows-1 columns-3">
                    <li>VS Code</li>
                    <li>Github</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <li>IntelliJ</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>HTML/CSS</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                    <li>Team Co-operation</li>
                    <li>Feedback Management</li>
                    <li>Problem Solving</li>
                    <li>Prioritizing tasks</li>
                </ul>
            </div>
        </div>
    );
}