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
            <div className="text-center text-base">
                <ul className="list-disc">
                    <li>VS Code</li>
                    <li>Github</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <li>IntelliJ</li>
                </ul>
            </div>
        </div>
    );
}