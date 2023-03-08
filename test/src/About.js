import IMG_0094 from './IMG_0094.png';

export default function About() {
    return (
        <div id='about' className='flex'>
            {/* <img src={ IMG_0094} alt='Me' className='absolute w-auto h-96 rounded-lg mx-72 mt-4'></img> */}
                <div className='object-cover h-96 w-96'>
                    <img src={ IMG_0094 } alt='Me'></img>
                </div>
                <div>
                </div>
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
        </div>
    );
}