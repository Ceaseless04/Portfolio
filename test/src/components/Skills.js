export default function Skills() {
    return (
        <div id='skills' className="text-center m-24 bg-red-200 rounded-lg drop-shadow-xl">
            <h2 className="text-3xl">Skills</h2>
            <hr class="h-px mx-96 my-2   bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex grid-rows-1 columns-3 pt-8 text-2xl space-x-72 justify-center">
                {/* Dev tools container */}
                <h5>Dev Tools</h5>
                <h5>Languages</h5>
                <h5>Soft Skills</h5>
            </div>
            <div className="flex justify-center text-base">
                <ul className="list-disc list-inside grid-rows-1 columns-3 inline-block text-left space-x-24">
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
                        <li>Express.js</li>
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