const skills = {
    // Dev Tools skills
    list1: ['VS Code', 'Github', 'Firebase', 'Git', 'IntelliJ'],
    // Coding Languages Skills
    list2: ['React', 'Express.js', 'HTML/CSS', 'Flutter', 'Java'],
    // Soft Skills
    list3: ['Team Co-operation', 'Feedback Management', 'Problem Solving', 'Prioritizing tasks'],
};

const dev_tools = () => {
    for(let i = 0; i < skills.list1.length; i++) {
        return (<li>{skills.list1[i]}</li>);
    }
}

export default function Skills() {

    return (
        <div id='skills' className=" flex flex-col text-center m-24 bg-red-200 rounded-lg drop-shadow-xl">
            <h2 className="text-3xl divide-y bg-red-100 rounded-t-lg font-semibold">Skills</h2>
            <table className="">
                <thead>
                    <tr>
                        <th scope="col" className="font-semibold">
                            Dev Tools
                        </th>
                        <th scope="col" className="font-semibold">
                            Coding Languages
                        </th>
                        <th scope="col" className="font-semibold">
                            Soft Skills
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <ul>
                                    {dev_tools}
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div>
                                <ul>
                                    <li>{skills.list2}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div>
                                <ul>
                                    <li>{skills.list3}</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <div className="flex grid-rows-1 columns-3 text-2xl space-x-72 justify-center">
                {/* Dev tools container
                <h5>Dev Tools</h5>
                <h5>Languages</h5>
                <h5>Soft Skills</h5>
            </div>
            <div className="flex justify-center text-base">
                <ul className="list-disc list-inside grid-rows-1 columns-3 inline-block text-left space-x-24">
                    {/* Dev Tools list
                    <div>
                        <li>VS Code</li>
                        <li>Github</li>
                        <li>Firebase</li>
                        <li>Git</li>
                        <li>IntelliJ</li>
                    </div>
                    {/* Coding Languages list 
                    <div>
                        <li>React</li>
                        <li>Express.js</li>
                        <li>HTML/CSS</li>
                        <li>Flutter</li>
                        <li>Java</li>
                    </div>
                    {/* Soft Skills list 
                    <div>
                        <li>Team Co-operation</li>
                        <li>Feedback Management</li>
                        <li>Problem Solving</li>
                        <li>Prioritizing tasks</li>
                    </div>
                </ul>
            </div> */}
        </div>
    );
}