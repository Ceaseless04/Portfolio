import './App.css';

export default function App() {
  return (
    <div>
        <TopNavBar />
    </div>
  );
}

function TopNavBar() {
  return (
    <nav className="text-center text-lg overflow-hidden no-underline py-3.5 px-4">
      <a href='#about' className="py-3.5 px-4">About</a>
      <a href='#skills' className="py-3.5 px-4">Skills</a>
      <a href='#portfolio' className="py-3.5 px-4">Portfolio</a>
      <a href='#contact' className="py-3.5 px-4">Contact</a>
    </nav>
  );
}