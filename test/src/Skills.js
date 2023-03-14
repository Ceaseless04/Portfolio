export default function Skills() {
    return (
        <div id='skills' className="text-center pt-32">
            <h2 className="text-3xl">Skills</h2>
            <div className="grid-rows-1 columns-3 pt-8 text-2xl">
                {/* Dev tools container */}
                <h5>Dev Tools</h5>
                <h5>Languages</h5>
                <h5>Soft Skills</h5>
            </div>
            <div className="flex justify-center text-base text-center">
                <ul className="list-disc list-inside grid-rows-1 columns-3 inline-block text-left space-x-28">
                    {/* Dev Tools list */}
                    <div>
                        <li>VS Code</li>
                        <li>Github</li>
                        <li>Firebase</li>
                        <li>Git</li>
                        <li>IntelliJ</li>
                    </div>
                    {/* Coding Languages list */}
                    <div>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML/CSS</li>
                        <li>TypeScript</li>
                        <li>Java</li>
                    </div>
                    {/* Soft Skills list */}
                    <div>
                        <li>Team Co-operation</li>
                        <li>Feedback Management</li>
                        <li>Problem Solving</li>
                        <li>Prioritizing tasks</li>
                    </div>
                </ul>
            </div>
        </div>
    );
}