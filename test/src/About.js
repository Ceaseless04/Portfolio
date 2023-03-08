import IMG_0094 from './IMG_0094.png';

/*
    TO DO'S:
    - Complete AND deploy personal website by thursday:
        - fix flexbox for about me
        - do row and col for skills
        - learn vercel for deploying a website to production
*/

export default function About() {
    return (
        <div id='about' className='flex'>
            {/* <img src={ IMG_0094} alt='Me' className='absolute w-auto h-96 rounded-lg mx-72 mt-4'></img> */}
                <div className='object-cover h-80 w-80'>
                    <img src={ IMG_0094 } alt='Me'className='rounded-lg'></img>
                </div>
                <br></br>
                <div className='text-center text-l'>
                    <p>
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
        </div>
    );
}