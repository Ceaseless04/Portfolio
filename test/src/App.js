import TopNavBar from './Nav_Bar';
import About from './About';
import Skills from './Skills';

export default function App() {
  return (
    <div>
        <TopNavBar />
        <h2 className='relative text-center text-3xl w-auto pr-96 pt-4'>About Me</h2>

        <About />
        <Skills />
    </div>
  );
}