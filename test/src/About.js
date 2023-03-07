import IMG_0094 from './IMG_0094.png';

export default function About() {
    return (
        <div id='about'>
            {/* <img src={ IMG_0094} alt='Me' className='absolute w-auto h-96 rounded-lg mx-72 mt-4'></img> */}
            <span className=''>
                <img src={ IMG_0094} alt='Me' className='absolute w-auto h-96 rounded-lg mx-72 mt-4'></img>
                <h2 className='relative text-right text-3xl w-auto pr-96 pt-4'>About Me</h2>
                <br></br>
                <p className='relative text-center text-l pl-96'>
                    Besides being a Software Engineer, I like to watch movies, skateboard,
                     work-out, 
                     <br></br>
                     and help my community.
                    <br></br>
                    I am currently pursuing a Bachelors in Computer Science,
                    being enrolled in courses such as 
                    <br></br>
                    Programming II and Discrete Structures.
                </p>
                <br></br>
            </span>
        </div>
    );
}