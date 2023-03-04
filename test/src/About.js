import IMG_0094 from './IMG_0094.png';

export default function About() {
    return (
        <div id='about'>
            <img src={ IMG_0094 } alt='Me' className='absolute w-auto h-96 rounded-lg mx-72 mt-4'></img>
            <span>
                <h2 className='relative text-right text-3xl pr-96 pt-4'>About Me</h2>
                <br></br>
                <p className='relative text-right text-l pr-80'>
                    Besides being a Software Engineer,<br></br> I like to watch movies, skateboard,<br></br>
                     work-out, and help my community.
                </p>
                <br></br>
                <p className='relative text-center text-l pl-96'>
                    I am currently pursuing a Bachelors in Computer Science,<br></br>
                    being enrolled in courses such as Programming II and<br></br> 
                    Discrete Structures.
                </p>
            </span>
        </div>
    );
}