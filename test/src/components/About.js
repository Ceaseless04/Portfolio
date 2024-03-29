import IMG_0094 from '../Images/IMG_0094.png';

export default function About() {
    return (
        <div id='about' className='flex items-center justify-center grid-row-1 columns-2xs pt-11 space-x-11 '>
                <div className="flex justify-center">
                    <img src={ IMG_0094 } alt='Me'className='drop-shadow-xl rounded-lg w-auto h-96'></img>
                </div>
                <div className='text-center text-l bg-red-200 rounded-lg drop-shadow-xl grid-rows-2 space-y-3 '>
                    <h2 className='bg-red-100 text-3xl w-auto rounded-t-lg font-semibold'>About Me</h2>
                    <p className='font-medium'>
                        Besides being a Software Engineer, I like to watch movies, skateboard,
                        work-out, 
                        <br></br>
                        and help my community.
                        <br></br>
                        <br></br>
                        I am currently pursuing a Bachelors in Computer Science,
                        being enrolled
                        <br></br> in courses such as Programming II and Discrete Structures.
                    </p>
                    <br></br>
                </div>
        </div>
    );
}