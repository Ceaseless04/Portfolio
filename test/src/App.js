import TopNavBar from './Nav_Bar';
import About from './About';
import Skills from './Skills';

export default function App() {
  return (
    <div>
        <TopNavBar />
        <h2 className='text-center text-3xl w-auto '>About Me</h2>
        <About />
        <Skills />
    </div>
  );
}