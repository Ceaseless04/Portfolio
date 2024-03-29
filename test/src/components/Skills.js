const skills = {
    // Dev Tools skills
    list1: ['VS Code', 'Github', 'Firebase', 'Git', 'IntelliJ'],
    // Coding Languages Skills
    list2: ['React', 'Express.js', 'HTML/CSS', 'React Native', 'Java'],
    // Soft Skills
    list3: ['Team Co-operation', 'Feedback Management', 'Problem Solving', 'Prioritizing tasks'],
};

export default function Skills() {

    return (
        <div id='skills' className="flex flex-col text-center my-24 mx-96 bg-red-200 rounded-lg drop-shadow-xl">
            <h2 className="text-3xl divide-y bg-red-100 rounded-t-lg font-semibold">Skills</h2>
            <table className="table-auto">
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
                <tbody className>
                    <tr>
                        <td>
                            <div>
                                <ul className=" grid-rows-1 text-center">
                                    <li>{skills.list1[0]}</li>
                                    <li>{skills.list1[1]}</li>
                                    <li>{skills.list1[2]}</li>
                                    <li>{skills.list1[3]}</li>
                                    <li>{skills.list1[4]}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div>
                                <ul className="grid-rows-1 text-center">
                                    <li>{skills.list2[0]}</li>
                                    <li>{skills.list2[1]}</li>
                                    <li>{skills.list2[2]}</li>
                                    <li>{skills.list2[3]}</li>
                                    <li>{skills.list2[4]}</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div>
                                <ul className=" grid-rows-1 text-center">
                                <li>{skills.list3[0]}</li>
                                <li>{skills.list3[1]}</li>
                                <li>{skills.list3[2]}</li>
                                <li>{skills.list3[3]}</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}